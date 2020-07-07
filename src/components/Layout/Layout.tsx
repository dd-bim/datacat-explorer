import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppDrawer from "../AppDrawer/AppDrawer";
import BoardingView from "../BoardingView/BoardingView";
import {AppBar} from "../AppBar/AppBar";
import Router from "./Router";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import {Toolbar} from "@material-ui/core";
import ViewWrapper from "../View/ViewWrapper";
import ConfirmationView from "../BoardingView/ConfirmationView";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

export default function Layout() {
    const match = useRouteMatch("/graphiql");
    const classes = useStyles({graphiql: !!match});
    const {token, login} = useAuthContext();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar/>
            {token && (
                <AppDrawer
                    variant="permanent"
                    className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                />
            )}
            <main className={classes.content}>
                <Toolbar/>
                {!token ? (
                    <ViewWrapper>
                        <Switch>
                            <Route path="/confirm">
                                <ConfirmationView/>
                            </Route>
                            <Route>
                                <BoardingView onLogin={login}/>
                            </Route>
                        </Switch>
                    </ViewWrapper>
                ) : (
                    <Router/>
                )}
            </main>
        </div>
    );
}
