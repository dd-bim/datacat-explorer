import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import CheckIcon from "@material-ui/icons/Check";
import BlockIcon from "@material-ui/icons/Block";
import {SvgIconProps} from "@material-ui/core";

type BooleanCellProps = {
    value?: boolean
    truthyIcon?: React.ReactNode,
    falsyIcon?: React.ReactNode,
    tooltip?: string
}

export default function BooleanCell(props: BooleanCellProps & SvgIconProps) {
    let {value, truthyIcon, falsyIcon, tooltip = '', ...otherProps} = props;
    truthyIcon = truthyIcon ?? <CheckIcon {...otherProps}/>;
    falsyIcon = falsyIcon ?? <BlockIcon {...otherProps}/>;

    return (
        <Tooltip title={tooltip} enterDelay={500} placement="bottom-start">
            <div>
                {value ? truthyIcon : falsyIcon}
            </div>
        </Tooltip>
    );
}
