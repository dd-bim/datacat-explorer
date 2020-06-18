import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {AssignsCollectionsDetailsFragment, CatalogItemFragment, EntityTypes} from "../../generated/types";
import SelectionField from "../Selection/SelectionField";
import ItemSelectionFormSet from "../Selection/ItemSelectionFormSet";
import {SelectionState} from "../Selection/types";
import ItemsSelectionFormSet from "../Selection/ItemsSelectionFormSet";

export type AssignsCollectionsFormSetProps = {
    assignsCollections?: AssignsCollectionsDetailsFragment
} & CatalogItemFormSetProps;

export default function AssignsCollectionsFormSet(props: AssignsCollectionsFormSetProps) {
    const {assignsCollections, isUpdate} = props;
    const {register} = useFormContext();

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

            {isUpdate ? (
                <SelectionField
                    item={{
                        ...(assignsCollections?.relatingObject as CatalogItemFragment),
                        state: SelectionState.PERSISTENT
                    }}
                />
            ) : (
                <ItemSelectionFormSet
                    name="relatingObject"
                    defaultValue={assignsCollections?.relatingObject}
                    searchLabel="Search all objects in the catalog"
                    emptyLabel="No relating object selected..."
                    filter={() => ({
                        entityTypeIn: [EntityTypes.XtdObject]
                    })}
                    validationOptions={{
                        required: true
                    }}
                />
            )}

            <Grid item xs={12}>
                <FormCaption>Related collections</FormCaption>
            </Grid>

            <ItemsSelectionFormSet
                name="relatedCollections"
                defaultValues={assignsCollections?.relatedCollections}
                searchLabel="Search all collections in the catalog"
                emptyLabel="No relatedCollections selected..."
                clearLabel="Remove from relationship"
                filter={selection => ({
                    entityTypeIn: [EntityTypes.XtdCollection],
                    idNotIn: selection.map(collection => collection.id)
                })}
            />

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
