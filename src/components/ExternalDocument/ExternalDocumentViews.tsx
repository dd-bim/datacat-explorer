import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import ExternalDocumentForm from "./ExternalDocumentForm";
import {
    EntityInput,
    EntityUpdateInput,
    ExternalDocumentDetailsFragment,
    useCreateExternalDocumentMutation,
    useExternalDocumentListQuery,
    useExternalDocumentQuery,
    useUpdateExternalDocumentMutation
} from "../../generated/types";
import {defaultEntityInput, defaultTextInputs, sanitizeEntityInput} from "../../utils";
import {Typography} from "@material-ui/core";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {useQueryOptions} from "../../hooks";
import Table, {useCatalogItemRows} from "../table/Table";
import ViewWrapper from "../View/ViewWrapper";
import ViewSwitch, {ViewContext} from "../View/ViewSwitch";

function ListView() {
    const { createPath } = useContext(ViewContext);
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
    const { onCompleted, onCancel } = useContext(ViewContext);
    const defaultValues = defaultEntityInput();
    const [createExternalDocument] = useCreateExternalDocumentMutation({onCompleted});
    const handleSubmit = (data: EntityInput) => {
        sanitizeEntityInput(data);
        return createExternalDocument({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Create external document</Typography>
            <ExternalDocumentForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                onCancel={onCancel}
            />
        </React.Fragment>
    )
}

function UpdateView() {
    const { onCompleted, onCancel } = useContext(ViewContext);
    const {id} = useParams();
    const {loading, error, data} = useExternalDocumentQuery({variables: {id}});
    const [updateExternalDocument] = useUpdateExternalDocumentMutation({onCompleted});
    const handleSubmit = async (input: EntityUpdateInput) => {
        sanitizeEntityInput(input);
        return await updateExternalDocument({variables: {input}});
    };

    if (loading) return (
        <ViewWrapper>
            <p>Loading...</p>
        </ViewWrapper>
    );

    if (error) return (
        <ViewWrapper>
            <p>Error...</p>
        </ViewWrapper>
    );

    const node = (data?.node as ExternalDocumentDetailsFragment);
    const defaultValues: EntityUpdateInput = {
        id: node.id,
        names: defaultTextInputs().map(textInput => {
            const existingName = node.names.find(name => name.language.id === textInput.languageCode);
            if (existingName) {
                textInput.id = existingName.id;
                textInput.value = existingName.value;
            }
            return textInput;
        })
    };
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Update external document</Typography>
            <ExternalDocumentForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                onCancel={onCancel}
                catalogItemFormProps={{isUpdate: true}}
            />
        </React.Fragment>
    )
}

export default function ExternalDocumentViews() {
    return (
        <ViewSwitch
            listView={<ListView />}
            createView={<CreateView />}
            updateView={<UpdateView />}
        />
    );
}
