import {DeviceHub} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function ComposesIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Composes">
            <DeviceHub {...props} />
        </Tooltip>
    );
}
