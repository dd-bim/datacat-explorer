import React from "react";
import TextInputGridItems, {
    TranslationFormValues,
    useFormValues as useTranslationFormValues
} from "./TextInputGridItems";
import {CatalogItemFormSetProps, CatalogItemFormValues} from "./CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "./FormCaption";
import TextFieldOptions from "./TextFieldOptions";
import {RootFragment} from "../../generated/types";

export type RootFormValues = CatalogItemFormValues & {
    versionId: string,
    versionDate: string,
    descriptions: TranslationFormValues[],
}

export const useFormValues = (): (item?: RootFragment) => RootFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => {
        return {
            id: item?.id ?? '',
            versionId: item?.versionId ?? '',
            versionDate: item?.versionDate ?? '',
            names: tmpl(item?.names),
            descriptions: tmpl(item?.descriptions)
        };
    };
};

export type RootFormSetProps = CatalogItemFormSetProps;

export default function RootFormSet(props: RootFormSetProps) {
    const {isUpdate} = props;
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
