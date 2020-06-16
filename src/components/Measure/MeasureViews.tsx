import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import Table from "../table/Table";
import {useParams} from "react-router-dom";
import {useMeasureInputTemplate} from "../../hooks/templates";
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
import {sanitizeMeasureInput} from "../../utils";
import MeasureFormSet from "../form/MeasureFormSet";

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
    const templateFn = useMeasureInputTemplate();
    const [createMutation] = useCreateMeasureMutation({onCompleted});
    const handleSubmit = (data: MeasureInput) => {
        sanitizeMeasureInput(data);
        return createMutation({variables: {input: data}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new measure" />
            <CatalogItemForm<MeasureInput | MeasureUpdateInput>
                defaultValues={templateFn()}
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
    const templateFn = useMeasureInputTemplate();
    const node = data?.node as MeasureFragment | undefined;
    const defaultValues = templateFn(node);

    const [updateMutation] = useUpdateMeasureMutation({onCompleted});
    const handleUpdate = async (input: MeasureUpdateInput) => {
        sanitizeMeasureInput(input);
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
                <CatalogItemForm<MeasureInput | MeasureUpdateInput>
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
