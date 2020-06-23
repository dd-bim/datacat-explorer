import Card from "@material-ui/core/Card";
import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import WarningIcon from '@material-ui/icons/Warning';

export default function EmptySelectionCard() {
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <Avatar aria-label="Empty">
                        <WarningIcon/>
                    </Avatar>
                }
                title="No selection"
                subheader="Please make a selection from the provided search view."
            >
            </CardHeader>
        </Card>
    )
}
