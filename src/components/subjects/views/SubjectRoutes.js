import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddButton from '../../AddButton';
import {makeStyles} from '@material-ui/core/styles';
import SubjectsView from './SubjectsView';
import SubjectUpdateView from './SubjectUpdateView';
import SubjectCreateView from './SubjectCreateView';

const useStyles = makeStyles(theme => ({
    actions: {
        display: 'flex',
        'justify-content': 'end',
    },
}));


export default function SubjectRoutes() {
    const classes = useStyles();
    const { path } = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid className={classes.actions} item xs={12}>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                            <AddButton to={`${path}/new`}>
                                Add subject
                            </AddButton>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <SubjectsView/>
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <SubjectCreateView onSubmit={handleOnSubmit} onCancel={handleOnCancel} />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <SubjectUpdateView onSubmit={handleOnSubmit} onCancel={handleOnCancel} />
                    </Grid>
                </Route>
            </Switch>
        </Grid>
    )
}
