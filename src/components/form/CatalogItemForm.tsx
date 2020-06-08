import {useFormContext} from "react-hook-form";
import React from "react";
import TextInputGridItems from "./TextInputGridItems";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export type CatalogItemFormProps = {
    isUpdate?: boolean
}

export default function CatalogItemForm(props: CatalogItemFormProps) {
    const { isUpdate } = props;
    const { register } = useFormContext();

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Typography variant="h6">
                    General information
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    disabled={isUpdate}
                    fullWidth
                    helperText={"Well known unique identifier of the described concept."}
                    inputRef={register({required: isUpdate})}
                    label={"Universal ID"}
                    name="id"
                    variant="outlined"
                />
            </Grid>
            <TextInputGridItems name="names" required />
        </React.Fragment>
    );
}
