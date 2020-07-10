import React from "react";
import {FacetFragment} from "../../generated/types";
import Typography from "@material-ui/core/Typography";
import FacetChip from "../Facet/FacetChip";
import Tooltip from "@material-ui/core/Tooltip";

export default function LabelCell(props: { id: string, label: string, facets?: FacetFragment[] }) {
    const {id, label, facets} = props;
    return (
        <Tooltip title={id} enterDelay={500} placement="bottom-start">
        <div>
            <Typography variant="body1">{label}</Typography>
            {facets && facets.map(facet => (
                <FacetChip key={facet.id} label={facet.label}/>
            ))}
        </div>
        </Tooltip>
    );
}
