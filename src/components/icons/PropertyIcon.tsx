import {ColorLens} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function PropertyIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Property">
            <ColorLens {...props} />
        </Tooltip>
    );
}
