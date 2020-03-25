import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import {iconDict} from '../../utils';
import {gql} from '@apollo/client';

const textReducer = (acc, cur) => acc ? acc + ', ' + cur.name : cur.name;

export default function XtdChip(props) {
    const {type, names} = props;
    const icon = iconDict(type);
    const label = names.reduce(textReducer, '');

    return <Chip icon={icon} label={label} />;
}

XtdChip.propTypes = {
    type: PropTypes.string.isRequired,
    names: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,
};

XtdChip.fragments = {
    root: gql`
        fragment XtdChipRoot on XtdRoot {
            __typename
            names {
                name
            }
        }
    `
};
