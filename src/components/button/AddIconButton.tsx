import {Add} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";
import {ButtonBaseProps} from "@material-ui/core";

export default function AddIconButton(props: IconButtonProps & ButtonBaseProps) {
  return (
    <IconButton {...props}>
        <Add />
    </IconButton>
  );
}
