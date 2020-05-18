import {useFieldArray, useFormContext} from 'react-hook-form';
import EntitySelectTextField from './EntitySelectTextField';
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Add as AddIcon, Clear as ClearIcon} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {TextFieldProps} from "@material-ui/core";
import {XtdEntity, XtdEntityTypes} from "../types";

const defaultValues = () => ({
    id: '',
    label: '',
});

interface RelatedThingsMultiFieldProps {
    initialEntities?: XtdEntity[];
    name: string;
    label: string;
    labels: XtdEntityTypes[]
    excludedIds: string[];
    inputOptions?: TextFieldProps;
}

export default function RelatedThingsMultiField(props: RelatedThingsMultiFieldProps) {
    const {
        initialEntities,
        name,
        label,
        labels,
        excludedIds,
        inputOptions,
    } = props;
    const keyName = 'fieldId';
    const {getValues, setValue, register} = useFormContext();
    const {fields, append, remove} = useFieldArray({keyName, name});

    return (
        <Grid container spacing={1}>
            {fields.map((field, index) => {
                const accessor = `${name}[${index}]`;
                const handleNewSelection = (selection: XtdEntity | null) => {
                    setValue(accessor, selection ? selection.id : '', true);
                };
                return (
                    <Grid key={field.fieldId} container spacing={1} item xs={12}>
                        <Grid item xs={10}>
                            <input hidden name={accessor} ref={register({ required: true })} />
                            <EntitySelectTextField
                                onConceptSelect={handleNewSelection}
                                initialEntity={initialEntities?.[index]}
                                supportedFieldName={accessor}
                                label={`${label} (${index + 1}/${fields.length})`}
                                labels={labels}
                                excludedIds={excludedIds}
                                {...inputOptions}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={() => remove(index)}>
                                <ClearIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                );
            })}
            <Grid item xs={12}>
                <Button
                    startIcon={<AddIcon/>}
                    color={'primary'}
                    onClick={() => append(defaultValues())}
                >
                    Add related thing
                </Button>
            </Grid>
        </Grid>
    );
};
