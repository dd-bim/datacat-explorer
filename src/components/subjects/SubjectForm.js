import React from 'react';
import {sanitizeRootInput} from '../../utils';
import {FormContext, useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RootFormset from '../form/RootFormset';
import PropTypes from 'prop-types';
import dateTime from '../../dateTime';

const inputOptions = {
    variant: 'filled',
};

export default function SubjectForm(props) {
    const { defaultValues, onSubmit, onCancel } = props;
    const formMethods = useForm({ defaultValues });
    const { handleSubmit } = formMethods;

    const handleValidSubmit = async (data, e) => {
        sanitizeRootInput(data);
        onSubmit(data, e);
    };

    return (
        <FormContext {...formMethods}>
            <form onSubmit={handleSubmit(handleValidSubmit)} noValidate autoComplete="off">
                <RootFormset inputOptions={inputOptions} />

                <ButtonGroup>
                    <Button type="button" variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </ButtonGroup>
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
        versionId: '1',
        versionDate: dateTime().format('YYYY-MM-DD'),
        names: [{
            id: '',
            languageCode: 'de',
            value: '',
        }],
        descriptions: []
    },
};

