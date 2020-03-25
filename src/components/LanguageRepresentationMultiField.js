import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Add as AddIcon} from '@material-ui/icons';
import React from 'react';
import {useFieldArray, useFormContext} from 'react-hook-form';
import get from 'lodash.get';
import LanguageRepresentationField from './LanguageRepresentationField';
import useTheme from '@material-ui/core/styles/useTheme';
import Button from '@material-ui/core/Button';

const defaultValues = () => ({
    id: '',
    languageCode: 'de',
    value: '',
});

export default function LanguageRepresentationMultiField(props) {
    const theme = useTheme();
    const {
        name,
        label,
        multiline = false,
        rows = 1,
        highlightColor = theme.palette.primary.main,
        inputOptions
    } = props;
    const keyName = '_fieldId';
    const {errors} = useFormContext();
    const fieldArrayProps = useFieldArray({keyName: keyName, name});
    const {fields, append, insert, remove, move} = fieldArrayProps;

    let items;
    if (!fields.length) {
        items = (
            <Button startIcon={<AddIcon/>} color={'primary'} onClick={() => append(defaultValues())}>
                Add first
            </Button>
        );
    } else {
        items = fields.map((field, index) => {
            const accessor = `${name}[${index}]`;
            const error = get(errors, accessor);
            const onInsert = () => insert(index + 1, defaultValues());
            const onRemove = fields.length > 1 ? (() => remove(index)) : undefined;
            const onMoveUp = index > 0 ? (() => move(index, index - 1)) : undefined;
            const onMoveDown = index < (fields.length - 1) ? (() => move(index, index + 1)) : undefined;

            return (
                <LanguageRepresentationField
                    key={field[keyName]}
                    field={field}
                    name={accessor}
                    label={`${label} (${index + 1}/${fields.length})`}
                    error={error}
                    onInsert={onInsert}
                    onRemove={onRemove}
                    onMoveUp={onMoveUp}
                    onMoveDown={onMoveDown}
                    multiline={multiline} rows={rows}
                    highlightColor={highlightColor}
                    inputOptions={inputOptions}
                />
            );
        });
    }

    return (
        <Grid container item spacing={1}>
            {items}
        </Grid>
    )
}

LanguageRepresentationMultiField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    highlightColor: PropTypes.string,
    inputOptions: PropTypes.object
};
