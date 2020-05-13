import React from "react";
import {gql, useMutation} from "@apollo/client";
import {useForm} from "react-hook-form";
import {UserSession} from "../../AuthContext";
import makeStyles from "@material-ui/core/styles/makeStyles";

interface SignupFormProps {
    onSignup: (user: UserSession) => void;
}

const signupMutation = gql`
    mutation signup($profile: SignupInput!) {
        signup(input: $profile) {
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
`;

type Response = {
    signup: UserSession;
}

type Profile = {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    organization: string;
}

type Variables = {
    profile: Profile
}

const useStyles = makeStyles(theme => ({
    root: {
        "display": "flex",
        "flex-direction": "column",
        "& label": {
            "margin-bottom": theme.spacing(1)
        },
        "& input": {
            "margin-bottom": theme.spacing(2)
        }
    }
}));

export default function SignupForm(props: SignupFormProps) {
    const classes = useStyles();
    const { onSignup } = props;
    const [signup, { error }] = useMutation<Response, Variables>(signupMutation, {
        errorPolicy: 'ignore',
        onCompleted: ({ signup: session }) => onSignup(session)
    });
    const { handleSubmit, register, errors } = useForm<Profile>();
    const onSubmit = async (values: Profile) => {
        await signup({ variables: { profile: values } });
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            {error && error.message}

            <label htmlFor="username">Username</label>
            <input
                name="username"
                ref={register({required: true})}
            />
            {errors.username && errors.username.message}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                ref={register({required: true})}
            />
            {errors.password && errors.password.message}

            <label htmlFor="firstName">Firstname</label>
            <input
                name="firstName"
                ref={register({required: true})}
            />
            {errors.firstName && errors.firstName.message}

            <label htmlFor="Lastname">Lastname</label>
            <input
                name="lastName"
                ref={register({required: true})}
            />
            {errors.lastName && errors.lastName.message}

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                ref={register({required: true})}
            />
            {errors.email && errors.email.message}

            <label htmlFor="organization">Organization</label>
            <input
                name="organization"
                ref={register({required: true})}
            />
            {errors.organization && errors.organization.message}

            <button type="submit">Signup</button>
        </form>
    )
}
