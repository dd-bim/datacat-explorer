import React from "react";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

export default function LabelCell(props: { id: string, label: string }) {
    const {id, label} = props;
    return (
        <Tooltip title={id} enterDelay={500} placement="bottom-start">
            <div>
                <Typography variant="body1">{label}</Typography>
            </div>
        </Tooltip>
    );
}
