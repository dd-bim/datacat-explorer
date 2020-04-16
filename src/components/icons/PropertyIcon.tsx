import {ColorLens} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";

export default function PropertyIcon(props: SvgIconProps) {
  return (
    <ColorLens {...props} />
  );
}
