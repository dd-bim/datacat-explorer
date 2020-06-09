import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import {Menu} from "@material-ui/icons";
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import MaterialUIAppBar from "@material-ui/core/AppBar";
import React from "react";
import {QuickSearchWidget} from "./QuickSearchWidget";
import useAuthContext from "../../hooks/useAuthContext";

interface AppBarProps {
    toggleDrawer: () => void
}

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        'z-index': theme.zIndex.drawer + 1,
    },
    toolbar: {
        ...theme.mixins.toolbar,
        '& > *': {
            'margin-right': theme.spacing(1)
        }
    },
    title: {
        'flex-grow': 1,
        'margin-left': theme.spacing(1),
    },
    searchInput: {
        'margin-left': theme.spacing(1)
    },
    logoutButton: {
        'margin-left': theme.spacing(1)
    },
    logo: {
        'max-width': '150px',
        'margin-left': theme.spacing(1)
    },
}));

export function AppBar(props: AppBarProps) {
    const classes = useStyles();
    const { toggleDrawer } = props;
    const { user, logout } = useAuthContext();
    let restrictedContent = [];

    if (user) {
        restrictedContent.push(
            <QuickSearchWidget key="search-input" className={classes.searchInput} />,
            <Button key="logout-button"
                className={classes.logoutButton}
                color="inherit"
                aria-label="logout"
                endIcon={<ExitToAppIcon/>}
                onClick={() => logout()}
            >
                {user.username}
            </Button>
        );
    }

    return (
        <MaterialUIAppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    onClick={toggleDrawer}
                    aria-label="menu"
                    disabled={!user}
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
                {restrictedContent}
                <Avatar
                    variant="rounded"
                    src="/logo-building-smart-sm.svg"
                    alt="buidlingSMART Logo"
                />
            </Toolbar>
        </MaterialUIAppBar>
    );
}
