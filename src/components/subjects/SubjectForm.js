import React from 'react';
import PropTypes from 'prop-types';
import {FormContext, useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IdField from '../IdField';
import NamesField from '../NamesField';
import {useMutation} from '@apollo/client';
import DescriptionsField from '../DescriptionsField';
import gql from 'graphql-tag';
import {SUBJECTS_VIEW_QUERY} from './SubjectsView';

export const SUBJECT_FORM_ADD_MUTATION = gql`
    mutation SubjectForm(
        $id: ID!
        $versionId: String
        $versionDate: String
        $names: [XtdNameInput!]!
        $descriptions: [XtdDescriptionInput!]
    ) {
        addSubject(newSubject: {
            id: $id
            versionId: $versionId
            versionDate: $versionDate
            names: $names
            descriptions: $descriptions
        }) {
            id
        }
    }
`;

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '100%',
        },
    },
}));

export default function SubjectForm(props) {
    const classes = useStyles();
    const {defaultValues, onSubmit} = props;
    const [executeAdd] = useMutation(SUBJECT_FORM_ADD_MUTATION, {
        refetchQueries: [{query: SUBJECTS_VIEW_QUERY}],
        awaitRefetchQueries: true,
        onCompleted: data => {
            onSubmit(data)
        }
    });
    const formMethods = useForm({defaultValues});
    const {handleSubmit} = formMethods;
    const inputOptions = {
        variant: 'standard',
        margin: 'dense',
        size: 'small',
    };

    const handleAddSubject = (data, e) => {
                // quickfix
        data.names.forEach(x => x.languageCode = 'de');
        if (data.descriptions && data.descriptions.length) {
            data.descriptions.forEach(x => x.languageCode = 'de');
        }
        executeAdd({variables: data});
    };

    return (
        <FormContext {...formMethods}>
            <form className={classes.root} onSubmit={handleSubmit(handleAddSubject)} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <IdField
                            name="id"
                            label="Unique ID"
                            {...inputOptions}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <NamesField name="names" inputOptions={inputOptions}/>
                    </Grid>
                    <Grid item xs={12}>
                        <DescriptionsField name="descriptions" inputOptions={inputOptions}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </FormContext>
    );
}

SubjectForm.propTypes = {
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

SubjectForm.defaultProps = {
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
