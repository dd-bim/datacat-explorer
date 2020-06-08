import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function TableToolbar() {
    return (
        <Toolbar>
            <Button>Add</Button>
            <Typography variant="h6">
                Title
            </Typography>
            <TextField />
        </Toolbar>
    )
}
