import {EmojiPeople} from "@material-ui/icons";
import React from "react";
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function ActorIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Actor">
            <EmojiPeople {...props} />
        </Tooltip>
    );
}
