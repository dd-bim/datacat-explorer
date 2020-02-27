import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
    },
}));


export default function PropertyBox(props) {
    const {color, children, ...otherProps} = props;
    const classes = useStyles();

    return (
        <Box
            className={classes.root}
            borderLeft={5}
            borderRadius={3}
            borderColor={color}
            {...otherProps}
        >
            {children}
        </Box>
    );
}

PropertyBox.propTypes = {
    children: PropTypes.node.isRequired,
};
