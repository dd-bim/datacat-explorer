import React from "react";
import TextInputGridItems, {useFormValues as useTranslationFormValues} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {
    CatalogItemFragment,
    CollectionFragment,
    CollectsDetailsFragment,
    CollectsFragment,
    EntityTypes
} from "../../generated/types";
import SearchListView from "../Search/SearchListView";
import SelectionFieldList from "../Selection/SelectionFieldList";
import useItemsSelection from "../Selection/useItemsSelection";
import useItemSelection from "../Selection/useItemSelection";
import SelectionCard from "../Selection/SelectionCard";
import {SelectionItem} from "../Selection/types";
import EmptySelectionCard from "../Selection/EmptySelectionCard";
import {BinaryRelationshipFormValues} from "../form/types";

export const useFormValues = (): (item?: CollectsFragment) => BinaryRelationshipFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => ({
        id: item?.id ?? '',
        versionId: item?.versionId ?? '',
        versionDate: item?.versionDate ?? '',
        names: tmpl(item?.names),
        descriptions: tmpl(item?.descriptions),
        relating: item?.relatingCollection.id ?? '',
        related: item?.relatedThings.map(x => x.id).join(',') ?? ''
    });
}

export type CollectsFormSetProps = {
    collects?: CollectsDetailsFragment
} & CatalogItemFormSetProps;

export default function CollectsFormSet(props: CollectsFormSetProps) {
    const {collects, isUpdate} = props;
    const {register} = useFormContext();

    const {
        selection: relatingCollection,
        setSelection: setRelatingCollection
    } = useItemSelection<CollectionFragment>({
        name: 'relating',
        defaultValue: collects?.relatingCollection ?? null
    });
    const {selection: relatedThings, add, remove} = useItemsSelection({
        name: 'related',
        defaultValues: collects?.relatedThings ?? []
    });
    const handleSetRelatingCollection = (item: CatalogItemFragment) => {
        setRelatingCollection(item as SelectionItem<CollectionFragment>);
    };
    const entityTypeIn: EntityTypes[] = [];
    if (relatingCollection?.__typename === "XtdNest") {
        if (relatedThings.length) {
            const entityType = EntityTypes[relatedThings[0].__typename]
            entityTypeIn.push(entityType);
        }
    }
    if (!entityTypeIn.length) {
        entityTypeIn.push(EntityTypes.XtdRoot);
    }

    const idNotIn = relatedThings.map(x => x.id);
    if (collects) idNotIn.push(collects.id);
    if (relatingCollection) idNotIn.push(relatingCollection.id);

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
                <FormCaption>Relating collection</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    {relatingCollection ? (
                        <SelectionCard item={relatingCollection}/>
                    ) : (
                        <EmptySelectionCard/>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={handleSetRelatingCollection}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdBag, EntityTypes.XtdNest],
                            idNotIn: relatingCollection ? [relatingCollection.id] : undefined
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
                        onClear={remove}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={add}
                        filter={{
                            entityTypeIn,
                            idNotIn
                        }}
                        SearchFieldProps={{
                            label: 'Search all things in the catalog',
                            helperText: 'Add more things to this collection by selecting them from the result list.'
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
