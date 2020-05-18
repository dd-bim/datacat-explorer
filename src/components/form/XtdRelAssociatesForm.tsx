import React from 'react';
import {sanitizeRootInput} from '../../utils';
import {FormContext, useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RootFormset from './RootFormset';
import dateTime from '../../dateTime';
import EntitySelectTextField from '../EntitySelectTextField';
import get from 'lodash.get';
import Grid from '@material-ui/core/Grid';
import RelatedThingsMultiField from '../RelatedThingsMultiField';
import cloneDeep from 'lodash.clonedeep';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import {AssociationInput, XtdEntity, XtdObjectTypes, XtdRelAssociates} from "../../types";
import {LanguageRepresentationFieldDefaultValues} from "../LanguageRepresentationField";
import useAuthContext from "../../hooks/useAuthContext";

const useStyles = makeStyles(theme => ({
    heading: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
    },
}));

const sanitizeAssociationInput = (data: any): AssociationInput => {
    const input = cloneDeep(data);
    sanitizeRootInput(input);
    return input;
};

export interface XtdRelAssociatesFormDefaultValues {
    id: string;
    versionId: string;
    versionDate: string;
    names: LanguageRepresentationFieldDefaultValues[];
    descriptions: LanguageRepresentationFieldDefaultValues[];
    relatingThing: string;
    relatedThings: string[]
}

export interface XtdRelAssociatesFormProps {
    title: string;
    entity?: XtdRelAssociates;
    onSubmit: (input: AssociationInput) => void;
    onCancel: () => void;
}

const initialValues = (): XtdRelAssociatesFormDefaultValues => ({
    id: '',
    versionId: '1',
    versionDate: dateTime().format('YYYY-MM-DD'),
    names: [{
        id: '',
        languageCode: 'de',
        value: '',
    }],
    descriptions: [],
    relatingThing: '',
    relatedThings: ['', '', '']
});

const entityToDefaultValues = (entity: XtdRelAssociates): XtdRelAssociatesFormDefaultValues => {
    const { id, versionId, versionDate, names, descriptions, relatingThing, relatedThings } = entity;
    return {
        id,
        versionId,
        versionDate,
        names,
        descriptions,
        relatingThing: relatingThing.id,
        relatedThings: relatedThings.nodes.map(x => x.id)
    };
}

export default function XtdRelAssociatesForm<T extends XtdRelAssociates>(props: XtdRelAssociatesFormProps) {
    const classes = useStyles();
    const { title, entity, onSubmit, onCancel } = props;
    const { hasRole } = useAuthContext();
    const defaultValues = entity ? entityToDefaultValues(entity) : initialValues();
    const formMethods = useForm({ defaultValues });
    const { getValues, setValue, errors, handleSubmit, register } = formMethods;
    const labels = Object.values(XtdObjectTypes);

    // compute which entities should not be shown in search view
    const currentValues = getValues({ nest: true })

    const excludedIds = [...currentValues.relatedThings];
    if (currentValues.id) excludedIds.push(currentValues.id);
    if (currentValues.relatingThing) excludedIds.push(currentValues.relatingThing);

    const handleValidSubmit = async (data: any) => {
        const input = sanitizeAssociationInput(data);
        onSubmit(input);
    };

    const relatingThingError = get(errors, 'relatingThing');

    const onConceptSelect = (selection: XtdEntity | null) => {
        const newValue = selection ? selection.id : '';
        setValue('relatingThing', newValue, true)
    };
    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(handleValidSubmit)} noValidate autoComplete="off">
                <Typography variant="h4">{title}</Typography>

                <RootFormset variant={'filled'} />

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
                        <input hidden name="relatingThing" defaultValue={currentValues.relatingThing} ref={register({ required: true })} />
                        <EntitySelectTextField
                            onConceptSelect={onConceptSelect}
                            initialEntity={entity?.relatingThing}
                            labels={labels}
                            excludedIds={excludedIds}
                            label="Relating thing"
                            supportedFieldName="relatingThing"
                            fullWidth
                            error={!!relatingThingError}
                            helperText={relatingThingError && 'This field is required.'}
                            variant={'filled'}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RelatedThingsMultiField
                            initialEntities={entity?.relatedThings.nodes}
                            labels={labels}
                            excludedIds={excludedIds}
                            name="relatedThings"
                            label="Related things"
                        />
                    </Grid>
                </Grid>

                <ButtonGroup>
                    <Button type="button" variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
                    <Button disabled={!hasRole('USER')} type="submit" variant="contained" color="primary">Submit</Button>
                </ButtonGroup>
            </form>
        </FormContext>
    );
}

XtdRelAssociatesForm.defaultProps = {
    defaultValues: initialValues
};

