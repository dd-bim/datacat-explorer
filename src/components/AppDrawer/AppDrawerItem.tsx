import {Link as RouterLink, useHistory} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItem from "@material-ui/core/ListItem";
import * as React from "react";
import AddIconButton from "../buttons/AddIconButton";

type AppDrawerItemProps = {
    icon?: React.ReactNode
    title: string
    subtitle?: string
    route: string
    disabled?: boolean
    addRoute?: string
    onClick?(): void
}

export default function AppDrawerItem(props: AppDrawerItemProps) {
    const {icon, title, subtitle, route, addRoute, onClick, disabled} = props;
    const history = useHistory();

    return (
        <ListItem
            button
            component={RouterLink}
            to={route}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
            )}
            <ListItemText
                inset={!icon}
                primary={title}
                secondary={subtitle}
            />
            {addRoute && (
                <ListItemSecondaryAction>
                    <AddIconButton
                        aria-label={"add new"}
                        edge="end"
                        disabled={disabled}
                        onClick={() => history.push(addRoute)}
                    />
                </ListItemSecondaryAction>
            )}
        </ListItem>
    );
}
