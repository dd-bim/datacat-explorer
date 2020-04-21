import {ViewQuilt} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function BagIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Bag">
            <ViewQuilt {...props} />
        </Tooltip>
    )
}
