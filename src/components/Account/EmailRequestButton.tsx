import ConfirmButton from "./ConfirmButton";
import {useRequestEmailConfirmationMutation} from "../../generated/types";
import React from "react";
import ReceiptIcon from '@material-ui/icons/Receipt';
import {IconButtonProps} from "@material-ui/core";

type EmailRequestButtonProps = {
    username: string
}

export default function EmailRequestButton(props: EmailRequestButtonProps & IconButtonProps) {
    const {username, ...otherProps} = props;
    const [mutation] = useRequestEmailConfirmationMutation();
    const onConfirm = async () => await mutation({variables: {username}});

    return (
        <ConfirmButton
            title="Request email confirmation"
            content="Are you sure you want to request an email confirmation for this account. The account will be temporarily locked."
            onConfirm={onConfirm}
            {...otherProps}
        >
            <ReceiptIcon fontSize="small"/>
        </ConfirmButton>
    );
}
