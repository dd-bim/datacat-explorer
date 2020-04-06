import {ArrowForwardIos} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";

export default function NextIconButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <ArrowForwardIos />
    </IconButton>
  );
}
