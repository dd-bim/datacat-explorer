import {Controller, useFormContext} from 'react-hook-form';
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IdField from './IdField';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {languages} from '../lang';
import {
    Add as AddIcon,
    ArrowDownward as ArrowDownWardIcon,
    ArrowUpward as ArrowUpwardIcon,
    Remove as RemoveIcon,
} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    row: {
        'margin-bottom': theme.spacing(2),
    },
    actions: {
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
    },
}));

export default function LanguageRepresentationField(props) {
    const classes = useStyles(props);
    const {
        field,
        name,
        label,
        multiline,
        rows,
        inputOptions,
        error,
        onInsert,
        onMoveUp,
        onMoveDown,
        onRemove,
    } = props;
    const {control, watch, formState} = useFormContext();
    const [isPersistent, setIsPersistent] = useState(false);
    const idName = `${name}.id`;
    const languageName = `${name}.languageCode`;
    const valueName = `${name}.value`;

    useEffect(() => {
        if (!formState.dirty && watch(idName) !== '') {
            setIsPersistent(true);
        }
    }, [formState, watch, idName]);

    return (
        <Grid container item spacing={2} className={classes.row}>

            <Grid container item xs={11} spacing={1}>
                <Grid item xs={8}>
                    <IdField name={idName} label="Unique ID" disabled={isPersistent} {...inputOptions}/>
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        control={control}
                        name={languageName}
                        rules={{required: true}}
                        defaultValue={field.languageCode}
                        as={
                            <TextField
                                select
                                label="Language"
                                disabled={isPersistent}
                                {...inputOptions}
                            >
                                {languages.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        }
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name={valueName}
                        rules={{required: true}}
                        defaultValue={field.value}
                        as={
                            <TextField
                                label={label}
                                error={!!error}
                                multiline={multiline}
                                rows={rows}
                                helperText={error && 'This field is required.'}
                                {...inputOptions}
                            />
                        }
                    />
                </Grid>
            </Grid>

            <Grid className={classes.actions} item xs={'auto'}>
                <IconButton onClick={onInsert} size="small">
                    <AddIcon/>
                </IconButton>
                <IconButton onClick={onRemove} size="small" disabled={!onRemove}>
                    <RemoveIcon/>
                </IconButton>
                <IconButton onClick={onMoveUp} size="small" disabled={!onMoveUp}>
                    <ArrowUpwardIcon/>
                </IconButton>
                <IconButton onClick={onMoveDown} size="small" disabled={!onMoveDown}>
                    <ArrowDownWardIcon/>
                </IconButton>
            </Grid>

        </Grid>
    );
}

LanguageRepresentationField.propTypes = {
    highlightColor: PropTypes.string,
};
