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
    disabled?: boolean,
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
        disabled,
        validationOptions
    } = props;
    const {selection, setSelection} = useItemSelection({name, defaultValue, validationOptions});

    return disabled ? (
        <Grid item xs={12}>
            <SelectionField item={selection}/>
        </Grid>
    ) : (
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
