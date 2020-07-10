import React from "react";
import TextInputGridItems, {useFormValues as useTranslationFormValues} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Controller, useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import ToleranceTypeSelect from "./ToleranceTypeSelect";
import ValueTypeSelect from "./ValueTypeSelect";
import ValueRoleSelect from "./ValueRoleSelect";
import {ValueFragment, XtdToleranceTypeEnum, XtdValueRoleEnum, XtdValueTypeEnum} from "../../generated/types";
import {RootFormValues} from "../form/RootFormSet";
import RootMetaFormSet from "../form/RootMetaFormSet";

export type ValueFormValues = RootFormValues & {
    toleranceType: XtdToleranceTypeEnum,
    lowerTolerance: string,
    upperTolerance: string,
    valueType: XtdValueTypeEnum,
    valueRole: XtdValueRoleEnum,
    nominalValue: string
}

export const useFormValues = (): (item?: ValueFragment) => ValueFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => ({
        id: item?.id ?? '',
        versionId: item?.versionId ?? '',
        versionDate: item?.versionDate ?? '',
        facets: item?.facets ?? [],
        names: tmpl(item?.names),
        descriptions: tmpl(item?.descriptions),
        toleranceType: item?.toleranceType ?? XtdToleranceTypeEnum.Nil,
        lowerTolerance: item?.lowerTolerance ?? '',
        upperTolerance: item?.upperTolerance ?? '',
        valueType: item?.valueType ?? XtdValueTypeEnum.Nil,
        valueRole: item?.valueRole ?? XtdValueRoleEnum.Nil,
        nominalValue: item?.nominalValue ?? ''
    });
}

export type ValueFormSetProps = CatalogItemFormSetProps;

export default function ValueFormSet(props: ValueFormSetProps) {
    const {isUpdate} = props
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

            <Grid container spacing={3} item xs={12}>

                <Grid container item xs={6}>
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
                </Grid>

                <Grid container item xs={6}>
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
                </Grid>

            </Grid>

            <RootMetaFormSet isUpdate={isUpdate}/>
        </React.Fragment>
    );
}
