import React from 'react';
import {Edit as EditIcon} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

export default function EditButton(props) {
    return (
        <IconButton {...props}>
            <EditIcon/>
        </IconButton>
    );
}
