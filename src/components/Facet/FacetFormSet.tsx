import React from "react";
import TextInputGridItems, {
    TranslationFormValues,
    useFormValues as useTranslationFormValues
} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {FacetFragment} from "../../generated/types";
import EntityTypeSelect from "./EntityTypeSelect";

export type FacetFormValues = {
    id: string,
    names: TranslationFormValues[],
    descriptions: TranslationFormValues[],
    targets: string
}

export const useFormValues = (): (item?: FacetFragment) => FacetFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => ({
        id: item?.id ?? '',
        names: tmpl(item?.names),
        descriptions: tmpl(item?.descriptions),
        targets: item?.targets.join(',') ?? ''
    });
};

export type FacetFormSetProps = CatalogItemFormSetProps;

export default function FacetFormSet(props: FacetFormSetProps) {
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
                <FormCaption>Targets</FormCaption>
            </Grid>
            <Grid item xs={12}>
                <EntityTypeSelect name="targets"/>
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
        </React.Fragment>
    );
}
