import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import {ActsUponIcon} from "../icons/icons";

export default function RelActsUponIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <ActsUponIcon/>
        </IconButton>
    );
}
