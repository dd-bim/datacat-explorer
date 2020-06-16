import React from "react";
import {CatalogItemFragment, FilterInput, useUnitListQuery} from "../../generated/types";
import {useQueryOptions} from "../../hooks";
import SearchableList from "../Search/SearchableList";
import {SearchFieldProps} from "../Search/SearchField";

type SearchListProps = {
    onSelect(item: CatalogItemFragment): void,
    filter: FilterInput,
    SearchFieldProps?: SearchFieldProps
}

export default function UnitSearchListView(props: SearchListProps) {
    const {onSelect, filter = {}, SearchFieldProps} = props;
    const {query, setQuery} = useQueryOptions();
    const {loading, error, data} = useUnitListQuery({
        variables: { input: {query, ...filter} }
    });

    return (
        <SearchableList
            loading={loading}
            error={error}
            items={data?.units.nodes || []}
            onSelect={onSelect}
            SearchFieldProps={{
                value: query,
                onChange: e => setQuery(e.target.value),
                ...SearchFieldProps
            }}
        />
    )
}
