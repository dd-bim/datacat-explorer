import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    useCreateValueMutation,
    useDeleteValueMutation,
    useUpdateValueMutation,
    useValueListQuery,
    useValueQuery,
    ValueDetailsFragment,
    ValueInput,
    ValueUpdateInput
} from "../../generated/types";
import Table from "../table/Table";
import {sanitizeValueInput} from "../../utils";
import {useParams} from "react-router-dom";
import {useValueInputTemplate} from "../../hooks/templates";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import ValueFormSet from "./ValueFormSet";

function ListView() {
    const { createPath } = useContext(ViewContext);
    const {
        queryOptions: { query, setQuery },
        result: { loading, error, data },
        pagingOptions
    } = useListView(useValueListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.values.nodes)

    return (
        <Table
            title="Values"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.values.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);
    const templateFn = useValueInputTemplate()
    const [createMutation] = useCreateValueMutation({onCompleted});
    const handleSubmit = (data: ValueInput) => {
        sanitizeValueInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new value object" />
            <CatalogItemForm<ValueInput | ValueUpdateInput>
                defaultValues={templateFn()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <ValueFormSet />
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);

    const {loading, error, data} = useValueQuery({variables: {id}});
    const templateFn = useValueInputTemplate();
    const node = data?.node as ValueDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateValueMutation({onCompleted});
    const handleUpdate = async (input: ValueUpdateInput) => {
        sanitizeValueInput(input);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteValueMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({ variables: {id} })
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update value object"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm<ValueInput | ValueUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <ValueFormSet isUpdate />
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function ValueViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
