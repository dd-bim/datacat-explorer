import React from 'react';
import TextInputRow from './TextInputRow';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {AddBox, IndeterminateCheckBox} from '@material-ui/icons';

export default function (props) {
    const {label, onChange, texts, multiline = false} = props;

    const handleOnTextAdd = (index) => {
        const newValues = [...texts];
        newValues.splice(index, 0, {value: '', language: 'DE'});
        onChange(newValues);
    };

    const handleOnTextDelete = (index) => {
        const newValues = [...texts];
        newValues.splice(index, 1);
        onChange(newValues);
    };

    const handleOnTextChange = (text, index) => {
        const newValues = [...texts];
        newValues[index] = text;
        onChange(newValues);
    };

    const rows = texts.map(({value, language}, index) => (
        <Grid container spacing={1} item xs={12} key={index}>
            <Grid item xs={10}>
                <TextInputRow
                    label={label}
                    value={value}
                    language={language}
                    onChange={newValue => handleOnTextChange(newValue, index)}
                    multiline={multiline}
                />
            </Grid>
            <Grid item xs={2}>
                <IconButton onClick={() => handleOnTextAdd(index + 1)}>
                    <AddBox/>
                </IconButton>
                <IconButton onClick={() => handleOnTextDelete(index)} disabled={texts.length < 2}>
                    <IndeterminateCheckBox/>
                </IconButton>
            </Grid>
        </Grid>
    ));

    return (
        <Grid container spacing={1}>
            {rows}
        </Grid>
    );
}
