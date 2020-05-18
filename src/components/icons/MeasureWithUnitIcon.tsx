import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import * as React from "react";

export default function MeasureWithUnitIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Measure with Unit">
            <LinearScaleIcon {...props} />
        </Tooltip>
    );
}
