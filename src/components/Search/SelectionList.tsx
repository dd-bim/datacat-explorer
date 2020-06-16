import React from "react";
import {List, TextFieldProps} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {CatalogItemFragment} from "../../generated/types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchField from "./SearchField";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import RedoIcon from "@material-ui/icons/Redo";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles(theme => ({
    new: {
        fontWeight: "bold",
        fontStyle: "italic"
    },
    removed: {
        fontWeight: "bold",
        textDecoration: "line-through"
    },
    paper: {

    },
    search: {
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
    }
}));

export enum SelectionListItemState {
    NEW,
    PERSISTENT,
    REMOVED
}

export type SelectionListItem = {
    state: SelectionListItemState
} & CatalogItemFragment;

type SelectionListProps = {
    items: SelectionListItem[],
    onSelect(item: SelectionListItem): void,
    SearchFieldProps: TextFieldProps
}

export default function SelectionList(props: SelectionListProps) {
    const {items, onSelect, SearchFieldProps} = props;
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            {SearchFieldProps && (
                <div className={classes.search}>
                    <SearchField
                        variant="standard"
                        fullWidth
                        {...SearchFieldProps}
                    />
                </div>
            )}
            <List dense disablePadding>
                {items.map(item => {
                    let extraClasses;
                    let icon = <ClearIcon/>;
                    switch (item.state) {
                        case SelectionListItemState.NEW:
                            extraClasses = classes.new;
                            break;
                        case SelectionListItemState.PERSISTENT:
                            break;
                        case SelectionListItemState.REMOVED:
                            extraClasses = classes.removed;
                            icon = <RedoIcon/>;
                            break;
                    }
                    return (
                        <ListItem key={item.id} dense>
                            <ListItemIcon>
                                <CatalogItemIcon itemType={item.__typename}/>
                            </ListItemIcon>
                            <ListItemText
                                classes={{
                                    primary: extraClasses
                                }}
                                primary={item.label}
                                secondary={item.id}

                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => onSelect(item)}
                                >
                                    {icon}
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    )
}
