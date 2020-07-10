import React from "react";
import {CatalogItemFragment} from "../../generated/types";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {SelectionItem} from "./types";
import Grid from "@material-ui/core/Grid";
import SelectionCard from "./SelectionCard";
import EmptySelectionCard from "./EmptySelectionCard";

makeStyles(() => ({
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
    onClear(item: SelectionItem<T>): void
}

export default function SelectionFieldList<T extends CatalogItemFragment>(props: SelectionListProps<T>) {
    const {items, onClear} = props;

    return (
        <Grid container spacing={1}>
            {!items.length && <EmptySelectionCard/>}
            {items.map((item, idx) => (
                <Grid key={idx} item xs={12}>
                    <SelectionCard
                        item={item}
                        onClear={() => onClear(item)}
                    />
                </Grid>
            ))}
        </Grid>
    )
}
