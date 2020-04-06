import {IconButtonProps} from "@material-ui/core";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Delete from '@material-ui/icons/Delete';

export default function DeleteIconButton(props: IconButtonProps) {
  return (
    <IconButton { ...props }>
      <Delete/>
    </IconButton>
  )
}
