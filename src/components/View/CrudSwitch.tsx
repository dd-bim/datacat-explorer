import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import React from "react";
import ViewWrapper from "./ViewWrapper";

type ViewSwitchProps = {
    read?: React.ReactNode
    create?: React.ReactNode
    update?: React.ReactNode
}

export const ViewContext = React.createContext({
    path: '/',
    createPath: '/new',
    onCompleted() {},
    onCancel() {}
});

export default function CrudSwitch(props: ViewSwitchProps) {
    const { read, create, update } = props;
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
                    {read && (
                        <Route exact path={path}>
                            {read}
                        </Route>
                    )}
                    {create && (
                        <Route exact path={`${path}/new`}>
                            {create}
                        </Route>
                    )}
                    {update && (
                        <Route path={`${path}/:id`}>
                            {update}
                        </Route>
                    )}
                </Switch>
            </ViewWrapper>
        </ViewContext.Provider>
    );
}
