import React from "react";
import Grid from "@material-ui/core/Grid";
import PaginatedEntityList, {PaginatedEntityListProps} from "../list/PaginatedEntityList";

interface RelationshipPanelProps {
    LeftPaginatedEntityListProps: PaginatedEntityListProps;
    RightPaginatedEntityListProps: PaginatedEntityListProps;
}

export default function RelationshipPanel(props: RelationshipPanelProps) {
    const {
        LeftPaginatedEntityListProps,
        RightPaginatedEntityListProps
    } = props;

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <PaginatedEntityList {...LeftPaginatedEntityListProps} />
            </Grid>
            <Grid item xs={6}>
                <PaginatedEntityList {...RightPaginatedEntityListProps} />
            </Grid>
        </Grid>
    );
}
