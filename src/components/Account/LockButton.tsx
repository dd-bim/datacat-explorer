import ConfirmButton from "./ConfirmButton";
import {useLockAccountMutation} from "../../generated/types";
import React from "react";
import LockIcon from '@material-ui/icons/Lock';
import {IconButtonProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

type LockButtonProps = {
    username: string
}

export default function LockButton(props: LockButtonProps & IconButtonProps) {
    const {username, ...otherProps} = props;
    const [mutation] = useLockAccountMutation();
    const onConfirm = async () => await mutation({variables: {username}});

    return (
        <Tooltip title="Lock account">
            <ConfirmButton
                title="Lock account"
                content="Are you sure you want to lock this account?"
                onConfirm={onConfirm}
                {...otherProps}
            >
                <LockIcon fontSize="small"/>
            </ConfirmButton>
        </Tooltip>
    );
}
