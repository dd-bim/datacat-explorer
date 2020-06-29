import React from "react";
import TextInputGridItems, {useFormValues as useTranslationFormValues} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {AssignsCollectionsFragment, CollectionFragment, EntityTypes, RootFragment} from "../../generated/types";
import useItemSelection from "../Selection/useItemSelection";
import useItemsSelection from "../Selection/useItemsSelection";
import SelectionCard from "../Selection/SelectionCard";
import EmptySelectionCard from "../Selection/EmptySelectionCard";
import SearchListView from "../Search/SearchListView";
import SelectionFieldList from "../Selection/SelectionFieldList";
import {BinaryRelationshipFormValues} from "../form/types";

export const useFormValues = (): (item?: AssignsCollectionsFragment) => BinaryRelationshipFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => ({
        id: item?.id ?? '',
        versionId: item?.versionId ?? '',
        versionDate: item?.versionDate ?? '',
        names: tmpl(item?.names),
        descriptions: tmpl(item?.descriptions),
        relating: item?.relatingObject.id ?? '',
        related: item?.relatedCollections.map(x => x.id).join(",") ?? ''
    });
}

export type AssignsCollectionsFormSetProps = {
    item?: AssignsCollectionsFragment
} & CatalogItemFormSetProps;

export default function AssignsCollectionsFormSet(props: AssignsCollectionsFormSetProps) {
    const {item, isUpdate} = props;
    const {register} = useFormContext();
    const {
        selection: relatingObject,
        setSelection: setRelatingObject
    } = useItemSelection<RootFragment>({
        name: 'relating',
        defaultValue: item?.relatingObject ?? null
    });
    const {
        selection: relatedCollections,
        add: addRelatedCollection,
        remove: removeRelatedCollection
    } = useItemsSelection<CollectionFragment>({
        name: 'related',
        defaultValues: item?.relatedCollections ?? []
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
                <FormCaption>Relating object</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    {relatingObject ? (
                        <SelectionCard item={relatingObject}/>
                    ) : (
                        <EmptySelectionCard/>
                    )}
                </Grid>

                <Grid item xs={6}>
                    <SearchListView<RootFragment>
                        onSelect={setRelatingObject}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdObject],
                            idNotIn: relatingObject ? [relatingObject.id] : []
                        }}
                        SearchFieldProps={{
                            label: 'Search for objects'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Related collections</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    <SelectionFieldList
                        items={relatedCollections}
                        onClear={removeRelatedCollection}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={addRelatedCollection}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdCollection],
                            idNotIn: relatedCollections.map(x => x.id)
                        }}
                        SearchFieldProps={{
                            label: 'Search for values'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Meta information</FormCaption>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    disabled={isUpdate}
                    helperText={"Well known unique identifier of the described concept."}
                    inputRef={register({required: isUpdate})}
                    label="Universal ID"
                    name="id"
                    {...TextFieldOptions}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register({required: true})}
                    label="Version ID"
                    name="versionId"
                    required
                    {...TextFieldOptions}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register({required: true})}
                    label={"Version date"}
                    name="versionDate"
                    required
                    {...TextFieldOptions}
                />
            </Grid>
        </React.Fragment>
    );
}
