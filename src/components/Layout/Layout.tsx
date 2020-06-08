import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppDrawer from "../AppDrawer/AppDrawer";
import BoardingView from "../BoardingView/BoardingView";
import {AppBar} from "../AppBar/AppBar";
import Router from "./Router";
import useAuthContext from "../../hooks/useAuthContext";
import {useRouteMatch} from "react-router-dom";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    content: {
        height: (props: {graphiql: boolean}) => props.graphiql ? `calc(100vh - 64px)` : undefined,
        padding: (props: {graphiql: boolean}) => props.graphiql ? 0 : theme.spacing(2),
    }
}));

export default function Layout() {
    const match = useRouteMatch("/graphiql");
    const classes = useStyles({ graphiql: !!match });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {token, login} = useAuthContext();

    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar toggleDrawer={() => setDrawerOpen(!drawerOpen)}/>
            <AppDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                drawerWidth={drawerWidth}
            />
            <main className={classes.content}>
                {
                    !token
                    ? <BoardingView onLogin={login} onSignup={login}/>
                    : <Router />
                }
            </main>
        </React.Fragment>
    );
}
