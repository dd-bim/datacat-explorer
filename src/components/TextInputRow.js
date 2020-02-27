import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const languages = [
    {value: 'DE', label: 'German'},
    {value: 'EN', label: 'English'},
];

export default function (props) {
    const {
        value,
        language = 'DE',
        onChange,
        label,
        multiline,
        rows = 3
    } = props;

    const handleLanguageChange = e => {
        onChange({value, language: e.target.value});
    };

    const handleValueChange = e => {
        onChange({language, value: e.target.value});
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <TextField
                    select
                    variant={'outlined'}
                    label={'Language'}
                    value={language}
                    required={true}
                    onChange={handleLanguageChange}
                    margin={'normal'}
                    fullWidth
                >
                    {languages.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={8}>
                <TextField
                    variant={'outlined'}
                    value={value}
                    label={label}
                    required={true}
                    onChange={handleValueChange}
                    multiline={multiline}
                    rows={rows}
                    margin={'normal'}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
}
