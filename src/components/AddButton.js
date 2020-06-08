import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Add as AddIcon} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

export default function AddButton(props) {
    const {children, to, ...otherProps} = props;
    const {hasRole} = useAuthContext();
//ds
    return (
        <Button
            component={Link}
            to={to}
            variant="contained"
            color="primary"
            disabled={!hasRole('ROLE_USER')}
            startIcon={<AddIcon/>}
            {...otherProps}
        >
            {children}
        </Button>
    );
}

AddButton.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired
};
