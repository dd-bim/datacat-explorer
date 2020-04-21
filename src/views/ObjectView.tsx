import {DocumentNode, gql, useMutation} from '@apollo/client';
import * as React from 'react';
import {XtdEntity, XtdRoot} from "../types";
import CompositeTable from "../components/table/CompositeTable";
import {useHistory, useRouteMatch} from "react-router-dom";
import {useFindAllQuery, useQueryOptions} from "../hooks";
import RootTableHeader from "../components/table/RootTableHeader";
import RootTableRow from "../components/table/RootTableRow";
import {route} from "../utils";
import AddButton from "../components/button/AddButton";

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
        fetchPolicy: "network-only",
        variables: { term, options: {pageNumber, pageSize} },
    });
    const [deleteRow] = useMutation(deleteMutation);

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
            tools={
                <AddButton to={`${path}/new`} variant="contained" size="small">
                    Add
                </AddButton>
            }
            tableHeader={<RootTableHeader />}
            page={page}
            term={term}
            onTermChange={setTerm}
            onPageNumberChange={setPageNumber}
            onPageSizeChange={setPageSize}
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
