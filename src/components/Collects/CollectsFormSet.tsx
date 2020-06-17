import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {CatalogItemFragment, CollectsDetailsFragment, EntityTypes} from "../../generated/types";
import SearchListView from "../Search/SearchListView";
import SelectionFieldList from "../Selection/SelectionFieldList";
import useItemsSelection from "../Selection/useItemsSelection";
import useItemSelection from "../Selection/useItemSelection";
import SelectionField from "../Selection/SelectionField";
import ItemSelectionFormSet from "../Selection/ItemSelectionFormSet";
import {SelectionState} from "../Selection/types";

export type CollectsFormSetProps = {
    collects?: CollectsDetailsFragment
} & CatalogItemFormSetProps;

export default function CollectsFormSet(props: CollectsFormSetProps) {
    const {collects, isUpdate} = props;
    const {register} = useFormContext();

    const {selection: relatingCollection, setSelection: setRelatingCollection} = useItemSelection({
        name: 'relatingCollection',
        defaultValue: collects?.relatingCollection ?? null
    });
    const {selection: relatedThings, add, remove} = useItemsSelection({
        name: 'relatedThings',
        defaultValues: collects?.relatedThings || []
    });

    const entityTypeIn: EntityTypes[] = [];
    if (relatingCollection && relatingCollection.__typename === "XtdNest") {
        if (relatedThings.length) {
            const entityType = EntityTypes[relatedThings[0].__typename]
            entityTypeIn.push(entityType);
        }
    }
    if (!entityTypeIn.length) {
        entityTypeIn.push(EntityTypes.XtdRoot);
    }

    const idNotIn = [];
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

            {isUpdate ? (
                <SelectionField
                    item={{...(collects?.relatingCollection as CatalogItemFragment), state: SelectionState.PERSISTENT}}
                />
            ) : (
                <ItemSelectionFormSet
                    name="relatingCollection"
                    defaultValue={collects?.relatingCollection}
                    searchLabel="Search all collections in the catalog"
                    emptyLabel="No relating collection selected..."
                    filter={() => ({
                        entityTypeIn: [EntityTypes.XtdBag, EntityTypes.XtdNest]
                    })}
                    validationOptions={{
                        required: true
                    }}
                />
            )}

            <Grid item xs={12}>
                <FormCaption>Related things</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">

                <Grid item xs={6}>
                    <SelectionFieldList
                        items={relatedThings}
                        noSelectionLabel="No related things selected..."
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
