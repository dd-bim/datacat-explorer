import ListItem from "@material-ui/core/ListItem";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import List from "@material-ui/core/List";
import {SelectionItem} from "./types";
import {CatalogItemFragment} from "../../generated/types";
import {ListItemIcon} from "@material-ui/core";
import CatalogItemIcon from "../icons/CatalogItemIcon";

type SelectionFieldProps<T extends CatalogItemFragment> = {
    item: SelectionItem<T> | null,
    clearSelectionLabel?: string
    noSelectionLabel?: string,
    onClear?(): void
}

export default function SelectionField<T extends CatalogItemFragment>(props: SelectionFieldProps<T>) {
    const {item, clearSelectionLabel, noSelectionLabel, onClear} = props;
    return (
        <List dense disablePadding>
            <ListItem dense disableGutters>
                {item ? (
                    <React.Fragment>
                        <ListItemIcon>
                            <CatalogItemIcon itemType={item.__typename}/>
                        </ListItemIcon>
                        <ListItemText primary={item.label} secondary={item.id}/>
                        {onClear && (
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label={clearSelectionLabel ?? "Clear selection"}
                                    onClick={onClear}
                                >
                                    <ClearIcon/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        )}
                    </React.Fragment>
                ) : (
                    <ListItemText primary={noSelectionLabel ?? "No selection..."}/>
                )}
            </ListItem>

        </List>
    )
}