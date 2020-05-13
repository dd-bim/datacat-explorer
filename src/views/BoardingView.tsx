import React from "react";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../components/form/LoginForm";
import Typography from "@material-ui/core/Typography";
import SignupForm from "../components/form/SignupForm";
import {UserSession} from "../AuthContext";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface BoardingViewProps {
    onLogin: (session: UserSession) => void;
    onSignup: (session: UserSession) => void;
}

const useStyles = makeStyles(theme => ({
    login: {
        "border-right": `3px solid ${theme.palette.primary.main}`
    }
}));

export default function BoardingView(props: BoardingViewProps) {
    const classes = useStyles();
    const { onLogin, onSignup } = props;
    return (
        <Grid container spacing={4}>
           <Grid className={classes.login} item xs={6}>
               <Typography variant="subtitle1">Login</Typography>
               <LoginForm onLogin={onLogin}/>
           </Grid>
           <Grid item xs={6}>
               <Typography variant="subtitle1">Signup</Typography>
               <SignupForm onSignup={onSignup} />
           </Grid>
        </Grid>
    )
}
