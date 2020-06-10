import {FormContext, useForm} from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormControls from "./FormControls";
import React from "react";

type FormProps<T> = {
    children: React.ReactNode
    defaultValues: T
    onSubmit?(input: T): void
    onDelete?(): void
    onCancel(): void
}

export default function CatalogItemForm<T>(props: FormProps<T>) {
    const { children, defaultValues, onCancel, onSubmit, onDelete } = props;
    const formMethods = useForm<T>({ defaultValues });
    const { handleSubmit } = formMethods;
    const stubOnSubmit = (input: T) => onSubmit?.(input);

    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(stubOnSubmit)} noValidate autoComplete="off">
                <Grid container>
                    {children}
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="end">
                            <FormControls
                                submit={!!onSubmit}
                                onCancel={onCancel}
                                onDelete={onDelete}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </FormContext>
    );
}
