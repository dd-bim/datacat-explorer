import {ButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";

export default function SubmitButton(props: ButtonProps) {
    return (
        <Button
            type="submit"
            variant="contained"
            color="primary"
            {...props}
        >
            Submit
        </Button>
    );
}
