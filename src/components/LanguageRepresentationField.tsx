import {Controller, useFormContext} from 'react-hook-form';
import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import IdField from './IdField';
import TextField, {TextFieldProps} from '@material-ui/core/TextField';
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
import get from "lodash.get";

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

interface LanguageRepresentationFieldProps {
    field: Record<string, any>;
    name: string;
    onInsert?: () => void;
    onMoveUp?: () => void;
    onMoveDown?: () => void;
    onRemove?: () => void;
}

export default function LanguageRepresentationField(props: LanguageRepresentationFieldProps & TextFieldProps) {
    const classes = useStyles(props);
    const {
        field,
        name,
        label,
        multiline,
        rows,
        error,
        onInsert,
        onMoveUp,
        onMoveDown,
        onRemove,
        ...otherProps
    } = props;
    const {control, formState, getValues} = useFormContext();
    const [isPersistent, setIsPersistent] = useState(false);
    const idName = `${name}.id`;
    const languageName = `${name}.languageCode`;
    const valueName = `${name}.value`;
    const id = get(getValues({ nest: true }), idName);

    useEffect(() => {
        if (!formState.dirty && id) {
            setIsPersistent(true);
        }
    }, [formState, id]);

    return (
        <Grid container item spacing={2} className={classes.row}>

            <Grid container item xs={11} spacing={1}>
                <Grid item xs={8}>
                    <IdField
                        name={idName}
                        label="Unique ID"
                        disabled={isPersistent}
                        {...otherProps}
                    />
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
                                required={true}
                                disabled={isPersistent}
                                {...otherProps}
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
                                required={true}
                                rows={rows}
                                helperText={error && 'This field is required.'}
                                {...otherProps}
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
