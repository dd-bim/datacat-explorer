import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    RootDetailsFragment,
    useActorListQuery,
    useActorQuery,
    useCreateActorMutation,
    useDeleteActorMutation,
    useUpdateActorMutation
} from "../../generated/types";
import Table from "../table/Table";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import RootFormSet, {RootFormValues, useFormValues} from "../form/RootFormSet";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import {ActorIcon} from "../icons/icons";
import {toRootInput, toRootUpdateInput} from "../form/inputMappers";

function ListView() {
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useActorListQuery);
    const {createPath} = useContext(ViewContext);
    const {columns, rows} = useCatalogRootItemRows(data?.actors.nodes)

    return (
        <Table
            icon={<ActorIcon/>}
            title="Actors"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.actors.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const tmpl = useFormValues()
    const [createMutation] = useCreateActorMutation({onCompleted});
    const handleSubmit = (formValues: RootFormValues) => {
        const input = toRootInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new actor"/>
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <RootFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useActorQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.node as RootDetailsFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateActorMutation({onCompleted});
    const handleUpdate = async (formValues: RootFormValues) => {
        const input = toRootUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteActorMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update actor"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <RootFormSet isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function ActorViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
