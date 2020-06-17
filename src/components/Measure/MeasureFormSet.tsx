import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {EntityTypes, MeasureFragment} from "../../generated/types";
import ItemSelectionFormSet from "../Selection/ItemSelectionFormSet";
import ItemsSelectionFormSet from "../Selection/ItemsSelectionFormSet";

export type MeasureFormSetProps = {
    measure?: MeasureFragment
} & CatalogItemFormSetProps;

export default function MeasureFormSet(props: MeasureFormSetProps) {
    const {measure, isUpdate} = props;
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
                <FormCaption>Unit</FormCaption>
            </Grid>

            <ItemSelectionFormSet
                name="unitComponent"
                defaultValue={measure?.unitComponent}
                searchLabel="Search all units in the catalog"
                emptyLabel="No unit component selected..."
                clearLabel="Remove unit component"
                filter={selection => ({
                    entityTypeIn: [EntityTypes.XtdUnit],
                    idNotIn: selection ? [selection.id] : []
                })}
            />

            <Grid item xs={12}>
                <FormCaption>Value domain</FormCaption>
            </Grid>

            <ItemsSelectionFormSet
                name="valueDomain"
                defaultValues={measure?.valueDomain}
                searchLabel="Search all values in the catalog"
                clearLabel="Remove value"
                emptyLabel="No values selected..."
                filter={selection => ({
                    entityTypeIn: [EntityTypes.XtdValue],
                    idNotIn: selection.map(value => value.id)
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
