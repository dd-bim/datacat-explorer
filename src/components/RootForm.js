import {Controller, FormContext, useForm} from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import IdField from './IdField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import {makeStyles} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {gql} from '@apollo/client';
import {DatePicker, DateTimePicker} from '@material-ui/pickers';
import LanguageRepresentationMultiField from './LanguageRepresentationMultiField';
import Typography from '@material-ui/core/Typography';
import useTheme from '@material-ui/core/styles/useTheme';
import {sanitizeRootInput} from '../utils';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '100%',
        },
    },
    heading: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
    },
    formActions: {
        'display': 'flex',
        'justify-content': 'end',
        '& button': {
            'margin': theme.spacing(1),
        }
    }
}));

const inputOptions = {
    variant: 'filled',
};

export default function RootForm(props) {
    const theme = useTheme();
    const classes = useStyles();
    const { defaultValues, onSubmit, onCancel } = props;
    const formMethods = useForm({ defaultValues });
    const {register, control, errors, handleSubmit} = formMethods;

    const _onSubmit = (data, e) => {
        sanitizeRootInput(data);
        onSubmit(data, e);
    };

    return (
        <FormContext {...formMethods}>
            <form className={classes.root} onSubmit={handleSubmit(_onSubmit)} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography className={classes.heading} variant="subtitle1" color="primary">General</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <IdField
                            name="id"
                            label="Unique ID"
                            disabled={true}
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
                                inputRef={register}
                                error={errors.versionId}
                                helperText={"User-choosen version id."}
                                {...inputOptions}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controller
                                control={control}
                                name={'versionDate'}
                                as={
                                    <DatePicker
                                        name="versionDate"
                                        label="Version Date"
                                        format={'YYYY-MM-DD'}
                                        error={errors.versionDate}
                                        helperText={"User-choosen version date."}
                                        inputVariant={inputOptions.variant}
                                        {...inputOptions}
                                    />
                                }
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>

                        <Grid item xs={12}>
                            <Typography  className={classes.heading} variant="subtitle1" color="primary">Names</Typography>
                            <LanguageRepresentationMultiField name="names" label="Name" inputOptions={inputOptions}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography  className={classes.heading} variant="subtitle1" color="primary">Descriptions</Typography>
                            <LanguageRepresentationMultiField
                                name="descriptions"
                                label="Description"
                                multiline={true}
                                rows={3}
                                highlightColor={theme.palette.secondary.main}
                                inputOptions={inputOptions}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className={classes.formActions}>
                        <Button type="button" variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </FormContext>
    );
}

RootForm.fragments = {
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
    `
};

RootForm.propTypes = {
    defaultValues: PropTypes.shape({
        id: PropTypes.string,
        names: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            languageCode: PropTypes.string,
            name: PropTypes.string,
        })),
    }),
    onSubmit: PropTypes.func.isRequired,
};

RootForm.defaultProps = {
    defaultValues: {
        id: '',
        versionId: '',
        versionDate: '',
        names: [{
            id: '',
            languageCode: 'de',
            name: '',
        }],
        descriptions: []
    },
};
