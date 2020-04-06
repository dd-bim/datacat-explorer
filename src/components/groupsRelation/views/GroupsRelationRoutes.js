import React from 'react';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import GroupsRelationsView from './GroupsRelationsView';
import GroupsRelationCreateView from './GroupsRelationCreateView';
import GroupsRelationUpdateView from './GroupsRelationUpdateView';

export default function GroupsRelationRoutes() {
  const {path} = useRouteMatch();
  const history = useHistory();
  const handleOnCancel = () => history.push(path);
  const handleOnSubmit = () => history.push(path);

  return (
    <Switch>
      <Route exact path={path}>
        <GroupsRelationsView/>
      </Route>
      <Route path={`${path}/new`}>
        <GroupsRelationCreateView
          onSubmit={handleOnSubmit}
          onCancel={handleOnCancel}
        />
      </Route>
      <Route path={`${path}/:id`}>
        <GroupsRelationUpdateView
          onSubmit={handleOnSubmit}
          onCancel={handleOnCancel}
        />
      </Route>
    </Switch>
  );
}
