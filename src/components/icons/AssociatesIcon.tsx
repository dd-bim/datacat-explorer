import {ImportExport} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function AssociatesIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Associates">
            <ImportExport {...props} />
        </Tooltip>
    );
}
