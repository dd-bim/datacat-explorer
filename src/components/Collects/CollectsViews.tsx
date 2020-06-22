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
import {sanitizeCollectsInput} from "../../utils";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import useCollectsInputTemplate from "./useCollectsInputTemplate";
import CollectsFormSet from "./CollectsFormSet";
import {CollectsIcon} from "../icons/icons";

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
    const templateFn = useCollectsInputTemplate()
    const [createMutation] = useCreateCollectsMutation({onCompleted});
    const handleSubmit = (data: CollectsInput) => {
        sanitizeCollectsInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new collects relationship"/>
            <CatalogItemForm<CollectsInput | CollectsUpdateInput>
                defaultValues={templateFn()}
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
    const templateFn = useCollectsInputTemplate();
    const node = data?.node as CollectsDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateCollectsMutation({onCompleted});
    const handleUpdate = async (input: CollectsUpdateInput) => {
        sanitizeCollectsInput(input);
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
                <CatalogItemForm<CollectsInput | CollectsUpdateInput>
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
