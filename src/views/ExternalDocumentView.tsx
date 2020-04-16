import {gql, useMutation} from '@apollo/client';
import * as React from 'react';
import CompositeTable from "../components/table/CompositeTable";
import {XtdExternalDocument} from "../types";
import {useFindAllQuery, useQueryOptions} from "../hooks";
import {useHistory, useRouteMatch} from "react-router-dom";
import EntityTableHeader from "../components/table/EntityTableHeader";
import EntityTableRow from "../components/table/EntityTableRow";

export const findAllQuery = gql`
    query findAll($term: String, $options: PagingOptions) {
        documents(term: $term, options: $options) {
            nodes {
                id
                created
                lastModified
                label
            }
            page {
                pageSize
                pageNumber
                totalElements
                totalPages
            }
        }
    }
`;

export const deleteMutation = gql`
    mutation delete($id: ID!) {
        deleteDocument(id: $id) {
            id
        }
    }
`;

export default function ExternalDocumentView() {
    const { path } = useRouteMatch();
    const history = useHistory();
    const {term, setTerm, pageNumber, setPageNumber, pageSize, setPageSize} = useQueryOptions();
    const {loading, error, nodes, page, refetch} = useFindAllQuery<XtdExternalDocument>(findAllQuery, 'documents', {
        variables: { term, options: {pageNumber, pageSize} }
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

    const handleOnEdit = (row: XtdExternalDocument) => history.push(`${path}/${row.id}`);

    const handleOnDelete = async ({id}: XtdExternalDocument) => {
        await deleteRow({ variables: { id }, update: () => refetch() });
    };

    return (
        <CompositeTable<XtdExternalDocument>
            title="External documents"
            loading={loading}
            error={error}
            tableHeader={<EntityTableHeader />}
            page={page}
            term={term}
            onTermChange={handleTermChange}
            onPageNumberChange={handleChangePage}
            onPageSizeChange={handleChangeRowsPerPage}
        >
            {nodes?.map((row) => (
                <EntityTableRow
                    key={row.id}
                    row={row}
                    onEdit={handleOnEdit}
                    onDelete={handleOnDelete}
                />
            ))}
        </CompositeTable>
    );
};
