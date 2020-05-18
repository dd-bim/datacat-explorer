import {Add} from "@material-ui/icons";
import IconButton, {IconButtonProps} from "@material-ui/core/IconButton";
import React from "react";
import {ButtonBaseProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import useAuthContext from "../../hooks/useAuthContext";

export default function AddIconButton(props: IconButtonProps & ButtonBaseProps) {
    const {hasRole} = useAuthContext();
    return (
        <Tooltip arrow title="Add">
          <span>
              <IconButton disabled={!hasRole('USER')} {...props}>
                  <Add/>
              </IconButton>
          </span>
        </Tooltip>
    );
}
