import {TextField, TextFieldProps} from "@material-ui/core";
import TextFieldOptions from "./TextFieldOptions";
import {XtdToleranceTypeEnum} from "../../generated/types";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export default function ToleranceTypeSelect(props: TextFieldProps) {
    return (
        <TextField
            select
            helperText="Type of tolerance of this value."
            {...TextFieldOptions}
            {...props}
        >
            <MenuItem key="none" value=""/>
            {Object.entries(XtdToleranceTypeEnum).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value}
                </MenuItem>
            ))}
        </TextField>
    );
}
