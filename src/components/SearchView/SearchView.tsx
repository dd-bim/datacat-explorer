import {useQueryOptions} from "../../hooks";
import CompositeTable from "../table/CompositeTable";
import * as React from "react";
import EntityTableHeader from "../table/EntityTableHeader";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import TableCell from "@material-ui/core/TableCell";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import Typography from "@material-ui/core/Typography";
import {toLocaleDateTimeString} from "../../dateTime";
import TableRow from "@material-ui/core/TableRow";
import {useSearchViewQuery} from "../../generated/types";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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

    return (
        <CompositeTable
            title={'Search'}
            loading={loading}
            error={error}
            tableHeader={<EntityTableHeader />}
            totalElements={data?.search.totalElements}
            pageInfo={data?.search.pageInfo}
            term={query}
            onTermChange={setQuery}
            onPageNumberChange={setPageNumber}
            onPageSizeChange={setPageSize}
        >
            {data?.search.nodes.map((item) => (
                <TableRow hover>
                    <TableCell align={'center'}>
                        <CatalogItemIcon itemType={item.__typename} fontSize={'small'}/>
                    </TableCell>
                    <TableCell>
                        <Typography variant="body1">{item.label}</Typography>
                        <Typography className={classes.idLabel} variant="body2">{item.id}</Typography>
                    </TableCell>
                    <TableCell>{toLocaleDateTimeString(item.created)}</TableCell>
                    <TableCell>{toLocaleDateTimeString(item.lastModified)}</TableCell>
                    <TableCell align={'center'}>
                        Empty
                    </TableCell>
                </TableRow>
            ))}
        </CompositeTable>
    );
}
