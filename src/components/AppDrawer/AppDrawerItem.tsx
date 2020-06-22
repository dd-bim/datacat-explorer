import {Link as RouterLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem, {ListItemProps} from "@material-ui/core/ListItem";
import * as React from "react";
import Tooltip from "@material-ui/core/Tooltip";

type AppDrawerItemProps = {
    icon?: React.ReactNode
    primary: string
    secondary?: string
    tooltip?: string,
    to: string
}

export default function AppDrawerItem(props: AppDrawerItemProps & ListItemProps) {
    const {icon, primary, secondary, tooltip = '', to, disabled} = props

    return (
        <Tooltip title={tooltip} aria-label={tooltip} arrow enterDelay={500}>
            <ListItem
                button
                component={RouterLink}
                to={to}
                disabled={disabled}
            >
                {icon && (
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                )}
                <ListItemText
                    inset={!icon}
                    primary={primary}
                    secondary={secondary}
                />
            </ListItem>
        </Tooltip>
    );
}
