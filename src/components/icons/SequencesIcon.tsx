import FastForwardIcon from '@material-ui/icons/FastForward';
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function SequencesIcon(props: SvgIconProps) {
  return (
      <Tooltip title="Activity">
        <FastForwardIcon {...props} />
      </Tooltip>
  );
}
