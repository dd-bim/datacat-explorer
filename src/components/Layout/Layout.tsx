import React, {useContext, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppDrawer from "./AppDrawer";
import {AuthContext} from "../../AuthContext";
import BoardingView from "./BoardingView";
import {AppBar} from "../AppBar/AppBar";
import Content from "./Content";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    root: {
        'display': 'flex',
        'min-height': '100vh'
    },
    appBar: {
        'z-index': theme.zIndex.drawer + 1,
    },
    tools: {
        'display': 'flex',
        'flex-direction': 'row'
    },
    avatar: {
        'margin-right': theme.spacing(2)
    },
    logo: {
        'max-width': '150px'
    },
    menuButton: {
        'margin-right': theme.spacing(2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    title: {
        'flex-grow': 1,
        'margin-left': theme.spacing(1),
    },
    version: {
        display: 'inline'
    }
}));

export default function Layout() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const {session, login} = useContext(AuthContext);

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
                    !session
                    ? <BoardingView onLogin={login} onSignup={login}/>
                    : <Content />
                }
            </main>
        </React.Fragment>
    );
}
