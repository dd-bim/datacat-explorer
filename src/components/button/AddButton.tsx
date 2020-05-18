import {ButtonProps} from "@material-ui/core";
import * as React from "react";
import {Link as RouterLink, LinkProps as RouterLinkProps} from 'react-router-dom';
import {Add} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import useAuthContext from "../../hooks/useAuthContext";

export default function AddButton(props: ButtonProps & RouterLinkProps) {
    const {hasRole} = useAuthContext();
    return (
        <Button disabled={!hasRole('USER')} component={RouterLink} startIcon={<Add/>} {...props} />
    )
}
