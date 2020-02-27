import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import api from './api';


function CollectionForm(props) {
    const {onSubmit} = props;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleOnNameChange = e => {
        const {value} = e.target;
        setName(value);
    };

    const handleOnDescriptionChange = e => {
        const {value} = e.target;
        setDescription(value);
    };

    const handleOnSubmit = async e => {
        e.preventDefault();
        await api.createCollection({name, description});
        setName('');
        setDescription('');
        onSubmit();
    };

    return (
        <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField label="Name" value={name} onChange={handleOnNameChange} variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField label="Description" value={description} onChange={handleOnDescriptionChange} variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" disabled={!name}>Save</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default CollectionForm;
