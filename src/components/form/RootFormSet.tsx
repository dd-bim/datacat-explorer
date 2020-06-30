import React from "react";
import TextInputGridItems, {
    TranslationFormValues,
    useFormValues as useTranslationFormValues
} from "./TextInputGridItems";
import {CatalogItemFormSetProps, CatalogItemFormValues} from "./CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import FormCaption from "./FormCaption";
import {RootFragment} from "../../generated/types";
import RootMetaFormSet from "./RootMetaFormSet";

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
            facets: item?.facets ?? [],
            names: tmpl(item?.names),
            descriptions: tmpl(item?.descriptions)
        };
    };
};

export type RootFormSetProps = CatalogItemFormSetProps;

export default function RootFormSet(props: RootFormSetProps) {
    const {isUpdate} = props;

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

            <RootMetaFormSet isUpdate={isUpdate}/>
        </React.Fragment>
    );
}
