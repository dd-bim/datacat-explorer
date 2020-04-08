import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SubjectsView from './SubjectsView';
import SubjectUpdateView from './SubjectUpdateView';
import SubjectCreateView from './SubjectCreateView';


export default function SubjectRoutes() {
    const { path } = useRouteMatch();
    const history = useHistory();
    const handleOnCancel = () => history.push(path);
    const handleOnSubmit = () => history.push(path);

    return (
        <Grid container spacing={1}>
            <Switch>
                <Route exact path={path}>
                    <Grid item xs={12}>
                        <SubjectsView />
                    </Grid>
                </Route>
                <Route path={`${path}/new`}>
                    <Grid item xs={12}>
                        <SubjectCreateView
                          onSubmit={handleOnSubmit}
                          onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
                <Route path={`${path}/:id`}>
                    <Grid item xs={12}>
                        <SubjectUpdateView
                          queryKey="subject"
                          onSubmit={handleOnSubmit}
                          onCancel={handleOnCancel}
                        />
                    </Grid>
                </Route>
            </Switch>
        </Grid>
    )
}
