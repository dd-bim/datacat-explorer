import ConfirmButton from "./ConfirmButton";
import {useLockAccountMutation} from "../../generated/types";
import React from "react";
import LockIcon from '@material-ui/icons/Lock';
import {IconButtonProps} from "@material-ui/core";

type LockButtonProps = {
    username: string
}

export default function LockButton(props: LockButtonProps & IconButtonProps) {
    const {username, ...otherProps} = props;
    const [mutation] = useLockAccountMutation();
    const onConfirm = async () => await mutation({variables: {username}});

    return (
        <ConfirmButton
            title="Lock account"
            content="Are you sure you want to lock this account?"
            onConfirm={onConfirm}
            {...otherProps}
        >
            <LockIcon fontSize="small"/>
        </ConfirmButton>
    );
}
