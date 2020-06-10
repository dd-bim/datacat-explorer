import React, {useContext} from 'react';
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {useQueryOptions} from "../../hooks";
import {
    EntityInput,
    EntityUpdateInput,
    ExternalDocumentDetailsFragment,
    useCreateExternalDocumentMutation,
    useDeleteExternalDocumentMutation,
    useExternalDocumentListQuery,
    useExternalDocumentQuery,
    useUpdateExternalDocumentMutation
} from "../../generated/types";
import useCatalogItemRows from "../../hooks/useCatalogItemRows";
import Table from "../table/Table";
import {useEntityInputTemplate} from "../../hooks/templates";
import {sanitizeEntityInput} from "../../utils";
import {Typography} from "@material-ui/core";
import CatalogItemForm from "../form/CatalogItemForm";
import CatalogItemFormSet from "../form/CatalogItemFormSet";
import {useParams} from "react-router-dom";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import {useWriteAccess} from "../../hooks/useAuthContext";

function ListView() {
    const {createPath} = useContext(ViewContext);
    const q = useLocationQueryParam("q", "");
    const {query, setQuery, pageNumber, setPageNumber, pageSize, setPageSize} = useQueryOptions(q);
    const {error, loading, data} = useExternalDocumentListQuery({
        fetchPolicy: "network-only",
        variables: {
            input: {query, pageSize, pageNumber}
        }
    });
    const {columns, rows} = useCatalogItemRows(data?.externalDocuments.nodes)

    return (
        <Table
            title="External documents"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                page: pageNumber,
                count: data?.externalDocuments.totalElements || 0,
                rowsPerPage: pageSize,
                rowsPerPageOptions: [10, 20, 50, 100],
                onChangeRowsPerPage: e => setPageSize(parseInt(e.target.value, 10)),
                onChangePage: (e, num) => setPageNumber(num)
            }}
        />
    );
}

function CreateView() {
    const {onCompleted, onCancel} = useContext(ViewContext);
    const templateFn = useEntityInputTemplate();
    const [createExternalDocument] = useCreateExternalDocumentMutation({onCompleted});
    const handleSubmit = (data: EntityInput) => {
        sanitizeEntityInput(data);
        return createExternalDocument({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Create external document</Typography>
            <CatalogItemForm<EntityInput | EntityUpdateInput>
                defaultValues={templateFn()}
                onSubmit={handleSubmit}
                onCancel={onCancel}
            >
                <CatalogItemFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const hasWriteAccess = useWriteAccess();
    const templateFn = useEntityInputTemplate();

    const {loading, error, data} = useExternalDocumentQuery({variables: {id}});
    const node = data?.node as ExternalDocumentDetailsFragment | undefined;
    const defaultValues: EntityUpdateInput = templateFn(node);

    const [updateExternalDocument] = useUpdateExternalDocumentMutation({onCompleted});
    const handleUpdate = async (input: EntityUpdateInput) => {
        sanitizeEntityInput(input);
        return await updateExternalDocument({variables: {input}});
    };

    const [deleteMutation] = useDeleteExternalDocumentMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Update external subject" subtitle={node?.id}/>
            <AsyncWrapper
                loading={loading}
                error={error}
            >
                <CatalogItemForm<EntityInput | EntityUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <CatalogItemFormSet isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function ExternalDocumentViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
