import React from 'react';
import PropTypes from 'prop-types';
import {FormContext, useForm} from 'react-hook-form';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IdField from '../IdField';
import NamesField from '../NamesField';
import {useMutation} from '@apollo/client';
import {addDoc} from './queries';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '100%',
        },
    },
}));

export default function DocumentForm(props) {
    const classes = useStyles();
    const {defaultValues, onSubmit} = props;
    const [addDocument] = useMutation(addDoc, {refetchQueries: ['getDocuments']});
    const formMethods = useForm({defaultValues});
    const {handleSubmit} = formMethods;
    const inputOptions = {
        variant: 'filled',
        margin: 'dense',
        size: 'small',
    };

    const handleAddDocument = async (data, e) => {
        // quickfix
        data.names.forEach(x => {
            x.languageCode = 'de';
        });
        const result = await addDocument({variables: data});
        onSubmit(result);
    };

    return (
        <FormContext {...formMethods}>
            <form className={classes.root} onSubmit={handleSubmit(handleAddDocument)} noValidate autoComplete="off">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <IdField
                            name="id"
                            label="Unique ID"
                            {...inputOptions}
                        />
                    </Grid>
                    <NamesField name="names" inputOptions={inputOptions}/>
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

DocumentForm.propTypes = {
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

DocumentForm.defaultProps = {
    defaultValues: {
        id: '',
        names: [{
            id: '',
            languageCode: 'de',
            name: '',
        }],
    },
};
