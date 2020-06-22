import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppDrawer from "../AppDrawer/AppDrawer";
import BoardingView from "../BoardingView/BoardingView";
import {AppBar} from "../AppBar/AppBar";
import Router from "./Router";
import useAuthContext from "../../hooks/useAuthContext";
import {useRouteMatch} from "react-router-dom";
import {Toolbar} from "@material-ui/core";

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
    const classes = useStyles({ graphiql: !!match });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {token, login} = useAuthContext();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar toggleDrawer={() => setDrawerOpen(!drawerOpen)}/>
            <AppDrawer
                variant="permanent"
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            />
            <main className={classes.content}>
                <Toolbar/>
                {
                    !token
                    ? <BoardingView onLogin={login} onSignup={login}/>
                    : <Router />
                }
            </main>
        </div>
    );
}
