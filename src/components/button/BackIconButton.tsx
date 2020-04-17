import {ArrowBackIos} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

export default function BackIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Back">
            <span>
                <IconButton {...props}>
                    <ArrowBackIos/>
                </IconButton>
            </span>
        </Tooltip>
    );
}
