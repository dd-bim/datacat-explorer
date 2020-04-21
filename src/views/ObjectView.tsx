import {DocumentNode, gql, useMutation} from '@apollo/client';
import * as React from 'react';
import {XtdEntity, XtdRoot} from "../types";
import CompositeTable from "../components/table/CompositeTable";
import {useHistory, useRouteMatch} from "react-router-dom";
import {useFindAllQuery, useQueryOptions} from "../hooks";
import RootTableHeader from "../components/table/RootTableHeader";
import RootTableRow from "../components/table/RootTableRow";
import {route} from "../utils";

export interface ObjectViewProps {
    title: string;
    queryDataKey: string;
    findAllQuery: DocumentNode;
    deleteMutation: DocumentNode;
}

export default function ObjectView<T extends XtdRoot>(props: ObjectViewProps) {
    const { title, queryDataKey, findAllQuery, deleteMutation } = props;
    const { path } = useRouteMatch();
    const history = useHistory();
    const {term, setTerm, pageNumber, setPageNumber, pageSize, setPageSize} = useQueryOptions();
    const {loading, error, nodes, page, refetch} = useFindAllQuery<T>(findAllQuery, queryDataKey, {
        variables: { term, options: {pageNumber, pageSize} },
        fetchPolicy: "network-only"

    });
    const [deleteRow] = useMutation(deleteMutation);

    const handleTermChange = (newTerm: string) => {
        setTerm(newTerm);
        setPageNumber(0);
    };

    const handleChangeRowsPerPage = (pageSize: number): void => {
        setPageSize(pageSize);
        setPageNumber(0);
    };

    const handleChangePage = (page: number) => {
        setPageNumber(page);
    };

    const handleOnEntitySelect = (entity: XtdEntity) => {
        history.push(`${route(entity.__typename)}/${entity.id}`);
    };

    const handleOnEdit = (row: T) => history.push(`${path}/${row.id}`);

    const handleOnDelete = async ({id}: T) => {
        await deleteRow({ variables: { id }, update: () => refetch() });
    };

    return (
        <CompositeTable<T>
            title={title}
            loading={loading}
            error={error}
            tableHeader={<RootTableHeader />}
            page={page}
            term={term}
            onTermChange={handleTermChange}
            onPageNumberChange={handleChangePage}
            onPageSizeChange={handleChangeRowsPerPage}
        >
            {nodes?.map((row) => (
                <RootTableRow<T>
                    key={row.id}
                    row={row}
                    onEntitySelect={handleOnEntitySelect}
                    onEdit={handleOnEdit}
                    onDelete={handleOnDelete}
                />
            ))}
        </CompositeTable>
    );
};

ObjectView.fragments = {
    root: gql`
        fragment ObjectViewRoot on XtdRoot {
            id
            ...RootTableRowRoot
        }
        ${RootTableRow.fragments.root}
    `,
    page: gql`
        fragment ObjectViewPage on Page {
            ...CompositeTablePage
        }
        ${CompositeTable.fragments.page}
    `
};
