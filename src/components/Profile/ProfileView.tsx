import ViewHeader from "../View/ViewHeader";
import CatalogItemForm from "../form/CatalogItemForm";
import React from "react";
import ProfileFormSet, {ProfileFormValues, useFormValues} from "./ProfileFormSet";
import {ProfileUpdateInput, useProfileQuery, useUpdateProfileMutation} from "../../generated/types";
import ViewWrapper from "../View/ViewWrapper";
import AsyncWrapper from "../View/AsyncWrapper";
import {FormContextValues} from "react-hook-form";
import {useSnackbar} from "notistack";

export const toUpdateInput = (formValues: ProfileFormValues): ProfileUpdateInput => {
    return formValues;
}

export default function ProfileView() {
    const {loading, error, data} = useProfileQuery();
    const formValues = useFormValues();
    const defaultValues = formValues(data?.profile ?? undefined);
    const { enqueueSnackbar } = useSnackbar();

    const [updateMutation] = useUpdateProfileMutation();
    const handleUpdate = async (formValues: ProfileFormValues, formMethods: FormContextValues<ProfileFormValues>) => {
        const input = toUpdateInput(formValues);
        const result = await updateMutation({variables: {input}});
        if (result.data?.updateProfile) {
            formMethods.reset(result.data.updateProfile);
            enqueueSnackbar('Profile updated!');
        }
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
        </ViewWrapper>
    );
}
