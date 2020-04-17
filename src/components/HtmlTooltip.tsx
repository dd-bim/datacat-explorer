import withStyles from "@material-ui/core/styles/withStyles";
import {fade, Theme} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

export const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        backgroundColor: theme.palette.background.paper,
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: theme.typography.pxToRem(12),
        border: `1px solid ${fade(theme.palette.grey[700], 0.9)}`,
    },
}))(Tooltip);
