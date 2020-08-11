import React from "react";
import Grid from "@material-ui/core/Grid";
import FormCaption from "./FormCaption";
import TextField from "@material-ui/core/TextField";
import TextFieldOptions from "./TextFieldOptions";
import {useFormContext} from "react-hook-form";

export default function({isUpdate}: {isUpdate?: boolean}) {
    const {register} = useFormContext();

    return (
        <React.Fragment>
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
    )
}
