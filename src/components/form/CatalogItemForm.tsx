import {FormContext, FormContextValues, useForm} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControls from "./FormControls";
import React from "react";

type FormProps<T> = {
    children: React.ReactNode
    defaultValues: T
    onSubmit?(inputState: T, formMethods: FormContextValues<T>): void
    onDelete?(formMethods: FormContextValues<T>): void
    onCancel?(formMethods: FormContextValues<T>): void
}

export default function CatalogItemForm<T>(props: FormProps<T>) {
    const {children, defaultValues, onCancel, onSubmit, onDelete} = props;
    const formMethods = useForm<T>({defaultValues});
    const {handleSubmit, formState} = formMethods;
    const stubOnSubmit = (input: T) => onSubmit?.(input, formMethods);
    const handleOnCancel = onCancel ? () => onCancel(formMethods) : undefined;
    const handleOnDelete = onDelete ? () => onDelete(formMethods) : undefined;

    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(stubOnSubmit)} noValidate autoComplete="off">
                <Grid container>
                    {children}
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="end">
                            <FormControls
                                formState={formState}
                                submit={!!onSubmit}
                                onCancel={handleOnCancel}
                                onDelete={handleOnDelete}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </FormContext>
    );
}
