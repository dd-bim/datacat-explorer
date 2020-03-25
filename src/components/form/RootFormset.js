import {Controller, useFormContext} from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import IdField from '../IdField';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {gql} from '@apollo/client';
import {DatePicker, DateTimePicker} from '@material-ui/pickers';
import LanguageRepresentationMultiField from '../LanguageRepresentationMultiField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    heading: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
    },
    formActions: {
        'display': 'flex',
        'justify-content': 'end',
        '& button': {
            'margin': theme.spacing(1),
        },
    },
}));

export default function RootFormset(props) {
    const {inputOptions} = props;
    const classes = useStyles();
    const [isUpdate, setIsUpdate] = useState(false);
    const {getValues, register, errors} = useFormContext();

    useEffect(() => {
        if (getValues().id !== '') {
            setIsUpdate(true);
        }
    }, []);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography className={classes.heading} variant="subtitle1" color="primary">General</Typography>
            </Grid>
            <Grid item xs={12}>
                <IdField
                    name="id"
                    label="Unique ID"
                    disabled={isUpdate}
                    fullWidth
                    {...inputOptions}
                />
            </Grid>
            <Grid container item xs={12} spacing={1}>
                <Grid item xs={6}>
                    <DateTimePicker
                        ampm={false}
                        name="created"
                        format={'LLL'}
                        label="Created"
                        disabled={true}
                        fullWidth
                        inputVariant={inputOptions.variant}
                        {...inputOptions}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker
                        ampm={false}
                        name="lastModified"
                        format={'LLL'}
                        label="Last modified"
                        disabled={true}
                        fullWidth
                        inputVariant={inputOptions.variant}
                        {...inputOptions}
                    />
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={1}>
                <Grid item xs={6}>
                    <TextField
                        name="versionId"
                        label="Version ID"
                        inputRef={register({required: true})}
                        error={!!errors.versionId}
                        required={true}
                        helperText={'User-choosen version id.'}
                        fullWidth
                        {...inputOptions}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        name={'versionDate'}
                        onChange={(([date]) => date.format('YYYY-MM-DD'))}
                        as={
                            <DatePicker
                                name="versionDate"
                                label="Version Date"
                                format={'YYYY-MM-DD'}
                                error={!!errors.versionDate}
                                required={true}
                                helperText={'User-choosen version date.'}
                                fullWidth
                                inputVariant={inputOptions.variant}
                                {...inputOptions}
                            />
                        }
                    />
                </Grid>
            </Grid>
            <Grid container item xs={12}>

                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="subtitle1" color="primary">Names</Typography>
                    <LanguageRepresentationMultiField
                        name="names"
                        label="Name"
                        fullWidth
                        inputOptions={inputOptions}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="subtitle1" color="primary">Descriptions</Typography>
                    <LanguageRepresentationMultiField
                        name="descriptions"
                        label="Description"
                        multiline={true}
                        rows={3}
                        fullWidth
                        inputOptions={inputOptions}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

RootFormset.fragments = {
    root: gql`
        fragment RootFormRoot on XtdRoot {
            id
            created
            lastModified
            versionId
            versionDate
            names {
                id
                created
                lastModified
                languageCode
                value
            }
            descriptions {
                id
                created
                lastModified
                languageCode
                value
            }
        }
    `,
};

RootFormset.propTypes = {
    inputOptions: PropTypes.object
};
