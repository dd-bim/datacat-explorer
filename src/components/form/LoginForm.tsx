import {useForm} from "react-hook-form";
import React from "react";
import {gql, useMutation} from "@apollo/client";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {UserSession} from "../../AuthProvider";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

interface LoginFormProps {
    onLogin: (user: UserSession) => void;
}

const loginMutation = gql`
    mutation login($credentials: LoginInput!) {
        login(input: $credentials) {
            token
            user {
                username
                firstName
                lastName
                email
                organization
            }
        }
    }
`

type Response = {
    login: UserSession
}

type LoginInput = {
    username: string;
    password: string;
}

type Variables = {
    credentials: LoginInput;
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
    const { onLogin } = props;
    const [login, { error }] = useMutation<Response, Variables>(loginMutation, {
        errorPolicy: 'all',
        onCompleted: ({ login: session }) => onLogin(session)
    });
    const { handleSubmit, register, errors } = useForm<LoginInput>();
    const onSubmit = async (input: LoginInput) => {
        await login({ variables: { credentials : input } });
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            {error && <Alert severity="error">{error.message}</Alert>}

            <TextField
                name="username"
                label="Username"
                required
                error={!!errors.username}
                helperText={errors.username ? errors.username.message : ''}
                inputRef={register({ required: true })}
                fullWidth
            />

            <TextField
                type="password"
                name="password"
                label="Password"
                required
                helperText={errors.password ? errors.password.message : ''}
                inputRef={register({ required: true })}
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
