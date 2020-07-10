import {useFormContext} from "react-hook-form";
import React from "react";
import TextField from "@material-ui/core/TextField";
import {ProfileUpdateInput, UserProfileFragment} from "../../generated/types";

export type ProfileFormValues = ProfileUpdateInput;

export function useFormValues(): (profile?: UserProfileFragment) => ProfileFormValues {
    return (profile) => {
        return {
            username: profile?.username ?? '',
            firstName: profile?.firstName ?? '',
            lastName: profile?.lastName ?? '',
            email: profile?.email ?? '',
            organization: profile?.organization ?? ''
        };
    };
}

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function ProfileFormSet() {
    const {register} = useFormContext();

    return (
        <React.Fragment>
            <TextField
                name="username"
                label="Username"
                required
                disabled
                inputRef={register({required: true})}
                fullWidth
            />

            <TextField
                name="firstName"
                label="Firstname"
                required
                inputRef={register({required: true, minLength: 1})}
                fullWidth
            />

            <TextField
                name="lastName"
                label="Lastname"
                required
                inputRef={register({required: true, minLength: 1})}
                fullWidth
            />

            <TextField
                type="email"
                name="email"
                label="Email"
                required
                inputRef={register({required: true, pattern: emailRegex})}
                fullWidth
            />

            <TextField
                name="organization"
                label="Organization"
                inputRef={register()}
                fullWidth
            />
        </React.Fragment>
    );
}
