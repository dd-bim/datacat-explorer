import Grid from '@material-ui/core/Grid';
import {TextField} from 'formik-material-ui';
import {languages} from '../lang';
import MenuItem from '@material-ui/core/MenuItem';
import {FieldArray} from 'formik';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {Add, Remove} from '@material-ui/icons';

const initialText = {language: 'de', value: ''};

export default function TextArray(props) {
    const {
        inputName,
        label,
        values,
        multiline = false,
        rows = 2,
        min = 1,
    } = props;

    return (
        <FieldArray name={inputName} render={arrayHelpers => (
            <Grid container item spacing={1} xs={12}>
                {values && values.length > 0 ? (
                    values.map((name, index) => (
                        <Grid key={index} container item xs={12} spacing={1}>
                            <Grid item xs={2}>
                                <TextField
                                    select
                                    name={`${inputName}.${index}.language`}
                                    label={'Language'}
                                    variant={'filled'}
                                    required={true}
                                    fullWidth
                                >
                                    {languages.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    name={`${inputName}.${index}.value`}
                                    label={label}
                                    variant={'filled'}
                                    required={true}
                                    multiline={multiline}
                                    rows={rows}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <IconButton onClick={() => arrayHelpers.insert(index + 1, initialText)}>
                                    <Add/>
                                </IconButton>
                                <IconButton onClick={() => arrayHelpers.remove(index)} disabled={values.length <= min}>
                                    <Remove/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))
                ) : (
                    <Grid container item xs={12}>
                        <Grid item xs={10}/>
                        <Grid item xs={2}>
                            <IconButton onClick={() => arrayHelpers.push(initialText)}>
                                <Add/>
                            </IconButton>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        )}
        />
    );
}
