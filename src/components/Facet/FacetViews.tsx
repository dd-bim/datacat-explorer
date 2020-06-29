import React, {useContext} from "react";
import CrudSwitch, {ViewContext} from "../View/CrudSwitch";
import {
    EntityTypes,
    FacetFragment,
    FacetInput,
    FacetUpdateInput,
    useCreateFacetMutation,
    useDeleteFacetMutation,
    useFacetListQuery,
    useFacetQuery,
    useUpdateFacetMutation
} from "../../generated/types";
import Table from "../table/Table";
import {useParams} from "react-router-dom";
import {useWriteAccess} from "../../hooks/useAuthContext";
import CatalogItemForm from "../form/CatalogItemForm";
import ViewHeader from "../View/ViewHeader";
import AsyncWrapper from "../View/AsyncWrapper";
import useListView from "../View/useListView";
import {FacetIcon} from "../icons/icons";
import {isValidTranslation, toEntityInput, toEntityUpdateInput, toTextInput} from "../form/inputMappers";
import FacetFormSet, {FacetFormValues, useFormValues} from "./FacetFormSet";
import useFacetRows from "./useFacetRows";

export const toInput = (formValues: FacetFormValues): FacetInput => {
    const {descriptions, targets} = formValues;
    return {
        ...toEntityInput(formValues),
        descriptions: descriptions.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
        targets: targets.split(",") as EntityTypes[]
    }
}

export const toUpdateInput = (formValues: FacetFormValues): FacetUpdateInput => {
    const {descriptions, targets} = formValues;
    return {
        ...toEntityUpdateInput(formValues),
        descriptions: descriptions.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
        targets: targets.split(",") as EntityTypes[]
    }
};

function ListView() {
    const {createPath} = useContext(ViewContext);
    const {
        queryOptions: {query, setQuery},
        result: {loading, error, data},
        pagingOptions
    } = useListView(useFacetListQuery);
    const {columns, rows} = useFacetRows(data?.facets.nodes)

    return (
        <Table
            icon={<FacetIcon/>}
            title="Facets"
            createPath={createPath}
            query={query}
            onQueryChange={setQuery}
            loading={loading}
            error={!!error}
            columns={columns}
            rows={rows}
            paginationOptions={{
                count: data?.facets.totalElements || 0,
                ...pagingOptions
            }}
        />
    );
}

function CreateView() {
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);
    const tmpl = useFormValues()
    const [createMutation] = useCreateFacetMutation({onCompleted});
    const handleSubmit = (formValues: FacetFormValues) => {
        const input = toInput(formValues);
        return createMutation({variables: {input}});
    };

    return (
        <React.Fragment>
            <ViewHeader title="Create new facet"/>
            <CatalogItemForm
                defaultValues={tmpl()}
                onSubmit={hasWriteAccess ? handleSubmit : undefined}
                onCancel={onCancel}
            >
                <FacetFormSet/>
            </CatalogItemForm>
        </React.Fragment>
    )
}

function UpdateView() {
    const {id} = useParams();
    const hasWriteAccess = useWriteAccess();
    const {onCompleted, onCancel} = useContext(ViewContext);

    const {loading, error, data} = useFacetQuery({variables: {id}});
    const tmpl = useFormValues();
    const node = data?.facet as FacetFragment | undefined;
    const defaultValues = tmpl(node);

    const [updateMutation] = useUpdateFacetMutation({onCompleted});
    const handleUpdate = async (formValues: FacetFormValues) => {
        const input = toUpdateInput(formValues);
        return await updateMutation({variables: {input}});
    };

    const [deleteMutation] = useDeleteFacetMutation({onCompleted});
    const handleDelete = async () => {
        return await deleteMutation({variables: {id}})
    }

    return (
        <React.Fragment>
            <ViewHeader
                title="Update facet"
                subtitle={node?.id}
            />
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={hasWriteAccess ? handleUpdate : undefined}
                    onDelete={hasWriteAccess ? handleDelete : undefined}
                    onCancel={onCancel}
                >
                    <FacetFormSet isUpdate/>
                </CatalogItemForm>
            </AsyncWrapper>
        </React.Fragment>
    )
}

export default function FacetViews() {
    return (
        <CrudSwitch
            read={<ListView/>}
            create={<CreateView/>}
            update={<UpdateView/>}
        />
    );
}
