import {useQueryOptions} from "../../hooks";
import * as React from "react";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {useSearchViewQuery} from "../../generated/types";
import {makeStyles} from "@material-ui/core/styles";
import Table, {useCatalogItemRows} from "../table/Table";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export default function SearchView() {
    const classes = useStyles();
    const q = useLocationQueryParam("q", "");
    const { query, setQuery, pageNumber, setPageNumber, pageSize, setPageSize } = useQueryOptions(q);
    const { error, loading, data } = useSearchViewQuery({
        variables: {
            input: { query, pageSize, pageNumber}
        }
    });
    const { columns, rows } = useCatalogItemRows(data?.search.nodes)

    return (
        <Paper className={classes.root}>
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
        </Paper>
    );
}
