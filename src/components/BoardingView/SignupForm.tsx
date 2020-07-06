import React from "react";
import {useForm} from "react-hook-form";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Alert} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {SignupInput, UserProfileFragment, useSignupFormMutation} from "../../generated/types";
import {JwtToken} from "../../AuthProvider";

interface SignupFormProps {
    onSignup: (token: JwtToken, profile: UserProfileFragment) => void;
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

export default function SignupForm(props: SignupFormProps) {
    const classes = useStyles();
    const {onSignup} = props;
    const [signup, {error}] = useSignupFormMutation({
        errorPolicy: 'ignore',
        onCompleted: ({token, profile}) => {
            onSignup(token, profile);
        }
    });
    const {handleSubmit, register, errors} = useForm<SignupInput>();
    const onSubmit = async (values: SignupInput) => {
        await signup({variables: {profile: values}});
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
                required
                error={!!errors.organization}
                helperText={errors.organization ? errors.organization.message : ''}
                inputRef={register({required: true})}
                fullWidth
            />

            <Button type="submit" color="primary" variant="contained">Signup</Button>
        </form>
    )
}
