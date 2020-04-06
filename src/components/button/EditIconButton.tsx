import * as React from 'react';
import {Edit as EditIcon} from '@material-ui/icons';
import IconButton, {IconButtonProps} from '@material-ui/core/IconButton';

export default function EditIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <EditIcon/>
        </IconButton>
    );
}
