import {EntityInput} from "../../generated/types";
import {FormContext, useForm} from "react-hook-form";
import React from "react";
import TextInputGridItems from "./TextInputGridItems";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

type RootItemFormProps = {
    isUpdate?: boolean
    defaultValues: EntityInput
    onCancel(): void
    onSave(input: EntityInput): void
}

export default function ObjectForm(props: RootItemFormProps) {
    const { isUpdate, defaultValues, onCancel, onSave } = props;
    const methods = useForm({ defaultValues });
    const { register, handleSubmit } = methods;

    return (
        <FormContext {...methods}>
            <form onSubmit={handleSubmit(onSave)} noValidate autoComplete="off">
                <TextField
                    hidden={isUpdate}
                    label={"Universal ID"}
                    helperText={"Well known unique identifier of the described concept."}
                    name="id"
                    fullWidth
                    inputRef={register({required: isUpdate})}
                />
                <TextInputGridItems
                    name="names"
                    required
                />
                <TextInputGridItems
                    name="descriptions"
                    multiline
                    rows={3}
                />
                <ButtonGroup>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </ButtonGroup>
            </form>
        </FormContext>
    );
}
