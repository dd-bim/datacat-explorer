import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    RootDetailsFragment,
    RootInput,
    RootUpdateInput,
    useCreateNestMutation,
    useDeleteNestMutation,
    useNestListQuery,
    useNestQuery,
    useUpdateNestMutation
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
import {NestIcon} from "../icons/icons";

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useNestListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.nests.nodes)

    return (
        <Table
            icon={<NestIcon/>}
            title="Nests"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.nests.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const templateFn = useRootInputTemplate()
    const [createMutation] = useCreateNestMutation({onCompleted});
    const handleSubmit = (data: RootInput) => {
        sanitizeRootInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new nest"/>
            <CatalogItemForm<RootInput | RootUpdateInput>
                defaultValues={templateFn()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <CatalogObjectFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useNestQuery({variables: {id}});
    const templateFn = useRootInputTemplate();
    const node = data?.node as RootDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateNestMutation({onCompleted});
    const handleUpdate = async (input: RootUpdateInput) => {
        sanitizeRootInput(input);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteNestMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update nest"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm<RootInput | RootUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <CatalogObjectFormSet isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function NestViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
