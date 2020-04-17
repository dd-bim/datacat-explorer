import {Add} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";
import {ButtonBaseProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function AddIconButton(props: IconButtonProps & ButtonBaseProps) {
  return (
      <Tooltip arrow title="Add">
          <span>
              <IconButton {...props}>
                  <Add />
              </IconButton>
          </span>
      </Tooltip>
  );
}
