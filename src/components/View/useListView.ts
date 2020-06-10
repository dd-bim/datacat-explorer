import * as ApolloReactHooks from "@apollo/client";
import {FilterInput, Maybe} from "../../generated/types";
import {QueryResult} from "@apollo/client/react/types/types";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {useQueryOptions} from "../../hooks";
import {TablePaginationProps} from "@material-ui/core";

export default function useListView<TData>(listQuery: (baseOptions?: ApolloReactHooks.QueryHookOptions<TData, {input?: Maybe<FilterInput>}>) => QueryResult<TData, {input?: Maybe<FilterInput> }>) {
    const q = useLocationQueryParam("q", "");
    const queryOptions = useQueryOptions(q);

    const { query, pageSize, pageNumber } = queryOptions;
    const result = listQuery({
        fetchPolicy: "network-only",
        variables: {
            input: {query, pageSize, pageNumber}
        }
    });

    const { setPageSize, setPageNumber } = queryOptions;
    const pagingOptions: Omit<TablePaginationProps<'td'>, 'component'> = {
        page: pageNumber,
        count: 0,
        rowsPerPage: pageSize,
        rowsPerPageOptions: [10, 20, 50, 100],
        onChangeRowsPerPage: e => setPageSize(parseInt(e.target.value, 10)),
        onChangePage: (e, num) => setPageNumber(num)
    };
    return { queryOptions, pagingOptions, result };
}
