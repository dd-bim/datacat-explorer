import ViewHeader from "../View/ViewHeader";
import CatalogItemForm from "../form/CatalogItemForm";
import React, {useState} from "react";
import ProfileFormSet, {ProfileFormValues, useFormValues} from "./ProfileFormSet";
import {ProfileUpdateInput, useProfileQuery, useUpdateProfileMutation} from "../../generated/types";
import ViewWrapper from "../View/ViewWrapper";
import AsyncWrapper from "../View/AsyncWrapper";
import {FormContextValues} from "react-hook-form";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export const toUpdateInput = (formValues: ProfileFormValues): ProfileUpdateInput => {
    return formValues;
}

export default function ProfileView() {
    const {loading, error, data} = useProfileQuery();
    const formValues = useFormValues();
    const [open, setOpen] = useState(false);
    const defaultValues = formValues(data?.profile ?? undefined);

    const [updateMutation] = useUpdateProfileMutation();
    const handleUpdate = async (formValues: ProfileFormValues, formMethods: FormContextValues<ProfileFormValues>) => {
        const input = toUpdateInput(formValues);
        const result = await updateMutation({variables: {input}});
        if (result.data?.updateProfile) {
            formMethods.reset(result.data.updateProfile);
            setOpen(true);
        }
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <ViewWrapper>
            <ViewHeader title="Update profile settings"/>
            <AsyncWrapper loading={loading} error={error}>
                <CatalogItemForm
                    defaultValues={defaultValues}
                    onSubmit={handleUpdate}
                >
                    <ProfileFormSet/>
                </CatalogItemForm>
            </AsyncWrapper>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Profile updated.
                </Alert>
            </Snackbar>
        </ViewWrapper>
    );
}
