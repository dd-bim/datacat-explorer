import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    AssignsPropertyWithValuesDetailsFragment,
    AssignsPropertyWithValuesInput,
    AssignsPropertyWithValuesUpdateInput,
    useAssignsPropertyWithValuesListQuery,
    useAssignsPropertyWithValuesQuery,
    useCreateAssignsPropertyWithValuesMutation,
    useDeleteAssignsPropertyWithValuesMutation,
    useUpdateAssignsPropertyWithValuesMutation
} from "../../generated/types";
import Table from "../table/Table";
import {sanitizeRootInput} from "../../utils";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import {AssignsIcon} from "../icons/icons";
import useAssignsPropertyWithValuesInput from "./useAssignsPropertyWithValuesInput";
import AssignsPropertyWithValuesFormSet from "./AssignsPropertyWithValuesFormSet";

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useAssignsPropertyWithValuesListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.assignsPropertyWithValues.nodes);

    return (
        <Table
            icon={<AssignsIcon/>}
            title="'Assigns property with values' relationships"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.assignsPropertyWithValues.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const templateFn = useAssignsPropertyWithValuesInput()
    const [createMutation] = useCreateAssignsPropertyWithValuesMutation({onCompleted});
    const handleSubmit = (data: AssignsPropertyWithValuesInput) => {
        sanitizeRootInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new 'Assigns property with values' relationship"/>
            <CatalogItemForm<AssignsPropertyWithValuesInput | AssignsPropertyWithValuesUpdateInput>
                defaultValues={templateFn()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <AssignsPropertyWithValuesFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useAssignsPropertyWithValuesQuery({variables: {id}});
    const templateFn = useAssignsPropertyWithValuesInput();
    const node = data?.node as AssignsPropertyWithValuesDetailsFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateAssignsPropertyWithValuesMutation({onCompleted});
    const handleUpdate = async (input: AssignsPropertyWithValuesUpdateInput) => {
        sanitizeRootInput(input);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteAssignsPropertyWithValuesMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update 'Assigns property with values' relationship"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm<AssignsPropertyWithValuesInput | AssignsPropertyWithValuesUpdateInput>
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <AssignsPropertyWithValuesFormSet assignsPropertyWithValues={node} isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function AssignsPropertyWithValuesViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
