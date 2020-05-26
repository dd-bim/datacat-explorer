import {useFormContext} from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import IdField from '../IdField';
import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core';
import {DateTimePicker} from '@material-ui/pickers';
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

interface XtdEntityFormsetProps {
    variant: 'standard' | 'outlined' | 'filled';
}

export default function XtdEntityFormset(props: XtdEntityFormsetProps) {
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
            <Grid item xs={12}>
                <Typography className={classes.heading} variant="subtitle1" color="primary">Names</Typography>
                <LanguageRepresentationMultiField
                    name="names"
                    label="Name"
                    fullWidth={true}
                    variant={variant}
                />
            </Grid>
        </Grid>
    );
}

XtdEntityFormset.propTypes = {
    inputOptions: PropTypes.object
};
