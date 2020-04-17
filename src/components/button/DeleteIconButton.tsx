import {IconButtonProps} from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Delete from '@material-ui/icons/Delete';
import Tooltip from "@material-ui/core/Tooltip";

export default function DeleteIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Delete">
            <span>
                <IconButton {...props}>
                    <Delete/>
                </IconButton>
            </span>
        </Tooltip>
    )
}
