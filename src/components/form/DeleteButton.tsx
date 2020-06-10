import {ButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

export default function DeleteButton(props: ButtonProps) {
    return (
        <Button
            variant="contained"
            color="secondary"
            {...props}
        >
            Delete
        </Button>
    );
}
