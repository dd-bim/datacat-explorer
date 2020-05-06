import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Menu} from '@material-ui/icons';
import {Typography} from '@material-ui/core';
import AppDrawer from './AppDrawer';
import {Route, Switch} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import ExternalDocumentRoutes from "../../routes/ExternalDocumentRoutes";
import SubjectRoutes from "../../routes/SubjectRoutes";
import ActorRoutes from "../../routes/ActorRoutes";
import RelGroupsRoutes from "../../routes/RelGroupsRoutes";
import ActivityRoutes from "../../routes/ActivityRoutes";
import UnitRoutes from "../../routes/UnitRoutes";
import PropertyRoutes from "../../routes/PropertyRoutes";
import RelAssociatesRoutes from "../../routes/RelAssociatesRoutes";
import SearchView from "../../views/SearchView";
import Avatar from "@material-ui/core/Avatar";
import {Alert} from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import RelComposesRoutes from "../../routes/RelComposesRoutes";
import RelSpecializesRoutes from "../../routes/RelSpecializesRoutes";
import RelActsUponRoutes from "../../routes/RelActsUponRoutes";

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    root: {
        'display': 'flex',
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
    const [demoWarning, setDemoWarning] = useState(false);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setDemoWarning(false);
    };

    useEffect(() => {
        setTimeout(() => setDemoWarning(true), 3000);
    }, [])

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Snackbar open={demoWarning} autoHideDuration={6000}>
                <Alert onClose={handleClose} severity="error">
                    This is a demo installation. All changes made will be lost after restarting the server application.
                </Alert>
            </Snackbar>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        aria-label="menu"
                    >
                        <Menu/>
                    </IconButton>
                    <Typography
                        className={classes.title}
                        variant="h6"
                        component="h1"
                    >
                        {process.env.REACT_APP_TITLE} {process.env.REACT_APP_VERSION}
                    </Typography>
                    <Avatar
                        variant="rounded"
                        src="/logo-building-smart-sm.svg"
                        alt="buidlingSMART Logo"
                    />
                </Toolbar>
            </AppBar>
            <AppDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                drawerWidth={drawerWidth}
            />
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path="/" exact>
                        <SearchView/>
                    </Route>
                    <Route path="/externalDocuments">
                        <ExternalDocumentRoutes/>
                    </Route>
                    <Route path="/objects/actors">
                        <ActorRoutes/>
                    </Route>
                    <Route path="/objects/activities">
                        <ActivityRoutes/>
                    </Route>
                    <Route path="/objects/subjects">
                        <SubjectRoutes/>
                    </Route>
                    <Route path="/objects/units">
                        <UnitRoutes/>
                    </Route>
                    <Route path="/objects/properties">
                        <PropertyRoutes/>
                    </Route>
                    <Route path="/relationships/associates">
                        <RelAssociatesRoutes/>
                    </Route>
                    <Route path="/relationships/composes">
                        <RelComposesRoutes/>
                    </Route>
                    <Route path="/relationships/groups">
                        <RelGroupsRoutes/>
                    </Route>
                    <Route path="/relationships/specializes">
                        <RelSpecializesRoutes/>
                    </Route>
                    <Route path="/relationships/actsUpon">
                        <RelActsUponRoutes/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
