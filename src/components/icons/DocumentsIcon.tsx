import React from 'react';
import {Assignment} from '@material-ui/icons';
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function DocumentsIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Documents">
            <Assignment {...props} />
        </Tooltip>
    );
}
