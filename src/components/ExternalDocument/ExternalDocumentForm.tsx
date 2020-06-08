import React from 'react';
import {EntityInput, EntityUpdateInput} from "../../generated/types";
import CatalogItemForm, {CatalogItemFormProps} from "../form/CatalogItemForm";
import {FormContext, useForm} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import {CancelButton, SubmitButton} from "../form/formButtons";
import Box from "@material-ui/core/Box";

export type FormProps = {
    defaultValues: EntityInput | EntityUpdateInput
    onSubmit(input: EntityInput | EntityUpdateInput): void
    onCancel(): void
    catalogItemFormProps?: CatalogItemFormProps
}

export default function ExternalDocumentForm(props: FormProps) {
    const { defaultValues, onCancel, onSubmit, catalogItemFormProps } = props;
    const formMethods = useForm({ defaultValues });
    const { handleSubmit } = formMethods;

    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <CatalogItemForm {...catalogItemFormProps} />
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="end">
                            <CancelButton onClick={onCancel} />
                            <SubmitButton />
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </FormContext>
    );
}
