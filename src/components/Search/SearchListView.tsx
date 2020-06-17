import React from "react";
import {CatalogItemFragment, SearchInput, useSearchViewQuery} from "../../generated/types";
import {useQueryOptions} from "../../hooks";
import SearchableList from "../Search/SearchableList";
import {SearchFieldProps} from "./SearchField";

type SearchListProps = {
    onSelect(item: CatalogItemFragment): void,
    filter: SearchInput,
    SearchFieldProps?: SearchFieldProps
}

export default function SearchListView(props: SearchListProps) {
    const {onSelect, filter = {}, SearchFieldProps} = props;
    const {query, setQuery} = useQueryOptions();
    const {loading, error, data} = useSearchViewQuery({
        variables: { input: {query, ...filter} }
    });

    return (
        <SearchableList
            loading={loading}
            error={error}
            items={data?.search.nodes || []}
            onSelect={onSelect}
            SearchFieldProps={{
                value: query,
                onChange: e => setQuery(e.target.value),
                ...SearchFieldProps
            }}
        />
    )
}
