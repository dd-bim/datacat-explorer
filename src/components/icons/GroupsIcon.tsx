import React from 'react';
import {GroupWork} from '@material-ui/icons';
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function GroupsIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Groups">
            <GroupWork {...props} />
        </Tooltip>
    );
}
