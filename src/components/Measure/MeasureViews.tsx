import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import Table from "../table/Table";
import {useParams} from "react-router-dom";
import useCatalogRootItemRows from "../../hooks/useCatalogRootItemRows";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import {
    MeasureFragment,
    MeasureInput,
    MeasureUpdateInput,
    useCreateMeasureMutation,
    useDeleteMeasureMutation,
    useMeasureListQuery,
    useMeasureQuery,
    useUpdateMeasureMutation
} from "../../generated/types";
import MeasureFormSet, {MeasureFormValues, useFormValues} from "./MeasureFormSet";
import {MeasureWithUnitIcon} from "../icons/icons";
import {toRootInput, toRootUpdateInput} from "../form/inputMappers";

export const toInput = (formValues: MeasureFormValues): MeasureInput => {
    const {unitComponent, valueDomain} = formValues;
    return {
        ...toRootInput(formValues),
        unitComponent: unitComponent ?? undefined,
        valueDomain: valueDomain.split(','),
    };
}

export const toUpdateInput = (formValues: MeasureFormValues): MeasureUpdateInput => {
    const {unitComponent, valueDomain} = formValues;
    return {
        ...toRootUpdateInput(formValues),
        unitComponent: unitComponent ?? undefined,
        valueDomain: valueDomain.split(','),
    };
}

function ListView() {
    const { createPath } = useContext(ViewContext);
    const {
        queryOptions: { query, setQuery },
        result: { loading, error, data },
        pagingOptions
    } = useListView(useMeasureListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.measures.nodes)

    return (
        <Table
            icon={<MeasureWithUnitIcon/>}
            title="Measures"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.measures.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);
    const tmpl = useFormValues();
    const [createMutation] = useCreateMeasureMutation({onCompleted});
    const handleSubmit = (formValues: MeasureFormValues) => {
        const input = toInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new measure" />
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <MeasureFormSet />
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);

    const {loading, error, data} = useMeasureQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.node as MeasureFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateMeasureMutation({onCompleted});
    const handleUpdate = async (formValues: MeasureFormValues) => {
        const input = toUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteMeasureMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({ variables: {id} })
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update measure"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <MeasureFormSet measure={node} isUpdate />
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function MeasureViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
