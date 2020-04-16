import React, {useState} from 'react';
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

const drawerWidth = 400;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    tools: {
        display: 'flex',
        justifyContent: 'space-between',
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
        'display': 'inline',
        'margin-right': theme.spacing(1),
    },
    version: {
        display: 'inline'
    }
}));

export default function Layout() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.tools}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        aria-label="menu"
                    >
                        <Menu/>
                    </IconButton>
                    <span>
                        <Typography className={classes.title} variant="h6" component="h1">{process.env.REACT_APP_TITLE}</Typography>
                        <Typography className={classes.version} variant="subtitle1" component="span">{process.env.REACT_APP_VERSION}</Typography>
                    </span>
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
                    <Route path="/documents">
                        <ExternalDocumentRoutes />
                    </Route>
                    <Route path="/objects/actors">
                        <ActorRoutes />
                    </Route>
                    <Route path="/objects/activities">
                        <ActivityRoutes />
                    </Route>
                    <Route path="/objects/subjects">
                        <SubjectRoutes />
                    </Route>
                    <Route path="/objects/units">
                        <UnitRoutes />
                    </Route>
                    <Route path="/objects/properties">
                        <PropertyRoutes />
                    </Route>
                    <Route path="/relationships/groups">
                        <RelGroupsRoutes />
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
