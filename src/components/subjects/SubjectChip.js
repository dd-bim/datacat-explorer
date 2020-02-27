import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import SubjectIcon from './SubjectIcon';

export default function SubjectChip(props) {
    const {label} = props;
    return <Chip icon={<SubjectIcon />} label={label} />;
}

SubjectChip.propTypes = {
    label: PropTypes.string.isRequired,
};
