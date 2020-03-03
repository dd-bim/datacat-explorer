import PropTypes from 'prop-types';
import get from 'lodash.get';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IdField from './IdField';
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
    descriptionRowActions: {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
    },
}));

const defaultValues = () => ({
    id: '',
    languageCode: 'de',
    description: '',
});

export default function DescriptionsField(props) {
    const {name, inputOptions} = props;
    const classes = useStyles();
    const {register, errors, watch} = useFormContext();
    const {fields, remove, move, insert, append} = useFieldArray({name});

    const fieldErrors = get(errors, name);

    console.log(watch('descriptions'));

    let items;
    if (!fields.length) {
        items = (
            <Grid item xs={12}>
                <PropertyBox>
                    <Typography variant="overline" display="block" gutterBottom>
                        {`Description`}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            <Typography>No description provided.</Typography>
                        </Grid>
                        <Grid className={classes.descriptionRowActions} item xs={2}>
                            <ButtonGroup variant="text" color="primary">
                                <IconButton onClick={() => append(defaultValues())}>
                                    <AddIcon/>
                                </IconButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </PropertyBox>
            </Grid>
        );
    } else {
        items = fields.map((item, index) => {
            const error = fieldErrors ? fieldErrors[index] : false;
            const idFieldName = `${name}[${index}].id`;
            const descriptionFieldName = `${name}[${index}].description`;
            return (
                <Grid key={item.id} item xs={12}>
                    <PropertyBox>
                        <Typography variant="overline" display="block" gutterBottom>
                            {`Description (${index + 1}/${fields.length})`}
                        </Typography>

                        <Grid container spacing={1}>
                            <Grid item xs={5}>
                                <IdField name={idFieldName} label="Unique ID" {...inputOptions}/>
                            </Grid>
                            <Grid item xs={5}>
                                <TextField
                                    name={descriptionFieldName}
                                    inputRef={register({required: true})}
                                    label="Description" error={!!error}
                                    helperText={error && 'This field is required.'}
                                    {...inputOptions}
                                />
                            </Grid>
                            <Grid className={classes.descriptionRowActions} item xs={2}>
                                <ButtonGroup variant="text" color="primary">
                                    <IconButton onClick={() => insert(index + 1, defaultValues())}>
                                        <AddIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => remove(index)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => move(index, index - 1)} disabled={index === 0}>
                                        <ArrowUpwardIcon/>
                                    </IconButton>
                                    <IconButton onClick={() => move(index, index + 1)} disabled={index === fields.length - 1}>
                                        <ArrowDownWardIcon/>
                                    </IconButton>
                                </ButtonGroup>
                            </Grid>

                        </Grid>
                    </PropertyBox>
                </Grid>
            );
        });
    }

    return (
        <Grid container spacing={1}>
            {items}
        </Grid>
    );
}

DescriptionsField.propTypes = {
    name: PropTypes.string.isRequired,
};
