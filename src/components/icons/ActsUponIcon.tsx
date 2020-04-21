import {Gavel} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function ActsUponIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Acts upon">
            <Gavel {...props} />
        </Tooltip>
    );
}
