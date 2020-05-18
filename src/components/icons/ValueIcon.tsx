import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import MoneyIcon from '@material-ui/icons/Money';
import * as React from "react";

export default function ValueIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Value">
            <MoneyIcon {...props} />
        </Tooltip>
    );
}
