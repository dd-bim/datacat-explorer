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
import {DocumentsInput, XtdEntity, XtdObjectTypes, XtdRelDocuments, XtdTypes} from "../../types";
import {LanguageRepresentationFieldDefaultValues} from "../LanguageRepresentationField";
import useAuthContext from "../../hooks/useAuthContext";

const useStyles = makeStyles(theme => ({
    heading: {
        'margin-top': theme.spacing(1),
        'margin-bottom': theme.spacing(2),
    },
}));

const sanitizeDocumentsInput = (data: any): DocumentsInput => {
    const input = cloneDeep(data);
    sanitizeRootInput(input);
    return input;
};

export interface XtdRelDocumentsFormDefaultValues {
    id: string;
    versionId: string;
    versionDate: string;
    names: LanguageRepresentationFieldDefaultValues[];
    descriptions: LanguageRepresentationFieldDefaultValues[];
    relatingDocument: string;
    relatedObjects: string[]
}

export interface XtdRelDocumentsFormProps {
    title: string;
    entity?: XtdRelDocuments;
    onSubmit: (input: DocumentsInput) => void;
    onCancel: () => void;
}

const initialValues = (): XtdRelDocumentsFormDefaultValues => ({
    id: '',
    versionId: '1',
    versionDate: dateTime().format('YYYY-MM-DD'),
    names: [{
        id: '',
        languageCode: 'de',
        value: '',
    }],
    descriptions: [],
    relatingDocument: '',
    relatedObjects: ['', '', '']
});

const entityToDefaultValues = (entity: XtdRelDocuments): XtdRelDocumentsFormDefaultValues => {
    const { id, versionId, versionDate, names, descriptions, relatingDocument, relatedObjects } = entity;
    return {
        id,
        versionId,
        versionDate,
        names,
        descriptions,
        relatingDocument: relatingDocument.id,
        relatedObjects: relatedObjects.nodes.map(x => x.id)
    };
}

export default function XtdRelDocumentsForm(props: XtdRelDocumentsFormProps) {
    const classes = useStyles();
    const { title, entity, onSubmit, onCancel } = props;
    const { hasRole } = useAuthContext();
    const defaultValues = entity ? entityToDefaultValues(entity) : initialValues();
    const formMethods = useForm({ defaultValues });
    const { getValues, setValue, errors, handleSubmit, register } = formMethods;
    const relatingDocumentLabels = [XtdTypes.XtdExternalDocument];
    const relatedObjectsLabels = Object.values(XtdObjectTypes);

    // compute which entities should not be shown in search view
    const currentValues = getValues({ nest: true });

    console.log(currentValues);

    const excludedIds = [...currentValues.relatedObjects];
    if (currentValues.id) excludedIds.push(currentValues.id);
    if (currentValues.relatingDocument) excludedIds.push(currentValues.relatingDocument);

    const handleValidSubmit = async (data: any) => {
        const input = sanitizeDocumentsInput(data);
        onSubmit(input);
    };

    const relatingDocumentError = get(errors, 'relatingDocument');

    const onConceptSelect = (selection: XtdEntity | null) => {
        const newValue = selection ? selection.id : '';
        setValue('relatingDocument', newValue, true)
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
                        <input hidden name="relatingDocument" defaultValue={currentValues.relatingDocument} ref={register({ required: true })} />
                        <EntitySelectTextField
                            onConceptSelect={onConceptSelect}
                            initialEntity={entity?.relatingDocument}
                            labels={relatingDocumentLabels}
                            excludedIds={excludedIds}
                            label="Relating collection"
                            supportedFieldName="relatingDocument"
                            fullWidth
                            error={!!relatingDocumentError}
                            helperText={relatingDocumentError && 'This field is required.'}
                            variant={'filled'}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RelatedThingsMultiField
                            initialEntities={entity?.relatedObjects.nodes}
                            labels={relatedObjectsLabels}
                            excludedIds={excludedIds}
                            name="relatedObjects"
                            label="Related objects"
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

XtdRelDocumentsForm.defaultProps = {
    defaultValues: initialValues
};

