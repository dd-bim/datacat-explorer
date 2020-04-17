import {Help as HelpIcon} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

export default function HelpIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Add">
            <span>
                <IconButton {...props}>
                  <HelpIcon/>
                </IconButton>
            </span>
        </Tooltip>
    );
}
