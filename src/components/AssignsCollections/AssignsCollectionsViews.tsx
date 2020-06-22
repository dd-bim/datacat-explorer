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
import {sanitizeAssignsCollectionsInput} from "../../utils";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import useAssignsCollectionsInputTemplate from "./useAssignsCollectionsInputTemplate";
import AssignsCollectionsFormSet from "./AssignsCollectionsFormSet";
import {AssignsIcon} from "../icons/icons";

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
    const templateFn = useAssignsCollectionsInputTemplate()
    const [createMutation] = useCreateAssignsCollectionsMutation({onCompleted});
    const handleSubmit = (data: AssignsCollectionsInput) => {
        sanitizeAssignsCollectionsInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new 'Assigns collections' relationship"/>
            <CatalogItemForm<AssignsCollectionsInput | AssignsCollectionsUpdateInput>
                defaultValues={templateFn()}
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
    const templateFn = useAssignsCollectionsInputTemplate();
    const node = data?.node as AssignsCollectionsDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateAssignsCollectionsMutation({onCompleted});
    const handleUpdate = async (input: AssignsCollectionsUpdateInput) => {
        sanitizeAssignsCollectionsInput(input);
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
                <CatalogItemForm<AssignsCollectionsInput | AssignsCollectionsUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <AssignsCollectionsFormSet assignsCollections={node} isUpdate/>
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
