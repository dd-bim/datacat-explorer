import React from "react";
import {FilterInput, useValueListQuery, ValueFragment} from "../../generated/types";
import {useQueryOptions} from "../../hooks";
import SearchableList from "../Search/SearchableList";
import {SearchFieldProps} from "../Search/SearchField";

type SearchListProps = {
    onSelect(item: ValueFragment): void,
    filter: FilterInput,
    SearchFieldProps?: SearchFieldProps
}

export default function ValueSearchListView(props: SearchListProps) {
    const {onSelect, filter = {}, SearchFieldProps} = props;
    const {query, setQuery} = useQueryOptions();
    const {loading, error, data} = useValueListQuery({
        variables: {input: {query, ...filter}}
    });

    return (
        <SearchableList
            loading={loading}
            error={error}
            items={data?.values.nodes || []}
            onSelect={onSelect}
            SearchFieldProps={{
                value: query,
                onChange: e => setQuery(e.target.value),
                ...SearchFieldProps
            }}
        />
    )
}
