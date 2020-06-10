import React from "react";
import TextInputGridItems from "./TextInputGridItems";
import {CatalogItemFormSetProps} from "./CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Controller, useFormContext} from "react-hook-form";
import FormCaption from "./FormCaption";
import TextFieldOptions from "./TextFieldOptions";
import ToleranceTypeSelect from "./ToleranceTypeSelect";
import ValueTypeSelect from "./ValueTypeSelect";
import ValueRoleSelect from "./ValueRoleSelect";
import {XtdValueTypeEnum} from "../../generated/types";

export type ValueFormSetProps = CatalogItemFormSetProps;

export default function ValueFormSet(props: ValueFormSetProps) {
    const { isUpdate } = props;
    const { register, watch } = useFormContext();
    const valueType = watch('valueType');

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
                <FormCaption>Value</FormCaption>
            </Grid>

            <Grid item xs={12}>
                <Controller
                    as={<ValueTypeSelect/>}
                    label="Value type"
                    name="valueType"
                />
            </Grid>

            <Grid item xs={12}>
                <Controller
                    as={<ValueRoleSelect/>}
                    label="Value role"
                    name="valueRole"
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register({ required: valueType !== XtdValueTypeEnum.Nil })}
                    label="Nominal value"
                    name="nominalValue"
                    required={valueType !== XtdValueTypeEnum.Nil}
                    {...TextFieldOptions}
                />
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Tolerance</FormCaption>
            </Grid>

            <Grid item xs={12}>
                <Controller
                    as={<ToleranceTypeSelect/>}
                    label="Tolerance type"
                    name="toleranceType"
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register}
                    label="Lower tolerance"
                    name="lowerTolerance"
                    {...TextFieldOptions}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register}
                    label="Upper tolerance"
                    name="upperTolerance"
                    {...TextFieldOptions}
                />
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
