import {useFormContext} from "react-hook-form";
import React from "react";
import TextInputGridItems from "./TextInputGridItems";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormCaption from "./FormCaption";
import TextFieldOptions from "./TextFieldOptions";

export type CatalogItemFormSetProps = {
    isUpdate?: boolean
}

export default function CatalogItemFormSet(props: CatalogItemFormSetProps) {
    const { isUpdate } = props;
    const { register } = useFormContext();

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <FormCaption>Name</FormCaption>
            </Grid>
            <TextInputGridItems name="names" required />
            <Grid item xs={12}>
                <FormCaption>General information</FormCaption>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    disabled={isUpdate}
                    helperText={"Well known unique identifier of the described concept."}
                    inputRef={register({required: isUpdate})}
                    label={"Universal ID"}
                    name="id"
                    {...TextFieldOptions}
                />
            </Grid>
        </React.Fragment>
    );
}