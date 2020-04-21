import {useFormContext} from 'react-hook-form';
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
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";

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

interface RootFormsetProps {
    variant: 'standard' | 'outlined' | 'filled';
}

export default function RootFormset(props: RootFormsetProps) {
    const {variant} = props;
    const classes = useStyles();
    const [isUpdate, setIsUpdate] = useState(false);
    const {getValues, setValue, register, errors, watch} = useFormContext();
    const { created, lastModified, versionDate } = watch();

    useEffect(() => {
        if (getValues().id !== '') {
            setIsUpdate(true);
        }
    }, []);

    useEffect(() => {
        register({ name: 'versionDate' });
    }, [register]);

    const handleDateChange = (name: string, date?: MaterialUiPickersDate) => {
        const value = date ? date.format('YYYY-MM-DD') : '';
        setValue('object', { [name]: value });
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Typography
                    className={classes.heading}
                    variant="subtitle1"
                    color="primary"
                >
                    General
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <IdField
                    name="id"
                    label="Unique ID"
                    disabled={isUpdate}
                    fullWidth
                    variant={variant}
                />
            </Grid>
            <Grid container item xs={12} spacing={1}>
                <Grid item xs={6}>
                    <DateTimePicker
                        ampm={false}
                        disabled={true}
                        format={'LLL'}
                        fullWidth
                        inputVariant="filled"
                        label="Created"
                        name="created"
                        onChange={() => {}}
                        value={created}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker
                        ampm={false}
                        disabled={true}
                        format={'LLL'}
                        fullWidth
                        inputVariant={variant}
                        label="Last modified"
                        name="lastModified"
                        onChange={() => {}}
                        value={lastModified}
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
                        variant={variant}
                    />
                </Grid>
                <Grid item xs={6}>
                    <DatePicker
                        error={!!errors.versionDate}
                        format={'YYYY-MM-DD'}
                        fullWidth
                        helperText={'User-choosen version date.'}
                        inputVariant={variant}
                        label="Version Date"
                        name={'versionDate'}
                        onChange={handleDateChange.bind(null, 'versionDate')}
                        required={true}
                        value={versionDate}
                    />
                </Grid>
            </Grid>
            <Grid container item xs={12}>

                <Grid item xs={12}>
                    <Typography className={classes.heading} variant="subtitle1" color="primary">Names</Typography>
                    <LanguageRepresentationMultiField
                        name="names"
                        label="Name"
                        fullWidth={true}
                        variant={variant}
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
                        variant={variant}
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
