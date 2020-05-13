import {useForm} from "react-hook-form";
import React from "react";
import {UserSession} from "../../AuthContext";
import {gql, useMutation} from "@apollo/client";
import makeStyles from "@material-ui/core/styles/makeStyles";

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
        "& label, input": {
            "margin-bottom": theme.spacing(1)
        }
    }
}));

export default function LoginForm(props: LoginFormProps) {
    const classes = useStyles();
    const { onLogin } = props;
    const [login, { error }] = useMutation<Response, Variables>(loginMutation, {
        errorPolicy: 'ignore',
        onCompleted: ({ login: session }) => onLogin(session)
    });
    const { handleSubmit, register, errors } = useForm<LoginInput>();
    const onSubmit = async (input: LoginInput) => {
        await login({ variables: { credentials : input } });
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            {error && error.message}

            <label htmlFor="username">Username</label>
            <input
                name="username"
                ref={register({ required: true })}
            />
            {errors.username && errors.username.message}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                ref={register({ required: true })}
            />
            {errors.password && errors.password.message}

            <button type="submit">Login</button>
        </form>
    );
};
