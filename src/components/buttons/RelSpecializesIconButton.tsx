import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import SpecializesIcon from "../icons/SpecializesIcon";

export default function RelSpecializesIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <SpecializesIcon />
        </IconButton>
    );
}
