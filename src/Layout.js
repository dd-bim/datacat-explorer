import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Menu} from '@material-ui/icons';
import {Typography} from '@material-ui/core';
import AppDrawer from './components/appDrawer/AppDrawer';
import {Route, Switch} from 'react-router-dom';
import DocumentRoutes from './components/documents/DocumentRoutes';
import SubjectRoutes from './components/subjects/SubjectRoutes';
import RelGroupsRoutes from './components/groupsRelationships/RelGroupsRoutes';
import IconButton from '@material-ui/core/IconButton';

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
        'margin-right': theme.spacing(1),
    },
    menuButton: {
        'margin-right': theme.spacing(2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
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
                    <Typography variant="h6" component="h1">{process.env.REACT_APP_TITLE}</Typography>
                </Toolbar>
            </AppBar>
            <AppDrawer
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                classNames={classes.drawer}
                drawerWidth={drawerWidth}
            />
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route path="/documents">
                        <DocumentRoutes/>
                    </Route>
                    <Route path="/objects/subjects">
                        <SubjectRoutes/>
                    </Route>
                    <Route path="/relationships/groups">
                        <RelGroupsRoutes/>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}
