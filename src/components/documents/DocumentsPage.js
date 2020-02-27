import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core/styles';
import DocumentList from './DocumentList';
import AddButton from '../AddButton';

const useStyles = makeStyles(theme => ({
    actions: {
        display: 'flex',
        'justify-content': 'end',
    },
}));

export default function DocumentsPage() {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid className={classes.actions} item xs={12}>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <AddButton label="Add document" newLocation="/documents/new">
                        Add document
                    </AddButton>
                </ButtonGroup>
            </Grid>
            <Grid item xs={12}>
                <DocumentList/>
            </Grid>
        </Grid>
    );
}
