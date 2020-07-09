import ConfirmButton from "./ConfirmButton";
import {useUnlockAccountMutation} from "../../generated/types";
import React from "react";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {IconButtonProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

type UnlockButtonProps = {
    username: string
}

export default function UnlockButton(props: UnlockButtonProps & IconButtonProps) {
    const {username, ...otherProps} = props;
    const [mutation] = useUnlockAccountMutation();
    const onConfirm = async () => await mutation({variables: {username}});

    return (
        <Tooltip title="Unlock account">
            <ConfirmButton
                title="Unlock account"
                content="Are you sure you want to unlock this account?"
                onConfirm={onConfirm}
                {...otherProps}
            >
                <LockOpenIcon/>
            </ConfirmButton>
        </Tooltip>
    );
}
