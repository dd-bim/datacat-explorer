import React from "react";
import TextInputGridItems, {useFormValues as useTranslationFormValues} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import {
    DocumentsDetailsFragment,
    DocumentsFragment,
    EntityTypes,
    ExternalDocumentFragment,
    RootFragment
} from "../../generated/types";
import useItemsSelection from "../Selection/useItemsSelection";
import useItemSelection from "../Selection/useItemSelection";
import SelectionFieldList from "../Selection/SelectionFieldList";
import SearchListView from "../Search/SearchListView";
import SelectionCard from "../Selection/SelectionCard";
import {SelectionItem} from "../Selection/types";
import EmptySelectionCard from "../Selection/EmptySelectionCard";
import {BinaryRelationshipFormValues} from "../form/types";
import RootMetaFormSet from "../form/RootMetaFormSet";

export const useFormValues = (): (item?: DocumentsFragment) => BinaryRelationshipFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => ({
        id: item?.id ?? '',
        versionId: item?.versionId ?? '',
        versionDate: item?.versionDate ?? '',
        facets: item?.facets ?? [],
        names: tmpl(item?.names),
        descriptions: tmpl(item?.descriptions),
        relating: item?.relatingDocument.id ?? '',
        related: item?.relatedThings.map(x => x.id).join(',') ?? ''
    });
}

export type CollectsFormSetProps = {
    documents?: DocumentsDetailsFragment
} & CatalogItemFormSetProps;

export default function DocumentsFormSet(props: CollectsFormSetProps) {
    const {documents, isUpdate} = props;
    const {register} = useFormContext();
    const {
        selection: relatingDocument,
        setSelection: setRelatingDocument
    } = useItemSelection<ExternalDocumentFragment>({
        name: 'relating',
        defaultValue: documents?.relatingDocument ?? null
    });
    const {
        selection: relatedThings,
        add: addRelatedThing,
        remove: removeRelatedThing
    } = useItemsSelection<RootFragment>({
        name: 'related',
        defaultValues: documents?.relatedThings ?? []
    });

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <FormCaption>Name</FormCaption>
            </Grid>
            <TextInputGridItems
                name="names"
                required
            />

            <Grid item xs={12}>
                <FormCaption>Description</FormCaption>
            </Grid>
            <TextInputGridItems
                name="descriptions"
                multiline
                rows={3}
            />

            <Grid item xs={12}>
                <FormCaption>Relating document</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    {relatingDocument ? (
                        <SelectionCard item={relatingDocument}/>
                    ) : (
                        <EmptySelectionCard/>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={(item) => setRelatingDocument(item as SelectionItem<ExternalDocumentFragment>)}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdExternalDocument],
                            idNotIn: relatingDocument ? [relatingDocument.id] : []
                        }}
                        SearchFieldProps={{
                            label: 'Search for external documents'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Related things</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    <SelectionFieldList
                        items={relatedThings}
                        onClear={removeRelatedThing}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={addRelatedThing}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdRoot],
                            idNotIn: relatedThings.map(x => x.id)
                        }}
                        SearchFieldProps={{
                            label: 'Search for things'
                        }}
                    />
                </Grid>
            </Grid>

            <RootMetaFormSet isUpdate={isUpdate}/>
        </React.Fragment>
    );
}
