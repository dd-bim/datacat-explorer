import {useFieldArray} from 'react-hook-form';
import ConceptSelect from './ConceptSelect';
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Add as AddIcon, Clear as ClearIcon} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const defaultValues = () => ({
    id: '',
    label: '',
});


export default function RelatedThingsMultiField(props) {
    const {
        name,
        label,
        inputOptions,
    } = props;
    const keyName = 'fieldId';
    const {fields, append, remove} = useFieldArray({keyName, name});

    return (
        <Grid container spacing={1}>
            {fields.map((field, index) => {
                const accessor = `${name}[${index}]`;
                return (
                    <Grid key={field.fieldId} container spacing={1} item xs={12}>
                        <Grid item xs={10}>
                            <ConceptSelect
                                name={accessor}
                                label={`${label} (${index + 1}/${fields.length})`}
                                defaultValue={field.label}
                                required={true}
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
