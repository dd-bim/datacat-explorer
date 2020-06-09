import {useQueryOptions} from "../../hooks";
import * as React from "react";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {useSearchViewQuery} from "../../generated/types";
import Table, {useCatalogItemRows} from "../table/Table";
import ViewWrapper from "../View/ViewWrapper";

export default function SearchView() {
    const q = useLocationQueryParam("q", "");
    const { query, setQuery, pageNumber, setPageNumber, pageSize, setPageSize } = useQueryOptions(q);
    const { error, loading, data } = useSearchViewQuery({
        variables: {
            input: { query, pageSize, pageNumber}
        }
    });
    const { columns, rows } = useCatalogItemRows(data?.search.nodes)

    return (
        <ViewWrapper>
            <Table
                title="Search catalog"
                query={query}
                onQueryChange={setQuery}
                loading={loading}
                error={!!error}
                columns={columns}
                rows={rows}
                paginationOptions={{
                    page: pageNumber,
                    count: data?.search.totalElements || 0,
                    rowsPerPage: pageSize,
                    rowsPerPageOptions: [10, 20, 50, 100],
                    onChangeRowsPerPage: e => setPageSize(parseInt(e.target.value, 10)),
                    onChangePage: (e, num) => setPageNumber(num)
                }}
            />
        </ViewWrapper>
    );
}
