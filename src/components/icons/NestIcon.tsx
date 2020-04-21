import {ViewModule} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function NestIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Nest">
            <ViewModule {...props} />
        </Tooltip>
    );
}
