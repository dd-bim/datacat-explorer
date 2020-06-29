import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    CollectsDetailsFragment,
    CollectsInput,
    CollectsUpdateInput,
    useCollectsListQuery,
    useCollectsQuery,
    useCreateCollectsMutation,
    useDeleteCollectsMutation,
    useUpdateCollectsMutation
} from "../../generated/types";
import Table from "../table/Table";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import CollectsFormSet, {useFormValues} from "./CollectsFormSet";
import {CollectsIcon} from "../icons/icons";
import {BinaryRelationshipFormValues} from "../form/types";
import {toRootInput, toRootUpdateInput} from "../form/inputMappers";

export const toInput = (formValues: BinaryRelationshipFormValues): CollectsInput => {
    const {related, relating} = formValues;
    return {
        ...toRootInput(formValues),
        relatingCollection: relating,
        relatedThings: related.split(","),
    };
}

export const toUpdateInput = (formValues: BinaryRelationshipFormValues): CollectsUpdateInput => {
    const {related, relating} = formValues;
    return {
        ...toRootUpdateInput(formValues),
        relatingCollection: relating,
        relatedThings: related.split(","),
    };
}

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useCollectsListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.collectsRelations.nodes)

    return (
        <Table
            icon={<CollectsIcon/>}
            title="Collects relationships"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.collectsRelations.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const tmpl = useFormValues()
    const [createMutation] = useCreateCollectsMutation({onCompleted});
    const handleSubmit = (formValues: BinaryRelationshipFormValues) => {
        const input = toInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new collects relationship"/>
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <CollectsFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useCollectsQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.node as CollectsDetailsFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateCollectsMutation({onCompleted});
    const handleUpdate = async (formValues: BinaryRelationshipFormValues) => {
        const input = toUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteCollectsMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update collects relationship"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <CollectsFormSet collects={node} isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function CollectsViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
