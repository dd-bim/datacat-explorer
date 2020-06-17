import React from "react";
import {TextField, TextFieldProps} from "@material-ui/core";
import TextFieldOptions from "../form/TextFieldOptions";
import {XtdValueRoleEnum} from "../../generated/types";
import MenuItem from "@material-ui/core/MenuItem";

export default function ValueRoleSelect(props: TextFieldProps) {
    return (
        <TextField
            select
            helperText="Type of interpretation of this value."
            {...TextFieldOptions}
            {...props}
        >
            <MenuItem key="none" value=""/>
            {Object.entries(XtdValueRoleEnum).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value}
                </MenuItem>
            ))}
        </TextField>
    );
}
