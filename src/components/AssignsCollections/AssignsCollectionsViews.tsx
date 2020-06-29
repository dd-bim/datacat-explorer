import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    AssignsCollectionsDetailsFragment,
    AssignsCollectionsInput,
    AssignsCollectionsUpdateInput,
    useAssignsCollectionsListQuery,
    useAssignsCollectionsQuery,
    useCreateAssignsCollectionsMutation,
    useDeleteAssignsCollectionsMutation,
    useUpdateAssignsCollectionsMutation
} from "../../generated/types";
import Table from "../table/Table";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import AssignsCollectionsFormSet, {useFormValues} from "./AssignsCollectionsFormSet";
import {AssignsIcon} from "../icons/icons";
import {BinaryRelationshipFormValues} from "../form/types";
import {toRootInput, toRootUpdateInput} from "../form/inputMappers";

const toInput = (formValues: BinaryRelationshipFormValues): AssignsCollectionsInput => {
    const {related, relating} = formValues;
    return {
        ...toRootInput(formValues),
        relatingObject: relating,
        relatedCollections: related.split(","),
    };
}

const toUpdateInput = (formValues: BinaryRelationshipFormValues): AssignsCollectionsUpdateInput => {
    const {related, relating} = formValues;
    return {
        ...toRootUpdateInput(formValues),
        relatingObject: relating,
        relatedCollections: related.split(","),
    };
}

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useAssignsCollectionsListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.assignsCollectionsRelations.nodes);

    return (
        <Table
            icon={<AssignsIcon/>}
            title="'Assigns collections' relationships"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.assignsCollectionsRelations.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const tmpl = useFormValues()
    const [createMutation] = useCreateAssignsCollectionsMutation({onCompleted});
    const handleSubmit = (formValues: BinaryRelationshipFormValues) => {
        const input = toInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new 'Assigns collections' relationship"/>
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <AssignsCollectionsFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useAssignsCollectionsQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.node as AssignsCollectionsDetailsFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateAssignsCollectionsMutation({onCompleted});
    const handleUpdate = async (formValues: BinaryRelationshipFormValues) => {
        const input = toUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteAssignsCollectionsMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update 'Assigns collections' relationship"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <AssignsCollectionsFormSet item={node} isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function AssignsCollectionsViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
