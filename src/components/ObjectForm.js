import React from 'react';
import {Form, Formik} from 'formik';
import {makeStyles} from '@material-ui/core';
import {Switch, TextField} from 'formik-material-ui';
import {DatePicker} from 'formik-material-ui-pickers';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Edit, Fingerprint, Save} from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import dateTime from '../dateTime';
import Grid from '@material-ui/core/Grid';
import TextArray from './TextArray';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        'padding': theme.spacing(1),
        '& input': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
    inputOptions: {
        'width': 200,
    },
}));

const validateTexts = values => {
    const errors = [];
    values.some((name, index) => {
        const error = {};

        if (!name.language) {
            error.language = 'Required';
        }

        if (!name.value) {
            error.value = 'Required';
        }

        if (Object.keys(error).length !== 0) {
            errors[index] = error;
            return true;
        }
    });

    return errors;
};

const validate = (values) => {
    return new Promise(resolve => {
        const errors = {};

        if (values.uniqueIdOverride && !values.uniqueId) {
            errors.uniqueId = 'Required if manual override is selected';
        }

        if (!values.versionDate) {
            errors.versionDate = 'Required';
        } else if (!dateTime(values.versionDate).isValid()) {
            errors.versionDate = 'Invalid date';
        }

        const nameErrors = validateTexts(values.names);
        if (nameErrors.length !== 0) {
            errors.names = nameErrors;
        }

        const descriptionErrors = validateTexts(values.descriptions);
        if (descriptionErrors.length !== 0) {
            errors.descriptions = descriptionErrors;
        }

        console.log("run");

        resolve(errors);
    });
};

export default function ObjectForm(props) {
    const classes = useStyles();
    const {
        initialValues,
        onSubmit
    } = props;

    return (
        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}>
            {({values, isSubmitting}) => (
                <Form className={classes.root} noValidate={true}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography>{'General'}</Typography>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={10}>
                                <TextField
                                    name={'uniqueId'}
                                    label={'Unique Id'}
                                    variant={'filled'}
                                    required={values.uniqueIdOverride}
                                    disabled={!values.uniqueIdOverride}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Fingerprint/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    helperText={'Universally unique ID generated at creation time.'}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <FormControlLabel
                                    label={<Edit/>}
                                    control={
                                        <Switch name={'uniqueIdOverride'}/>
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={10} spacing={1}>
                            <Grid item xs={6}>
                                <TextField
                                    name={'versionId'}
                                    label={'Version ID'}
                                    variant={'filled'}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <DatePicker
                                    name={'versionDate'}
                                    label={'Version date'}
                                    inputVariant={'filled'}
                                    required={true}
                                    format={'ll'}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={2} spacing={1}/>
                        <Grid container item>
                            <Typography>{'Names'}</Typography>
                            <TextArray
                                label={'Name'}
                                inputName={'names'}
                                values={values.names}/>
                        </Grid>
                        <Grid container item>
                            <Typography>{'Descriptions'}</Typography>
                            <TextArray
                                label={'Descriptions'}
                                inputName={'descriptions'}
                                values={values.descriptions}
                                min={0}
                                multiline={true}
                                rows={3}/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={2}>
                            <Button
                                type={'submit'}
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<Save/>}>
                                {'Save'}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}
