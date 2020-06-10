import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    RootDetailsFragment,
    RootInput,
    RootUpdateInput,
    useActorListQuery,
    useActorQuery,
    useCreateActorMutation,
    useDeleteActorMutation,
    useUpdateActorMutation
} from "../../generated/types";
import Table from "../table/Table";
import {sanitizeRootInput} from "../../utils";
import {useParams} from "react-router-dom";
import {useRootInputTemplate} from "../../hooks/templates";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogObjectFormSet from "../form/CatalogObjectFormSet";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";

function ListView() {
    const {
        queryOptions: { query, setQuery },
        result: { loading, error, data },
        pagingOptions
    } = useListView(useActorListQuery);
    const {createPath} = useContext(ViewContext);
    const {columns, rows} = useCatalogRootItemRows(data?.actors.nodes)

    return (
        <Table
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
    const { onCompleted, onCancel } = useContext(ViewContext);
    const templateFn = useRootInputTemplate()
    const [createMutation] = useCreateActorMutation({onCompleted});
    const handleSubmit = (data: RootInput) => {
        sanitizeRootInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new actor" />
            <CatalogItemForm<RootInput | RootUpdateInput>
                defaultValues={templateFn()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <CatalogObjectFormSet />
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);

    const {loading, error, data} = useActorQuery({variables: {id}});
    const templateFn = useRootInputTemplate();
    const node = data?.node as RootDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateActorMutation({onCompleted});
    const handleUpdate = async (input: RootUpdateInput) => {
        sanitizeRootInput(input);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteActorMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({ variables: {id} })
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update actor"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm<RootInput | RootUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <CatalogObjectFormSet isUpdate />
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
