import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import React from "react";
import ViewWrapper from "./ViewWrapper";

type ViewSwitchProps = {
    listView?: React.ReactNode
    createView?: React.ReactNode
    updateView?: React.ReactNode
}

export const ViewContext = React.createContext({
    path: '/',
    createPath: '/new',
    onCompleted() {},
    onCancel() {}
});

export default function ViewSwitch(props: ViewSwitchProps) {
    const { listView, createView, updateView } = props;
    const {path} = useRouteMatch();
    const history = useHistory();

    return (
        <ViewContext.Provider
            value={{
                path,
                createPath: `${path}/new`,
                onCompleted: () => history.push(path),
                onCancel: () => history.push(path)
            }}
        >
            <ViewWrapper>
                <Switch>
                    {listView && (
                        <Route exact path={path}>
                            {listView}
                        </Route>
                    )}
                    {createView && (
                        <Route exact path={`${path}/new`}>
                            {createView}
                        </Route>
                    )}
                    {updateView && (
                        <Route path={`${path}/:id`}>
                            {updateView}
                        </Route>
                    )}
                </Switch>
            </ViewWrapper>
        </ViewContext.Provider>
    );
}
