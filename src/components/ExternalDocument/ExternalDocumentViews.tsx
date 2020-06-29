import React, {useContext} from 'react';
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    CatalogItemFragment,
    ExternalDocumentDetailsFragment,
    useCreateExternalDocumentMutation,
    useDeleteExternalDocumentMutation,
    useExternalDocumentListQuery,
    useExternalDocumentQuery,
    useUpdateExternalDocumentMutation
} from "../../generated/types";
import Table from "../table/Table";
import {Typography} from "@material-ui/core";
import CatalogItemForm from "../form/CatalogItemForm";
import CatalogItemFormSet, {CatalogItemFormValues, useFormValues} from "../form/CatalogItemFormSet";
import {Link as RouterLink, useParams} from "react-router-dom";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import {useWriteAccess} from "../../hooks/useAuthContext";
import useListView from "../View/useListView";
import {ExternalDocumentIcon} from "../icons/icons";
import LabelCell from "../table/LabelCell";
import PropertyCell from "../table/PropertyCell";
import dateUtil from "../../dateUtil";
import {getUpdatePath} from "../../Routes";
import Link from "@material-ui/core/Link";
import EditIcon from "@material-ui/icons/Edit";
import useTableRows from "../../hooks/useTableRows";
import {toEntityInput, toEntityUpdateInput} from "../form/inputMappers";

const columnsFactory = () => [
    {id: 'label', Header: 'Name', accessor: 'label'},
    {id: 'created', Header: 'Created', accessor: 'created'},
    {id: 'lastModified', Header: 'Last modified', accessor: 'lastModified'},
    {id: 'actions', Header: 'Actions', accessor: 'actions'}
];

const rowFactory = (item: CatalogItemFragment) => {
    const {
        __typename,
        id,
        label,
        created,
        createdBy,
        lastModified,
        lastModifiedBy
    } = item;

    return {
        label: (
            <LabelCell id={id} label={label}/>
        ),
        created: (
            <PropertyCell
                primary={dateUtil(created).fromNow()}
                secondary={createdBy}
                tooltip={dateUtil(created).format('lll')}
            />
        ),
        lastModified: (
            <PropertyCell
                primary={dateUtil(lastModified).fromNow()}
                secondary={lastModifiedBy}
                tooltip={dateUtil(lastModified).format('lll')}
            />
        ),
        actions: (
            <Link component={RouterLink} to={getUpdatePath(__typename, id)}>
                <EditIcon
                    fontSize="small"
                    aria-label="edit item"
                />
            </Link>
        ),
    };
};


function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useExternalDocumentListQuery);
    const {columns, rows} = useTableRows<CatalogItemFragment>({
        items: data?.externalDocuments.nodes,
        columnsFactory,
        rowFactory
    });

    return (
        <Table
            icon={<ExternalDocumentIcon/>}
            title="External documents"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.externalDocuments.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const {onCompleted, onCancel} = useContext(ViewContext);
    const tmpl = useFormValues();
    const [createExternalDocument] = useCreateExternalDocumentMutation({onCompleted});
    const handleSubmit = (formValues: CatalogItemFormValues) => {
        const input = toEntityInput(formValues);
        return createExternalDocument({variables: {input}});
    };

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>Create external document</Typography>
            <CatalogItemForm
                defaultValues={tmpl()}
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
    const tmpl = useFormValues();

    const {loading, error, data} = useExternalDocumentQuery({variables: {id}});
    const node = data?.node as ExternalDocumentDetailsFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateExternalDocument] = useUpdateExternalDocumentMutation({onCompleted});
    const handleUpdate = async (formValues: CatalogItemFormValues) => {
        const input = toEntityUpdateInput(formValues);
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
                <CatalogItemForm
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
