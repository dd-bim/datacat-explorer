import AddButton from "../buttons/AddButton";
import RootTableHeader from "../table/RootTableHeader";
import CatalogItemListRow from "../table/CatalogItemListRow";
import CompositeTable from "../table/CompositeTable";
import * as React from "react";
import useAuthContext from "../../hooks/useAuthContext";
import {useHistory, useRouteMatch} from "react-router-dom";
import {useQueryOptions} from "../../hooks";
import {useDeleteExternalDocumentMutation, useExternalDocumentListQuery} from "../../generated/types";
import ExternalDocumentIcon from "../icons/ExternalDocumentIcon";
import CatalogItemListTitle from "../CatalogItemListTitle";
import DeleteIconButton from "../buttons/DeleteIconButton";
import EditIconButton from "../buttons/EditIconButton";

export default function ExternalDocumentList() {
    const { hasRole } = useAuthContext();
    const { path } = useRouteMatch();
    const history = useHistory();
    const {query, setQuery, pageNumber, setPageNumber, pageSize, setPageSize} = useQueryOptions();
    const {loading, error, data, refetch} = useExternalDocumentListQuery({
        fetchPolicy: "network-only",
        variables: { input: { query, pageNumber, pageSize },
    }});
    const [deleteExternalDocumentMutation] = useDeleteExternalDocumentMutation();
    const handleOnEdit = (id: string) => history.push(`${path}/${id}`);
    const handleOnDelete = async (id: string) => {
        await deleteExternalDocumentMutation({ variables: { id }, update: () => refetch() });
    };

    return (
        <CompositeTable
            title="External documents"
            loading={loading}
            error={error}
            tools={
                <AddButton
                    disabled={!hasRole('USER')}
                    to={`${path}/new`}
                    variant="contained"
                    size="small">
                    Add
                </AddButton>
            }
            tableHeader={<RootTableHeader />}
            totalElements={data?.externalDocuments.totalElements}
            pageInfo={data?.externalDocuments.pageInfo}
            term={query}
            onTermChange={setQuery}
            onPageNumberChange={setPageNumber}
            onPageSizeChange={setPageSize}
        >
            {data?.externalDocuments.nodes?.map((item) => (
                <CatalogItemListRow
                    key={item.id}
                    icon={<ExternalDocumentIcon />}
                    title={<CatalogItemListTitle id={item.id} label={item.label} />}
                    created={item.created}
                    lastModified={item.lastModified}
                    version={''}
                    links={''}
                    actions={
                        <React.Fragment>
                            <EditIconButton onClick={() => handleOnEdit(item.id)} />
                            <DeleteIconButton onDelete={() => handleOnDelete(item.id)} />
                        </React.Fragment>
                    }
                />
            ))}
        </CompositeTable>
    );
}
