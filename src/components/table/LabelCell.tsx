import React from "react";
import PropertyCell from "./PropertyCell";

export default function LabelCell(props: {id: string, label: string}) {
    const {id, label} = props;

    return (
        <PropertyCell
            primary={label}
            PrimaryProps={{variant: "body1"}}
            secondary={id}
            SecondaryProps={{variant: "body2"}}
        />
    );
}
