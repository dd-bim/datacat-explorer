import {gql} from "@apollo/client";
import {Link as ReactRouterLink} from "react-router-dom";
import {useFindAllQuery} from "../../hooks";
import {XtdRoot} from "../../types";
import {fade, makeStyles, Theme} from "@material-ui/core/styles";
import React, {useRef, useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {Popper} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EntityIcon from "../icons/EntityIcon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import useEntityRoute from "../../hooks/useEntityRoute";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

interface SearchInputProps {
    className?: string
}

const useStyles = makeStyles((theme: Theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    searchResults: {
        'z-index': theme.zIndex.modal
    },
    searchContent: {
        'margin-top': theme.spacing(1),
        'min-width': '150px',
        'max-width': '400px',
        'padding': theme.spacing(2)
    },
    entityIcon: {
        'min-width': 32
    }
}));

const query = gql`
    query AppBarSearch($options: SearchInput!) {
        search(options: $options, paging: { pageSize: 10 }) {
            nodes {
                id
                label
                ... on XtdRoot {
                    descriptions {
                        id value
                    }
                }
            }
            totalElements
        }
    }
`;

export function SearchInput(props: SearchInputProps) {
    const classes = useStyles();
    const searchInput = useRef(null);
    const [term, setTerm] = useState("");
    const { loading, error, nodes, totalElements } = useFindAllQuery<XtdRoot>(query, 'search', {
        skip: !term,
        fetchPolicy: "network-only",
        variables: {
            options: { term  }
        }
    });
    const onClick = useEntityRoute();
    const open = Boolean(!error && !loading && term);
    const id = open ? 'transitions-popper' : undefined;

    return (
        <React.Fragment>
        <div className={classes.search} ref={searchInput}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={term}
                onChange={e => setTerm(e.target.value)}
            />
        </div>
            <ClickAwayListener onClickAway={() => setTerm("")}>
            <Popper
                id={id}
                open={open}
                anchorEl={searchInput.current}
                placement="bottom-end"
                transition
                className={classes.searchResults}
            >
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper className={classes.searchContent}>
                            <Typography variant="body1">{totalElements} Ergebnisse</Typography>
                            <List dense disablePadding>
                                {nodes?.map(result => {
                                    const handleOnClick = () => {
                                        onClick(result);
                                        setTerm("");
                                    }
                                    const description = result.descriptions?.reduce((acc, {value}, index) => {
                                        if (index > 0) {
                                            acc += " | ";
                                        }
                                        acc += value;
                                        if (acc.length > 120) {
                                            return acc.substr(0, 120) + "…";
                                        }
                                        return acc;
                                    }, "")
                                    return (
                                        <ListItem key={result.id} button disableGutters onClick={handleOnClick}>
                                            <ListItemIcon className={classes.entityIcon}>
                                                <EntityIcon entityType={result.__typename}/>
                                            </ListItemIcon>
                                            <ListItemText primary={result.label} secondary={description}/>
                                        </ListItem>
                                    );
                                })}
                                <ListItem button component={ReactRouterLink} to={`/?q=${term}`} onClick={() => setTerm("")}>
                                    <ListItemText primary="Mehr..."  />
                                </ListItem>
                            </List>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            </ClickAwayListener>
        </React.Fragment>
    )
}
