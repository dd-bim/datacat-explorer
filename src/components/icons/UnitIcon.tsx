import {AcUnit} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function UnitIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Unit">
            <AcUnit {...props} />
        </Tooltip>
    );
}
