import * as React from 'react';
import {Edit as EditIcon} from '@material-ui/icons';
import IconButton, {IconButtonProps} from '@material-ui/core/IconButton';
import Tooltip from "@material-ui/core/Tooltip";

export default function EditIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Edit">
            <span>
                <IconButton {...props}>
                    <EditIcon/>
                </IconButton>
            </span>
        </Tooltip>
    );
}
