import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {DocumentsDetailsFragment, EntityTypes} from "../../generated/types";
import ItemSelectionFormSet from "../Selection/ItemSelectionFormSet";
import ItemsSelectionFormSet from "../Selection/ItemsSelectionFormSet";

export type CollectsFormSetProps = {
    documents?: DocumentsDetailsFragment
} & CatalogItemFormSetProps;

export default function DocumentsFormSet(props: CollectsFormSetProps) {
    const {documents, isUpdate} = props;
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
                <FormCaption>Relating document</FormCaption>
            </Grid>

            <ItemSelectionFormSet
                name="relatingDocument"
                defaultValue={documents?.relatingDocument}
                searchLabel="Search all external documentations in the catalog"
                emptyLabel="No relating external document selected..."
                filter={() => ({
                    entityTypeIn: [EntityTypes.XtdExternalDocument]
                })}
                disabled={isUpdate}
                validationOptions={{
                    required: true
                }}
            />

            <Grid item xs={12}>
                <FormCaption>Related things</FormCaption>
            </Grid>

            <ItemsSelectionFormSet
                name="relatedThings"
                defaultValues={documents?.relatedThings}
                searchLabel="Search all things in the catalog"
                emptyLabel="No related things selected..."
                clearLabel="Remove from relationship"
                filter={selection => ({
                    entityTypeIn: [EntityTypes.XtdRoot],
                    idNotIn: selection.map(thing => thing.id)
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
