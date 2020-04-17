import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import AssociatesIcon from "../icons/AssociatesIcon";
import Tooltip from "@material-ui/core/Tooltip";

export default function RelAssociatesIconButton(props: IconButtonProps) {
    return (
        <Tooltip arrow title="Associations">
            <span>
                <IconButton {...props}>
                    <AssociatesIcon/>
                </IconButton>
            </span>
        </Tooltip>
    )
}
