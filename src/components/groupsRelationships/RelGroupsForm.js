import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FormContext, useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IdField from '../IdField';
import NamesField from '../NamesField';
import {gql, useMutation} from '@apollo/client';
import {REL_GROUPS_VIEW_QUERY} from './RelGroupsView';
import SubjectSelect from '../subjects/SubjectSelect';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export const REL_GROUPS_FORM_ADD_MUTATION = gql`
    mutation RelGroupsForm(
        $id: ID!
        $versionId: String
        $versionDate: String
        $names: [TextInput!]!
        $descriptions: [TextInput!]
        $relatingObject: ID!
        $relatedObjects: [ID!]!
    ) {
        createGroupsRelation(
            relatingObject: $relatingObject
            relatedObjects: $relatedObjects
            relation: {
                id: $id
                versionId: $versionId
                versionDate: $versionDate
                names: $names
                descriptions: $descriptions
            }
        ) {
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

export default function RelGroupsForm(props) {
    const classes = useStyles();
    const {defaultValues, onSubmit} = props;
    const [relatingObject, setRelatingObject] = useState(null);
    const [relatedObjects, setRelatedObjects] = useState([]);
    const [executeAdd] = useMutation(REL_GROUPS_FORM_ADD_MUTATION, {
        refetchQueries: [{query: REL_GROUPS_VIEW_QUERY}],
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

    const handleAddRelGroups = (data, e) => {
                // quickfix
        data.names.forEach(x => x.languageCode = 'de');
        if (data.descriptions && data.descriptions.length) {
            data.descriptions.forEach(x => x.languageCode = 'de');
        }
        executeAdd({variables: {
            relatingObject: relatingObject.id,
            relatedObjects: relatedObjects.map(x => x.id),
            ...data
        }});
    };

    const handleSelectRelatedObjects = item => {
        setRelatedObjects([...relatedObjects, item]);
    };

    const handleUnselectRelatedObject = item => {
        const index = relatedObjects.findIndex(x => x.id === item.id);
        relatedObjects.splice(index, 1);
        setRelatedObjects([...relatedObjects]);
    };

    return (
        <FormContext {...formMethods}>
            <form className={classes.root} onSubmit={handleSubmit(handleAddRelGroups)} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader title={'General'} />
                            <CardContent>
                                <IdField
                                    name="id"
                                    label="Unique ID"
                                    {...inputOptions}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <NamesField name="names" inputOptions={inputOptions}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <SubjectSelect
                            title={`Relating objects (${relatingObject ? 1 : 0} / 1)`}
                            multiple={false}
                            selected={relatingObject}
                            onSelect={item => setRelatingObject(item)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SubjectSelect
                            title={`Related objects (${relatedObjects.length})`}
                            multiple={true}
                            selected={relatedObjects}
                            onSelect={handleSelectRelatedObjects}
                            onUnselect={handleUnselectRelatedObject}
                        />
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

RelGroupsForm.propTypes = {
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

RelGroupsForm.defaultProps = {
    defaultValues: {
        id: '',
        versionId: '',
        versionDate: '',
        names: [{
            id: '',
            languageCode: 'de',
            name: '',
        }],
        descriptions: [],
        relatingObject: null,
        relatedObjects: [],
    },
};
