import {Rowing} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function ActivityIcon(props: SvgIconProps) {
  return (
      <Tooltip title="Activity">
        <Rowing {...props} />
      </Tooltip>
  );
}
