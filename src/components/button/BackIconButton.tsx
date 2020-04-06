import {ArrowBackIos} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";

export default function BackIconButton(props: IconButtonProps) {
  return (
    <IconButton {...props}>
      <ArrowBackIos />
    </IconButton>
  );
}
