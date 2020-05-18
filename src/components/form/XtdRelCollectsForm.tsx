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
import {
    CollectsInput,
    XtdCollectionTypes,
    XtdEntity,
    XtdObjectTypes,
    XtdRelationshipTypes,
    XtdRelCollects
} from "../../types";
import {LanguageRepresentationFieldDefaultValues} from "../LanguageRepresentationField";
import useAuthContext from "../../hooks/useAuthContext";

const useStyles = makeStyles(theme => ({
    heading: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
    },
}));

const sanitizeCollectsInput = (data: any): CollectsInput => {
    const input = cloneDeep(data);
    sanitizeRootInput(input);
    return input;
};

export interface XtdRelCollectsFormDefaultValues {
    id: string;
    versionId: string;
    versionDate: string;
    names: LanguageRepresentationFieldDefaultValues[];
    descriptions: LanguageRepresentationFieldDefaultValues[];
    relatingCollection: string;
    relatedThings: string[]
}

export interface XtdRelCollectsFormProps {
    title: string;
    entity?: XtdRelCollects;
    onSubmit: (input: CollectsInput) => void;
    onCancel: () => void;
}

const initialValues = (): XtdRelCollectsFormDefaultValues => ({
    id: '',
    versionId: '1',
    versionDate: dateTime().format('YYYY-MM-DD'),
    names: [{
        id: '',
        languageCode: 'de',
        value: '',
    }],
    descriptions: [],
    relatingCollection: '',
    relatedThings: ['', '', '']
});

const entityToDefaultValues = (entity: XtdRelCollects): XtdRelCollectsFormDefaultValues => {
    const { id, versionId, versionDate, names, descriptions, relatingCollection, relatedThings } = entity;
    return {
        id,
        versionId,
        versionDate,
        names,
        descriptions,
        relatingCollection: relatingCollection.id,
        relatedThings: relatedThings.nodes.map(x => x.id)
    };
}

export default function XtdRelCollectsForm<T extends XtdRelCollects>(props: XtdRelCollectsFormProps) {
    const classes = useStyles();
    const { title, entity, onSubmit, onCancel } = props;
    const { hasRole } = useAuthContext();
    const defaultValues = entity ? entityToDefaultValues(entity) : initialValues();
    const formMethods = useForm({ defaultValues });
    const { getValues, setValue, errors, handleSubmit, register } = formMethods;
    const relatingCollectionLabels = Object.values(XtdCollectionTypes);
    const relatedThingsLabels = [
        ...Object.values(XtdObjectTypes),
        ...Object.values(XtdCollectionTypes),
        ...Object.values(XtdRelationshipTypes),
    ];

    // compute which entities should not be shown in search view
    const currentValues = getValues({ nest: true })

    const excludedIds = [...currentValues.relatedThings];
    if (currentValues.id) excludedIds.push(currentValues.id);
    if (currentValues.relatingCollection) excludedIds.push(currentValues.relatingCollection);

    const handleValidSubmit = async (data: any) => {
        const input = sanitizeCollectsInput(data);
        onSubmit(input);
    };

    const relatingCollectionError = get(errors, 'relatingCollection');

    const onConceptSelect = (selection: XtdEntity | null) => {
        const newValue = selection ? selection.id : '';
        setValue('relatingCollection', newValue, true)
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
                        <input hidden name="relatingCollection" defaultValue={currentValues.relatingCollection} ref={register({ required: true })} />
                        <EntitySelectTextField
                            onConceptSelect={onConceptSelect}
                            initialEntity={entity?.relatingCollection}
                            labels={relatingCollectionLabels}
                            excludedIds={excludedIds}
                            label="Relating collection"
                            supportedFieldName="relatingCollection"
                            fullWidth
                            error={!!relatingCollectionError}
                            helperText={relatingCollectionError && 'This field is required.'}
                            variant={'filled'}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RelatedThingsMultiField
                            initialEntities={entity?.relatedThings.nodes}
                            labels={relatedThingsLabels}
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

XtdRelCollectsForm.defaultProps = {
    defaultValues: initialValues
};

