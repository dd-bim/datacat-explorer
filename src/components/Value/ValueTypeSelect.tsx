import {TextField, TextFieldProps} from "@material-ui/core";
import TextFieldOptions from "../form/TextFieldOptions";
import {XtdValueTypeEnum} from "../../generated/types";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

export default function ValueTypeSelect(props: TextFieldProps) {
    return (
        <TextField
            select
            helperText="Simple value type of this value."
            {...TextFieldOptions}
            {...props}
        >
            <MenuItem key="none" value=""/>
            {Object.entries(XtdValueTypeEnum).map(([key, value]) => (
                <MenuItem key={key} value={key}>
                    {value}
                </MenuItem>
            ))}
        </TextField>
    );
}
