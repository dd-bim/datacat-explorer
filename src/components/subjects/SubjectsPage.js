import React from 'react';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core/styles';
import SubjectsView from './SubjectsView';
// import AddSubjectButton from './AddSubjectButton';

const useStyles = makeStyles(theme => ({
    actions: {
        display: 'flex',
        'justify-content': 'end',
    },
}));

export default function SubjectsPage() {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid className={classes.actions} item xs={12}>
                {/*<ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">*/}
                    {/*<AddSubjectButton/>*/}
                {/*</ButtonGroup>*/}
            </Grid>
            <Grid item xs={12}>
                <SubjectsView/>
            </Grid>
        </Grid>
    );
}
