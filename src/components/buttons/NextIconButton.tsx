import {ArrowForwardIos} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

export default function NextIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Next">
            <span>
                <IconButton {...props}>
                    <ArrowForwardIos/>
                </IconButton>
            </span>
        </Tooltip>
    );
}
