import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import {GroupsIcon} from "../icons/icons";

export default function RelGroupsIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <GroupsIcon/>
        </IconButton>
    );
}
