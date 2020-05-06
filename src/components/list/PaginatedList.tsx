import List from '@material-ui/core/List';
import React from 'react';
import {PaginationProps} from "@material-ui/lab";
import Pagination from "@material-ui/lab/Pagination";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

interface ItemListProps {
  onChangePage?: (newPageNumber: number) => void;
  children?: React.ReactNode;
  PaginationProps: PaginationProps;
}

const useStyles = makeStyles(() => ({
  pagination: {
    'display': 'flex',
    'justify-content': 'center'
  }
}));

export default function PaginatedList(props: ItemListProps) {
  const {
    onChangePage,
    children,
    PaginationProps
  } = props;
  const classes = useStyles();
  const hasChildren = React.Children.count(children) > 0;

  const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onChangePage?.(page - 1);
  }


  return (
    <React.Fragment>
      <List dense={true}>
        {children}
        {!hasChildren && <ListItem>
            <ListItemText primary={'No entry.'} />
          </ListItem>
        }
      </List>
      {hasChildren && <Pagination
          className={classes.pagination}
          onChange={handleOnChange}
          {...PaginationProps}
      />}
    </React.Fragment>
  );
}
