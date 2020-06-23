import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {
    AssignsPropertyWithValuesDetailsFragment,
    CatalogItemFragment,
    EntityTypes,
    RootFragment
} from "../../generated/types";
import useItemSelection from "../Selection/useItemSelection";
import useItemsSelection from "../Selection/useItemsSelection";
import SelectionCard from "../Selection/SelectionCard";
import SearchListView from "../Search/SearchListView";
import {SelectionItem} from "../Selection/types";
import SelectionFieldList from "../Selection/SelectionFieldList";
import EmptySelectionCard from "../Selection/EmptySelectionCard";

export type AssignsPropertyWithValuesFormSetProps = {
    assignsPropertyWithValues?: AssignsPropertyWithValuesDetailsFragment
} & CatalogItemFormSetProps;

export default function AssignsPropertyWithValuesFormSet(props: AssignsPropertyWithValuesFormSetProps) {
    const {assignsPropertyWithValues, isUpdate} = props;
    const {register} = useFormContext();
    const {
        selection: relatingObject,
        setSelection: setRelatingObject
    } = useItemSelection<RootFragment>({
        name: 'relatingObject',
        defaultValue: assignsPropertyWithValues?.relatingObject ?? null
    });
    const {
        selection: relatedProperty,
        setSelection: setRelatedProperty
    } = useItemSelection<RootFragment>({
        name: 'relatedProperty',
        defaultValue: assignsPropertyWithValues?.relatedProperty ?? null
    });
    const {
        selection: relatedValues,
        add: addRelatedValue,
        remove: removeRelatedValue
    } = useItemsSelection<RootFragment>({
        name: 'relatedValues',
        defaultValues: assignsPropertyWithValues?.relatedValues ?? []
    });
    const handleOnSetRelatingObject = (item: CatalogItemFragment) => {
        setRelatingObject(item as SelectionItem<RootFragment>);
    }
    const handleOnSetRelatedProperty = (item: CatalogItemFragment) => {
        setRelatedProperty(item as SelectionItem<RootFragment>)
    }

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
                        onSelect={handleOnSetRelatingObject}
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
                        onSelect={handleOnSetRelatedProperty}
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
                            entityTypeIn: [EntityTypes.XtdRoot],
                            idNotIn: relatedValues.map(x => x.id)
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
