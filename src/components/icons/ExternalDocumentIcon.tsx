import DescriptionIcon from '@material-ui/icons/Description';
import * as React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function (props: SvgIconProps) {
    return (
        <Tooltip title="External document">
            <DescriptionIcon {...props} />
        </Tooltip>
    );
}
