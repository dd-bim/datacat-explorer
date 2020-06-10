import {ButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

export default function CancelButton(props: ButtonProps) {
    return (
        <Button
            type="button"
            variant="contained"
            color="default"
            {...props}
        >
            Cancel
        </Button>
    );
}
