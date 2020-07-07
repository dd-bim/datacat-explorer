import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles, Theme} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Avatar from "@material-ui/core/Avatar";
import MaterialUIAppBar from "@material-ui/core/AppBar";
import React from "react";
import {QuickSearchWidget} from "./QuickSearchWidget";
import useAuthContext, {useWriteAccess} from "../../hooks/useAuthContext";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import {Tooltip} from "@material-ui/core";
import {useProfile} from "../../ProfileProvider";

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
        'flex-grow': 1
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

export function AppBar() {
    const classes = useStyles();
    const profile = useProfile();
    const { logout } = useAuthContext();
    const verifiedUser = useWriteAccess();
    let restrictedContent = [];

    if (profile) {
        restrictedContent.push(
            <QuickSearchWidget key="search-input" className={classes.searchInput} />,
            <Button key="logout-button"
                className={classes.logoutButton}
                color="inherit"
                aria-label="logout"
                startIcon={verifiedUser ? (
                    <Tooltip title="Verified user">
                        <VerifiedUserIcon/>
                    </Tooltip>
                ): (
                    <Tooltip title="Unverified user (read-only)">
                        <ErrorOutlineIcon/>
                    </Tooltip>
                )}
                endIcon={<ExitToAppIcon/>}
                onClick={() => logout()}
            >
                {profile.username}
            </Button>
        );
    }

    return (
        <MaterialUIAppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Avatar
                    variant="rounded"
                    src="/logo-building-smart-sm.svg"
                    alt="buidlingSMART Logo"
                />
                    <Typography
                        className={classes.title}
                        variant="h5"
                        component="h1"
                    >
                        {process.env.REACT_APP_TITLE}
                    </Typography>
                {restrictedContent}
            </Toolbar>
        </MaterialUIAppBar>
    );
}
