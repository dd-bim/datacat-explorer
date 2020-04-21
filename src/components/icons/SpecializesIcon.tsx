import {Star} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function SpecializesIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Specializes">
            <Star {...props} />
        </Tooltip>
    );
}
