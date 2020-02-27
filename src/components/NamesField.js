import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UniqueIdField from './UniqueIdField';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import {
    Add as AddIcon,
    ArrowDownward as ArrowDownWardIcon,
    ArrowUpward as ArrowUpwardIcon,
    Remove as RemoveIcon,
} from '@material-ui/icons';
import React from 'react';
import {useFieldArray, useFormContext} from 'react-hook-form';
import {makeStyles} from '@material-ui/core';
import PropertyBox from './PropertyBox';

const useStyles = makeStyles(theme => ({
    nameRow: {
        padding: theme.spacing(3),
    },
    nameRowActions: {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    },
}));

const defaultValues = () => ({
    uniqueId: '',
    languageCode: 'de',
    name: '',
});

export default function NamesField(props) {
    const {name, inputOptions} = props;
    const classes = useStyles();
    const {register, errors} = useFormContext();
    const {fields, remove, move, insert} = useFieldArray({name});

    const items = fields.map((item, index) => {
        const nameErrors = errors.names ? errors.names[index] : false;
        const uniqueIdName = `${name}[${index}].uniqueId`;
        const valueName = `${name}[${index}].name`;

        return (
            <Grid key={item.id} item xs={12}>
                <PropertyBox color="primary.main">
                    <Typography variant="overline" display="block" gutterBottom>
                        {`Name (${index + 1}/${fields.length})`}
                    </Typography>

                    <Grid key={item.id} container spacing={1}>
                        <Grid item xs={5}>
                            <UniqueIdField name={uniqueIdName} label="Unique ID" {...inputOptions}/>
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                name={valueName}
                                inputRef={register({required: true})}
                                label="Name" error={!!nameErrors} helperText={nameErrors && 'This field is required.'}
                                {...inputOptions}
                            />
                        </Grid>
                        <Grid className={classes.nameRowActions} item xs={2}>
                            <ButtonGroup variant="text" color="primary">
                                <IconButton onClick={() => insert(index + 1, defaultValues())}>
                                    <AddIcon/>
                                </IconButton>
                                <IconButton onClick={() => remove(index)} disabled={fields.length <= 1}>
                                    <RemoveIcon/>
                                </IconButton>
                                <IconButton onClick={() => move(index, index - 1)}
                                            disabled={index === 0}>
                                    <ArrowUpwardIcon/>
                                </IconButton>
                                <IconButton onClick={() => move(index, index + 1)}
                                            disabled={index === fields.length - 1}>
                                    <ArrowDownWardIcon/>
                                </IconButton>
                            </ButtonGroup>
                        </Grid>

                    </Grid>
                </PropertyBox>
            </Grid>
        );
    });

    return (
        <Grid container spacing={1}>
            {items}
        </Grid>
    )
}

NamesField.propTypes = {
    name: PropTypes.string.isRequired,
};
