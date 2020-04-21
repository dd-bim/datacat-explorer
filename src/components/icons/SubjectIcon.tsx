import {EmojiObjects} from '@material-ui/icons';
import * as React from 'react';
import {SvgIconProps} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export default function SubjectIcon(props: SvgIconProps) {
    return (
        <Tooltip title="Subject">
            <EmojiObjects {...props} />
        </Tooltip>
    );
}
