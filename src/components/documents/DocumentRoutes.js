import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import DocumentForm from './DocumentForm';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddButton from '../AddButton';
import DocumentList from './DocumentList';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    actions: {
        display: 'flex',
        'justify-content': 'end',
    },
}));

export default function DocumentRoutes() {
    const classes = useStyles();
    const { path } = useRouteMatch();
    const history = useHistory();
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                        <Grid className={classes.actions} item xs={12}>
                            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                <AddButton to={`${path}/new`}>
                                    Add document
                                </AddButton>
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={12}>
                            <DocumentList/>
                        </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <DocumentForm onSubmit={handleOnSubmit} />
                    </Grid>
                </Route>
            </Switch>
        </Grid>
    )
}
