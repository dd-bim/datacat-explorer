import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import {SelectionItem, SelectionState} from "./types";
import {CatalogItemFragment} from "../../generated/types";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import RedoIcon from "@material-ui/icons/Redo";
import makeStyles from "@material-ui/core/styles/makeStyles";


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

type SelectionFieldProps<T extends CatalogItemFragment> = {
    item: SelectionItem<T>,
    onClear?(): void
}

export default function SelectionCard<T extends CatalogItemFragment>(props: SelectionFieldProps<T>) {
    const {item, onClear} = props;
    const classes = useStyles();

    const {__typename, id, label} = item;
    let icon = <ClearIcon/>
    let extraClasses;
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
        <Card variant="outlined">
            <CardHeader
                classes={{
                    title: extraClasses
                }}
                avatar={
                    <Avatar aria-label={__typename}>
                        <CatalogItemIcon itemType={__typename}/>
                    </Avatar>
                }
                action={onClear && (
                    <IconButton aria-label="remove" onClick={onClear}>
                        {icon}
                    </IconButton>
                )}
                title={label}
                subheader={id}
            />
        </Card>
    );
}
