import {IconButtonProps} from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Delete from '@material-ui/icons/Delete';
import Tooltip from "@material-ui/core/Tooltip";
import useAuthContext from "../../hooks/useAuthContext";

export default function DeleteIconButton(props: IconButtonProps) {
    const { hasRole } = useAuthContext();
    return (
        <Tooltip arrow title="Delete">
            <span>
                <IconButton disabled={!hasRole('USER')} {...props}>
                    <Delete/>
                </IconButton>
            </span>
        </Tooltip>
    )
}
