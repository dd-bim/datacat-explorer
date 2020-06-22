import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import {AssociatesIcon} from "../icons/icons";

export default function RelAssociatesIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <AssociatesIcon/>
        </IconButton>
    );
}
