import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    DocumentsDetailsFragment,
    DocumentsInput,
    DocumentsUpdateInput,
    useCreateDocumentsMutation,
    useDeleteDocumentsMutation,
    useDocumentsListQuery,
    useDocumentsQuery,
    useUpdateDocumentsMutation
} from "../../generated/types";
import Table from "../table/Table";
import {sanitizeDocumentsInput} from "../../utils";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import {DocumentsIcon} from "../icons/icons";
import useDocumentsInputTemplate from "./useDocumentsInputTemplate";
import DocumentsFormSet from "./DocumentsFormSet";

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useDocumentsListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.documentsRelations.nodes);

    return (
        <Table
            icon={<DocumentsIcon/>}
            title="'Documents' relationships"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.documentsRelations.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const templateFn = useDocumentsInputTemplate()
    const [createMutation] = useCreateDocumentsMutation({onCompleted});
    const handleSubmit = (data: DocumentsInput) => {
        sanitizeDocumentsInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new 'Documents' relationship"/>
            <CatalogItemForm<DocumentsInput | DocumentsUpdateInput>
                defaultValues={templateFn()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <DocumentsFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useDocumentsQuery({variables: {id}});
    const templateFn = useDocumentsInputTemplate();
    const node = data?.node as DocumentsDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateDocumentsMutation({onCompleted});
    const handleUpdate = async (input: DocumentsUpdateInput) => {
        sanitizeDocumentsInput(input);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteDocumentsMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update 'Documents' relationship"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm<DocumentsInput | DocumentsUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <DocumentsFormSet documents={node} isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function DocumentsViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
