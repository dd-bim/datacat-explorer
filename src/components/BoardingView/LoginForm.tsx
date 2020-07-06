import {useForm} from "react-hook-form";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {LoginInput, useLoginFormMutation, UserProfileFragment} from "../../generated/types";
import {JwtToken} from "../../AuthProvider";

interface LoginFormProps {
    onLogin: (token: JwtToken, profile: UserProfileFragment) => void;
}

const useStyles = makeStyles(theme => ({
    root: {
        "display": "flex",
        "flex-direction": "column",
        "& > *": {
            "margin-bottom": theme.spacing(2)
        }
    }
}));

export default function LoginForm(props: LoginFormProps) {
    const classes = useStyles();
    const {onLogin} = props;
    const [login, {error}] = useLoginFormMutation({
        onCompleted: ({token, profile}) => {
            onLogin(token, profile);
        }
    });
    const {handleSubmit, register, errors} = useForm<LoginInput>();
    const onSubmit = async (input: LoginInput) => {
        await login({variables: {credentials: input}}).catch(e => console.warn(e.message));
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            {error && <Alert severity="error">Authentication unsuccessful.</Alert>}

            <TextField
                name="username"
                label="Username"
                required
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ''}
                inputRef={register({required: true})}
                fullWidth
            />

            <TextField
                type="password"
                name="password"
                label="Password"
                required
                helperText={errors.password ? errors.password.message : ''}
                inputRef={register({required: true})}
                fullWidth
            />

            <Button
                color="primary"
                type="submit"
                variant="contained"
            >
                Login
            </Button>
        </form>
    );
};
