import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import GroupsIcon from "../icons/GroupsIcon";
import Tooltip from "@material-ui/core/Tooltip";

export default function RelGroupsIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Groups">
            <span>
                <IconButton {...props}>
                    <GroupsIcon/>
                </IconButton>
            </span>
        </Tooltip>
    );
}
