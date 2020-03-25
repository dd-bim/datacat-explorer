import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import get from 'lodash.get';
import TextField from '@material-ui/core/TextField';

const languages = [
    {value: 'de', label: 'German'},
    {value: 'en', label: 'English'},
];

export default function LanguageField(props) {
    const {name, label, helperText, inputOptions} = props;
    const {errors, getValues} = useFormContext();
    const error = get(errors, name);
    const options = languages.map(option => (
        <MenuItem key={option.value} value={option.value}>
            {option.label}
        </MenuItem>
    ));

    return (
        <Controller
            name={name}
            rules={{required: true}}
            as={
                <TextField select label={label} helperText={helperText} {...inputOptions}>
                    {options}
                </TextField>
            }
        />
    );
}

LanguageField.propTypes = {
    name: PropTypes.string.isRequired
};
