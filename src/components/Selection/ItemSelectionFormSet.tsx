import Grid from "@material-ui/core/Grid";
import SelectionField from "./SelectionField";
import SearchListView from "../Search/SearchListView";
import {CatalogItemFragment, SearchInput} from "../../generated/types";
import React from "react";
import useItemSelection from "./useItemSelection";
import {ValidationOptions} from "react-hook-form";

type ItemSelectionFormSetProps = {
    name: string,
    defaultValue?: CatalogItemFragment | null,
    searchLabel?: string,
    emptyLabel?: string,
    clearLabel?: string,
    filter(selection: CatalogItemFragment | null): SearchInput,
    validationOptions?: ValidationOptions
}

export default function ItemSelectionFormSet(props: ItemSelectionFormSetProps) {
    const {
        name,
        defaultValue = null,
        searchLabel,
        emptyLabel,
        clearLabel,
        filter,
        validationOptions
    } = props;
    const {selection, setSelection} = useItemSelection({name, defaultValue, validationOptions});

    return (
        <Grid container spacing={3} item xs={12} justify="center">

            <Grid item xs={6}>
                <SelectionField
                    item={selection}
                    noSelectionLabel={emptyLabel}
                    clearSelectionLabel={clearLabel}
                    onClear={!validationOptions?.required ? () => setSelection(null) : undefined}
                />
            </Grid>

            <Grid item xs={6}>
                <SearchListView
                    onSelect={item => setSelection(item)}
                    filter={filter(selection)}
                    SearchFieldProps={{
                        label: searchLabel
                    }}
                />
            </Grid>
        </Grid>
    );
}
