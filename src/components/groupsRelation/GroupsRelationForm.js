import React from 'react';
import {sanitizeRootInput} from '../../utils';
import {FormContext, useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RootFormset from '../form/RootFormset';
import PropTypes from 'prop-types';
import dateTime from '../../dateTime';
import ConceptSelect from '../ConceptSelect';
import get from 'lodash.get';
import Grid from '@material-ui/core/Grid';
import RelatedThingsMultiField from '../RelatedThingsMultiField';
import cloneDeep from 'lodash.clonedeep';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    heading: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
    },
}));

const inputOptions = {
    variant: 'filled',
};

const sanitizeAssociationInput = data => {
    const input = cloneDeep(data);
    sanitizeRootInput(input);
    input.relatingThing = data.relatingThing.id;
    input.relatedThings = data.relatedThings.map(x => x.id);
    return input;
};

export default function GroupsRelationForm(props) {
    const classes = useStyles();
    const { defaultValues, onSubmit, onCancel } = props;
    const formMethods = useForm({ defaultValues });
    const { errors, handleSubmit } = formMethods;

    const handleValidSubmit = async (data, e) => {
        const input = sanitizeAssociationInput(data);
        onSubmit(input, e);
    };

    const relatingThingError = get(errors, 'relatingThing');

    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(handleValidSubmit)} noValidate autoComplete="off">
                <Typography variant="h4">Edit groups relation</Typography>

                <RootFormset inputOptions={inputOptions} />

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.heading}
                            variant="subtitle1"
                            color="primary"
                        >
                            Relationship
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <ConceptSelect
                            label="Relating thing"
                            name="relatingThing"
                            required fullWidth
                            error={!!relatingThingError}
                            helperText={relatingThingError && 'This field is required.'}
                            {...inputOptions}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RelatedThingsMultiField
                            item
                            name="relatedThings"
                            label="Related things"
                        />
                    </Grid>
                </Grid>

                <ButtonGroup>
                    <Button type="button" variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </ButtonGroup>
            </form>
        </FormContext>
    );
}

GroupsRelationForm.propTypes = {
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

GroupsRelationForm.defaultProps = {
    defaultValues: {
        id: '',
        versionId: '1',
        versionDate: dateTime().format('YYYY-MM-DD'),
        names: [{
            id: '',
            languageCode: 'de',
            value: '',
        }],
        descriptions: [],
        relatingThing: null,
        relatedThings: []
    },
};

