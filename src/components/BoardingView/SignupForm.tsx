import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Alert} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {SignupInput, useSignupFormMutation} from "../../generated/types";

const usernameHelperText = "A username is required. No whitespace. Must start with a letter and have a minimum length of 3."
const passwordHelperText = "A password is required and must have a minimum lenght of 8."

interface SignupFormProps {
    onSignup: () => void;
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

type SignupFormFields = SignupInput & { password2: string };
export default function SignupForm(props: SignupFormProps) {
    const classes = useStyles();
    const {onSignup} = props;
    const [cooldownReached, setCooldownReached] = useState(false);
    const [signup, {loading, error}] = useSignupFormMutation({
        errorPolicy: 'all',
        onCompleted: (result) => result.success && onSignup()
    });
    const {handleSubmit, register, errors, getValues} = useForm<SignupFormFields>();
    const onSubmit = async ({password2, ...profile}: SignupFormFields ) => {
        if (!cooldownReached || loading) return;
        await signup({variables: {profile}});
    }

    useEffect(() => {
        setTimeout(() => setCooldownReached(true), 5000);
    });

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)} noValidate>
            {error && <Alert severity="error">{error.message}</Alert>}

            <TextField
                name="username"
                label="Username"
                required
                error={!!errors.username}
                helperText={errors.username ? usernameHelperText : ''}
                inputRef={register({
                    required: true,
                    minLength: 3,
                    pattern: /^[a-zA-Z][a-zA-Z0-9]+$/
                })}
                fullWidth
            />

            <TextField
                type="password"
                name="password"
                label="Password"
                required
                error={!!errors.password}
                helperText={errors.password ? passwordHelperText : ''}
                inputRef={register({
                    required: true,
                    minLength: 8
                })}
                fullWidth
            />

            <TextField
                type="password"
                name="password2"
                label="Repeat password"
                required
                error={!!errors.password2}
                helperText={errors.password2 ? 'There seems to be a typo in your password.' : ''}
                inputRef={register({
                    required: true,
                    validate: value => {
                        const password = getValues('password');
                        return password === value;
                    }
                })}
                fullWidth
            />

            <TextField
                name="firstName"
                label="Firstname"
                required
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ''}
                inputRef={register({required: true})}
                fullWidth
            />

            <TextField
                name="lastName"
                label="Lastname"
                required
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ''}
                inputRef={register({required: true})}
                fullWidth
            />

            <TextField
                type="email"
                name="email"
                label="Email"
                required
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                inputRef={register({required: true})}
                fullWidth
            />

            <TextField
                name="organization"
                label="Organization"
                error={!!errors.organization}
                helperText={errors.organization ? errors.organization.message : ''}
                inputRef={register()}
                fullWidth
            />

            <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={loading}
            >
                Signup
            </Button>
        </form>
    )
}
