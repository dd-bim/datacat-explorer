import React from 'react';
import {FilterList, GroupWork} from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
    return {
        filterUp: {
            rotate: '180deg',
        }
    };
});

export default function RelGroupsIcon() {
    return <GroupWork />
}

export function RelatingObjectIcon() {
    const classes = useStyles();
    return (
        <FilterList className={classes.filterUp} />
    )
}

export function RelatedObjectsIcon() {
    return (
        <FilterList />
    )
}
