import Grid from "@material-ui/core/Grid";
import SelectionFieldList from "./SelectionFieldList";
import SearchListView from "../Search/SearchListView";
import {CatalogItemFragment, SearchInput} from "../../generated/types";
import React from "react";
import useItemsSelection from "./useItemsSelection";

type ItemsSelectionFormSetProps = {
    name: string,
    defaultValues?: CatalogItemFragment[]
    required?: boolean,
    searchLabel?: string,
    emptyLabel?: string,
    clearLabel?: string,
    filter(selection: CatalogItemFragment[]): SearchInput
}

export default function ItemsSelectionFormSet(props: ItemsSelectionFormSetProps) {
    const { name, defaultValues = [], required, searchLabel, emptyLabel, clearLabel, filter } = props;
    const {selection, add, remove} = useItemsSelection({ name, defaultValues });

    return (
        <Grid container spacing={3} item xs={12} justify="center">

            <Grid item xs={6}>
                <SelectionFieldList
                    items={selection}
                    noSelectionLabel={emptyLabel}
                    onClear={remove}
                />
            </Grid>

            <Grid item xs={6}>
                <SearchListView
                    onSelect={add}
                    filter={filter(selection)}
                    SearchFieldProps={{
                        label: searchLabel
                    }}
                />
            </Grid>

        </Grid>
    )
}
