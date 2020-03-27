import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Icon from './RelGroupsIcon';

export default function RelGroupsChip(props) {
    const {label, ...otherProps} = props;

    return <Chip icon={<Icon />} label={label} {...otherProps} />;
}

RelGroupsChip.propTypes = {
    label: PropTypes.string.isRequired,
};
