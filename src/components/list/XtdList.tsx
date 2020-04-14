import List from '@material-ui/core/List';
import React from 'react';
import {gql} from '@apollo/client';
import ListItem from '@material-ui/core/ListItem';
import {ListItemText} from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {XtdRoot} from "../../types";
import {PaginationProps} from "@material-ui/lab";
import Pagination from "@material-ui/lab/Pagination";
import EntityIcon from "../icons/EntityIcon";
import makeStyles from "@material-ui/core/styles/makeStyles";


interface XtdListProps<T> {
  items: T[];
  onSelect?: (item: T) => void;
  PaginationProps: PaginationProps;
}

const useStyles = makeStyles(theme => ({
  pagination: {
    'display': 'flex',
    'justify-content': 'center'
  }
}));

export default function XtdList<T extends XtdRoot>(props: XtdListProps<T>) {
  const {
    items,
    onSelect,
    PaginationProps
  } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <List dense={true}>
        {items.map(item => (
          <ListItem
            key={item.id}
            button
            disabled={!onSelect}
            onClick={onSelect ? () => onSelect(item) : undefined}
          >
            <ListItemIcon><EntityIcon entity={item} /></ListItemIcon>
            <ListItemText
              primary={item.label}
              secondary={item.id}
            />
          </ListItem>
        ))}
        {!items.length && (
          <ListItemText inset={true}>
            <ListItemText primary="No entries..." />
          </ListItemText>
        )}
      </List>
      <Pagination className={classes.pagination} {...PaginationProps} />
    </React.Fragment>
  );
}

XtdList.fragments = {
  root: gql`
    fragment XtdList on XtdRoot {
      type: __typename
      id
      label
    }
  `,
};
