import MaterialUIList from '@material-ui/core/List';
import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import {ListItemText} from '@material-ui/core';
import SearchField from '../SearchField';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SubjectIcon from '../subjects/SubjectIcon';

const useStyles = makeStyles(theme => ({
    actions: {
        display: 'flex',
        'justify-content': 'center',
    }
}));

export default function XtdList(props) {
    const classes = useStyles();
    const {items, searchTerm, onChange} = props;

    const listItems = items.map(item => (
        <ListItem key={item.id}>
            <ListItemIcon><SubjectIcon/></ListItemIcon>
            <ListItemText primary={item.label} />
        </ListItem>
    ));

    return (
        <Grid container spacing={1}>
            {/*<Grid item xs={12}>*/}
            {/*    <SearchField value={searchTerm} onChange={onChange} />*/}
            {/*</Grid>*/}
            <Grid item xs={12}>
                <MaterialUIList>
                    {listItems}
                </MaterialUIList>
            </Grid>
            {/*<Grid item xs={12} className={classes.actions}>*/}
            {/*    <ButtonGroup>*/}
            {/*        <IconButton>*/}
            {/*            <ArrowBackIos />*/}
            {/*        </IconButton>*/}
            {/*        <IconButton>*/}
            {/*            <ArrowForwardIos />*/}
            {/*        </IconButton>*/}
            {/*    </ButtonGroup>*/}
            {/*</Grid>*/}
        </Grid>
    );
}

XtdList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }))
};

XtdList.fragments = {
    root: gql`
        fragment XtdList on XtdRoot {
            type: __typename
            id
            label
        }
    `,
};
