import {DocumentNode, useMutation, useQuery} from '@apollo/client';
import * as React from 'react';
import {useState} from 'react';
import SearchField from '../SearchField';
import ErrorAlert from '../ErrorAlert';
import LinearProgress from '@material-ui/core/LinearProgress';
import XtdTable from './XtdTable';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {IconButtonProps} from "@material-ui/core";
import {XtdRoot} from "../../types";
import AddButton from "../button/AddButton";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {route} from "../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      'margin-bottom': theme.spacing(1)
    }
  },
  actionBar: {
    'padding': theme.spacing(2),
    '& > *': {
      'margin-bottom': theme.spacing(1)
    }
  },
  header: {
    'margin-bottom': theme.spacing(3),
    'display': 'flex',
    'justify-content': 'space-between'
  }
}));

interface XtdTableViewProps {
  title: string;
  findAllQuery: DocumentNode;
  findAllQueryKey: string;
  deleteQuery: DocumentNode;
  deleteQueryKey: string;
}

const buttonProps: IconButtonProps = {
  size: 'small'
};

export default function XtdTableView(props: XtdTableViewProps) {
  const {
    title,
    findAllQuery, findAllQueryKey,
    deleteQuery
  } = props;
  const classes = useStyles();
  const {path} = useRouteMatch();
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const variables = {term: searchTerm, options: { pageSize, pageNumber }};
  const {loading, error, data, refetch} = useQuery(findAllQuery, { variables });
  const [deleteRow] = useMutation(deleteQuery);

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPageNumber(0);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPageSize(parseInt(e.target.value, 10));
    setPageNumber(0);
  };

  const handleChangePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
    setPageNumber(page);
  };

  const handleNavSelect = (row: XtdRoot) => history.push(`${route(row.__typename)}/${row.id}`);

  const handleOnEdit = (row: XtdRoot) => history.push(`${path}/${row.id}`);

  const handleOnDelete = ({ id }: XtdRoot) => {
    deleteRow({
      variables: { id },
      update: () => refetch()
    });
  };

  let content = null;
  if (error) {
    content = <ErrorAlert/>;
  }
  if (!error && !loading) {
    const {nodes: rows, page} = data[findAllQueryKey];
    content = (
      <XtdTable
        rows={rows}
        page={page}
        onNavSelect={handleNavSelect}
        onEdit={handleOnEdit}
        onDelete={handleOnDelete}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        onChangePage={handleChangePage}
        IconButtonProps={buttonProps}
      />
    );
  }

  return (
    <div className={classes.root}>
        <Paper className={classes.actionBar}>
          <div className={classes.header}>
            <Typography component="h2" variant="h4">{title}</Typography>
            <AddButton to={`${path}/new`} variant="contained" size="small">
              Add row
            </AddButton>
          </div>
          <SearchField
            label="Search id, name and description"
            helperText="Wildcard characters '?' and '*' are supported. Enabled fuzzy search mode by appending '~'."
            size="small"
            variant="outlined"
            fullWidth
            loading={loading}
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </Paper>
        {loading && <LinearProgress/>}
        {content}
    </div>
  );
};
