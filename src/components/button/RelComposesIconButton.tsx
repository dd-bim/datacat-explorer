import * as React from 'react';
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import ComposesIcon from "../icons/ComposesIcon";

export default function RelComposesIconButton(props: IconButtonProps) {
    return (
        <IconButton {...props}>
            <ComposesIcon />
        </IconButton>
    );
}
