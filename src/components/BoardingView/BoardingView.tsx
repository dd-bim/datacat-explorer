import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import LoginForm from "./LoginForm";
import Typography from "@material-ui/core/Typography";
import SignupForm from "./SignupForm";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {JwtToken} from "../../AuthProvider";

interface BoardingViewProps {
    onLogin: (token: JwtToken) => void
}

const useStyles = makeStyles(theme => ({
    login: {
        "border-right": `3px solid ${theme.palette.primary.main}`
    }
}));

export default function BoardingView(props: BoardingViewProps) {
    const classes = useStyles();
    const {onLogin} = props;
    const [signupSent, setSignupSent] = useState(false);

    const handleSignup = () => setSignupSent(true);

    return (
        <Grid container spacing={4}>
            <Grid className={classes.login} item xs={6}>
                <Typography variant="h2">Login</Typography>
                <Typography variant="body1">
                    Welcome back. Please use the credentials you have used during signup.
                    Be aware that this is a preview installation.
                    The database will be reset with each new version until the API is deemed stable.
                </Typography>
                <LoginForm onLogin={onLogin}/>
            </Grid>
            {signupSent ? (
                <Grid item xs={6}>
                    <Typography variant="h2">Signup</Typography>
                    <Typography variant="body1">
                        Your signup request has been received. Please check your email mailbox to confirm your account.
                    </Typography>
                </Grid>
            ) : (
                <Grid item xs={6}>
                <Typography variant="h2">Signup</Typography>
                <Typography variant="body1">
                    Welcome to datacat! Feel free to sign up for read-access.
                    The admin will provide you with write-access on request.
                </Typography>
                <SignupForm onSignup={handleSignup}/>
            </Grid>
            )}
        </Grid>
    )
}
