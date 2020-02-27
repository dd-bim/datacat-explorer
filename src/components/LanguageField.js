import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import get from 'lodash.get';
import Select from '@material-ui/core/Select';

const languages = [
    {value: 'de', label: 'German'},
    {value: 'en', label: 'English'},
];

export default function LanguageField(props) {
    const {name, inputOptions} = props;
    const {errors} = useFormContext();
    const error = get(errors, name);
    const options = languages.map(option => (
        <option key={option.value} value={option.value}>
            {option.label}
        </option>
    ));

    return (
        <Controller
            name={name}
            rules={{required: true}}
            as={
                <select
                >
                    {options}
                </select>
            }
        />
    );
}

LanguageField.propTypes = {
    name: PropTypes.string.isRequired
};
