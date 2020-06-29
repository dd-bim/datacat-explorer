import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    RootDetailsFragment,
    useCreateSubjectMutation,
    useDeleteSubjectMutation,
    useSubjectListQuery,
    useSubjectQuery,
    useUpdateSubjectMutation
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
import {SubjectIcon} from "../icons/icons";
import {toRootInput, toRootUpdateInput} from "../form/inputMappers";

function ListView() {
    const { createPath } = useContext(ViewContext);
    const {
        queryOptions: { query, setQuery },
        result: { loading, error, data },
        pagingOptions
    } = useListView(useSubjectListQuery);
    const {columns, rows} = useCatalogRootItemRows(data?.subjects.nodes)

    return (
        <Table
            icon={<SubjectIcon/>}
            title="Subjects"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.subjects.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);
    const tmpl = useFormValues()
    const [createMutation] = useCreateSubjectMutation({onCompleted});
    const handleSubmit = (formValues: RootFormValues) => {
        const input = toRootInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new subject" />
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <RootFormSet />
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const { onCompleted, onCancel } = useContext(ViewContext);

    const {loading, error, data} = useSubjectQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.node as RootDetailsFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateSubjectMutation({onCompleted});
    const handleUpdate = async (formValues: RootFormValues) => {
        const input = toRootUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteSubjectMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({ variables: {id} })
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update subject"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <RootFormSet isUpdate />
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function SubjectViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
