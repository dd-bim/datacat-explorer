import React from "react";
import {CatalogItemFragment, SearchInput, useSearchViewQuery} from "../../generated/types";
import {useQueryOptions} from "../../hooks";
import SearchableList from "../Search/SearchableList";
import {SearchFieldProps} from "./SearchField";

type SearchListProps<T extends CatalogItemFragment> = {
    onSelect(item: T): void,
    filter: SearchInput,
    SearchFieldProps?: SearchFieldProps
}

export default function SearchListView<T extends CatalogItemFragment>(props: SearchListProps<T>) {
    const {onSelect, filter = {}, SearchFieldProps} = props;
    const {query, setQuery} = useQueryOptions();
    const {loading, error, data} = useSearchViewQuery({
        variables: { input: {query, pageSize: 5, ...filter} }
    });

    return (
        <SearchableList
            loading={loading}
            error={error}
            items={data?.search.nodes || []}
            onSelect={onSelect}
            SearchFieldProps={{
                loading,
                value: query,
                onChange: e => setQuery(e.target.value),
                ...SearchFieldProps
            }}
        />
    )
}
