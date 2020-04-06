import {Help as HelpIcon} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";

export default function HelpIconButton (props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <HelpIcon />
    </IconButton>
  );
}
