import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';

export default function AppDrawerItem(props) {
    const {to, icon, label, children, disabled} = props;

    return (
        <ListItem button component={RouterLink} to={to} disabled={disabled}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} secondary={children} />
        </ListItem>
    );
}

AppDrawerItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.string,
    disabled: PropTypes.bool,
};
