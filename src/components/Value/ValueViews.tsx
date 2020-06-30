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
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import ValueFormSet, {useFormValues, ValueFormValues} from "./ValueFormSet";
import {ValueIcon} from "../icons/icons";
import {toRootInput, toRootUpdateInput} from "../form/inputMappers";

export const toInput = (formValues: ValueFormValues): ValueInput => {
    const {
        facets,
        toleranceType,
        lowerTolerance,
        upperTolerance, valueRole,
        valueType,
        nominalValue
    } = formValues;
    return {
        toleranceType,
        lowerTolerance: lowerTolerance ? lowerTolerance : undefined,
        upperTolerance: upperTolerance ? upperTolerance : undefined,
        valueRole,
        valueType,
        nominalValue: nominalValue ? nominalValue : undefined,
        ...toRootInput(formValues),
    };
}

export const toUpdateInput = (formValues: ValueFormValues): ValueUpdateInput => {
    const {
        facets,
        toleranceType,
        lowerTolerance,
        upperTolerance, valueRole,
        valueType,
        nominalValue
    } = formValues;
    return {
        toleranceType,
        lowerTolerance: lowerTolerance ? lowerTolerance : undefined,
        upperTolerance: upperTolerance ? upperTolerance : undefined,
        valueRole,
        valueType,
        nominalValue: nominalValue ? nominalValue : undefined,
        ...toRootUpdateInput(formValues),
    };
}

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useValueListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.values.nodes)

    return (
        <Table
            icon={<ValueIcon/>}
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
    const {onCompleted, onCancel} = useContext(ViewContext);
    const tmpl = useFormValues()
    const [createMutation] = useCreateValueMutation({onCompleted});
    const handleSubmit = (formValues: ValueFormValues) => {
        const input = toInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new value object"/>
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <ValueFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useValueQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.node as ValueDetailsFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateValueMutation({onCompleted});
    const handleUpdate = async (formValues: ValueFormValues) => {
        const input = toUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteValueMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update value object"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <ValueFormSet isUpdate/>
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
