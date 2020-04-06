import {ButtonProps} from "@material-ui/core";
import * as React from "react";
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import {Add} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

export default function AddButton(props: ButtonProps & RouterLinkProps) {


  return (
    <Button component={RouterLink} startIcon={<Add />} {...props} />
  )
}
