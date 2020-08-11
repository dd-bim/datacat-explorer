import React from "react";
import TextInputGridItems, {useFormValues as useTranslationFormValues} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import FormCaption from "../form/FormCaption";
import {
    AssignsPropertyWithValuesDetailsFragment,
    AssignsPropertyWithValuesFragment,
    CatalogItemFragment,
    EntityTypes,
} from "../../generated/types";
import useItemSelection from "../Selection/useItemSelection";
import useItemsSelection from "../Selection/useItemsSelection";
import SelectionCard from "../Selection/SelectionCard";
import SearchListView from "../Search/SearchListView";
import SelectionFieldList from "../Selection/SelectionFieldList";
import EmptySelectionCard from "../Selection/EmptySelectionCard";
import {RootFormValues} from "../form/RootFormSet";
import RootMetaFormSet from "../form/RootMetaFormSet";

export type AssignsPropertyWithValuesFormValues = RootFormValues & {
    relatingObject: string,
    relatedProperty: string,
    relatedValues: string
}

export const useFormValues = (): (item?: AssignsPropertyWithValuesFragment) => AssignsPropertyWithValuesFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => {
        return {
            id: item?.id ?? '',
            versionId: item?.versionId ?? '',
            versionDate: item?.versionDate ?? '',
            names: tmpl(item?.names),
            descriptions: tmpl(item?.descriptions),
            relatingObject: item?.relatingObject.id ?? '',
            relatedProperty: item?.relatedProperty.id ?? '',
            relatedValues: item?.relatedValues.map(({id}) => id).join(",") ?? ''
        }
    };
}

export type AssignsPropertyWithValuesFormSetProps = {
    assignsPropertyWithValues?: AssignsPropertyWithValuesDetailsFragment
} & CatalogItemFormSetProps;

export default function AssignsPropertyWithValuesFormSet(props: AssignsPropertyWithValuesFormSetProps) {
    const {assignsPropertyWithValues, isUpdate} = props;

    const {
        selection: relatingObject,
        setSelection: setRelatingObject
    } = useItemSelection<CatalogItemFragment>({
        name: 'relatingObject',
        defaultValue: assignsPropertyWithValues?.relatingObject ?? null
    });
    const {
        selection: relatedProperty,
        setSelection: setRelatedProperty
    } = useItemSelection<CatalogItemFragment>({
        name: 'relatedProperty',
        defaultValue: assignsPropertyWithValues?.relatedProperty ?? null
    });
    const {
        selection: relatedValues,
        add: addRelatedValue,
        remove: removeRelatedValue
    } = useItemsSelection<CatalogItemFragment>({
        name: 'relatedValues',
        defaultValues: assignsPropertyWithValues?.relatedValues ?? []
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
                    <SearchListView
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
                <FormCaption>Related property</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    {relatedProperty ? (
                        <SelectionCard item={relatedProperty}/>
                    ) : (
                        <EmptySelectionCard/>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={setRelatedProperty}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdProperty],
                            idNotIn: relatedProperty ? [relatedProperty.id] : []
                        }}
                        SearchFieldProps={{
                            label: 'Search for objects'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Related values</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    <SelectionFieldList
                        items={relatedValues}
                        onClear={removeRelatedValue}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={addRelatedValue}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdValue],
                            idNotIn: relatedValues.map(x => x.id)
                        }}
                        SearchFieldProps={{
                            label: 'Search for values'
                        }}
                    />
                </Grid>
            </Grid>

            <RootMetaFormSet isUpdate={isUpdate}/>
        </React.Fragment>
    );
}
