import {Link as ReactRouterLink} from "react-router-dom";
import {makeStyles, Theme} from "@material-ui/core/styles";
import React, {useRef, useState} from "react";
import {Popper} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import useEntityRoute from "../../hooks/useEntityRoute";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {RootFragment, useSearchInputQuery} from "../../generated/types";
import SearchField from "./SearchField";

const useStyles = makeStyles((theme: Theme) => ({
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

interface QuickSearchWidgetProps {
    className?: string
}

export function QuickSearchWidget(props: QuickSearchWidgetProps) {
    const classes = useStyles();
    const searchInput = useRef(null);
    const [query, setQuery] = useState("");
    const {loading, error, data} = useSearchInputQuery({
        skip: !query,
        fetchPolicy: "network-only",
        variables: {
            input: {query}
        }
    });
    const onClick = useEntityRoute();
    const open = Boolean(!error && !loading && query);
    const id = open ? 'transitions-popper' : undefined;

    return (
        <div ref={searchInput} className={props.className}>
            <SearchField
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <ClickAwayListener onClickAway={() => setQuery("")}>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={searchInput.current}
                    placement="bottom-end"
                    transition
                    className={classes.searchResults}
                >
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.searchContent}>
                                <Typography variant="body1">{data?.search.totalElements} Ergebnisse</Typography>
                                <List dense disablePadding>
                                    {data?.search.nodes.map(item => {
                                        const handleOnClick = () => {
                                            onClick(item);
                                            setQuery("");
                                        }
                                        const description = (item as RootFragment).descriptions?.reduce((acc, {value}, index) => {
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
                                            <ListItem key={item.id} button disableGutters onClick={handleOnClick}>
                                                <ListItemIcon className={classes.entityIcon}>
                                                    <CatalogItemIcon itemType={item.__typename}/>
                                                </ListItemIcon>
                                                <ListItemText primary={item.label} secondary={description}/>
                                            </ListItem>
                                        );
                                    })}
                                    <ListItem button component={ReactRouterLink} to={`/?q=${query}`}
                                              onClick={() => setQuery("")}>
                                        <ListItemText primary="Mehr..."/>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
            </ClickAwayListener>
        </div>
    );
}
