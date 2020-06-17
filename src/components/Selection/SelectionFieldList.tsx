import React from "react";
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {CatalogItemFragment} from "../../generated/types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import RedoIcon from "@material-ui/icons/Redo";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {SelectionItem, SelectionState} from "./types";

const useStyles = makeStyles(theme => ({
    new: {
        fontWeight: "bold",
        fontStyle: "italic"
    },
    removed: {
        fontWeight: "bold",
        textDecoration: "line-through"
    }
}));

type SelectionListProps<T extends CatalogItemFragment> = {
    items: SelectionItem<T>[],
    noSelectionLabel?: string,
    onClear(item: SelectionItem<T>): void
}

export default function SelectionFieldList<T extends CatalogItemFragment>(props: SelectionListProps<T>) {
    const {items, noSelectionLabel, onClear} = props;
    const classes = useStyles();

    return (
        <List dense disablePadding>
            {!items.length && (
                <ListItem key="empty" dense disableGutters>
                    <ListItemText primary={noSelectionLabel ?? "No selection..."}/>
                </ListItem>
            )}
            {items.map(item => {
                let extraClasses;
                let icon = <ClearIcon/>;
                switch (item.state) {
                    case SelectionState.NEW:
                        extraClasses = classes.new;
                        break;
                    case SelectionState.PERSISTENT:
                        break;
                    case SelectionState.REMOVED:
                        extraClasses = classes.removed;
                        icon = <RedoIcon/>;
                        break;
                }
                return (
                    <ListItem key={item.id} dense disableGutters>
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
                                aria-label="Clear"
                                onClick={() => onClear(item)}
                            >
                                {icon}
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    )
}
