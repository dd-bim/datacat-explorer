import {DocumentNode, useMutation, useQuery} from '@apollo/client';
import * as React from 'react';
import SearchField from '../SearchField';
import ErrorAlert from '../ErrorAlert';
import LinearProgress from '@material-ui/core/LinearProgress';
import XtdTable from './XtdTable';
import {useHistory, useRouteMatch} from 'react-router-dom';
import {IconButtonProps} from "@material-ui/core";
import {QueryArgs, QueryConnection, XtdRoot} from "../../types";
import AddButton from "../button/AddButton";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {route} from "../../utils";
import {useQueryOptions} from "../../hooks";
import RelGroupsRowAction from "./RelGroupsRowAction";
import DescriptionRowAction from "./DescriptionRowAction";
import EditIconButton from "../button/EditIconButton";
import DeleteRowAction from "./DeleteRowAction";

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
    queryKey: string;
    findAllQuery: DocumentNode;
    deleteQuery: DocumentNode;
}

interface XtdTableData<T> {
    [name: string]: QueryConnection<T>
}

const buttonProps: IconButtonProps = {
    size: 'small'
};

export default function XtdTableView<T extends XtdRoot>(props: XtdTableViewProps) {
    const {
        title,
        queryKey,
        findAllQuery,
        deleteQuery
    } = props;
    const classes = useStyles();
    const {path} = useRouteMatch();
    const history = useHistory();
    const {term, setTerm, pageNumber, setPageNumber, pageSize, setPageSize} = useQueryOptions();
    const {loading, error, data, refetch} = useQuery<XtdTableData<T>, QueryArgs>(findAllQuery, {
        variables: {
            term,
            options: {pageNumber, pageSize}
        }
    });
    const [deleteRow] = useMutation(deleteQuery);

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(e.target.value);
        setPageNumber(0);
    };

    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPageSize(parseInt(e.target.value, 10));
        setPageNumber(0);
    };

    const handleChangePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
        setPageNumber(page);
    };

    const handleNavSelect = (entity: XtdRoot) => history.push(`${route(entity.__typename)}/${entity.id}`);

    const handleOnEdit = (row: T) => history.push(`${path}/${row.id}`);

    const handleOnDelete = ({id}: T) => {
        deleteRow({
            variables: {id},
            update: () => refetch()
        });
    };

    let content = null;
    if (error) {
        content = <ErrorAlert/>;
    }
    if (!error && !loading && data) {
        const {nodes: rows, page} = data[queryKey];
        content = (
            <XtdTable
                rows={rows}
                extras={row => (
                    <RelGroupsRowAction
                        row={row}
                        onSelect={handleNavSelect}
                        ButtonProps={buttonProps}
                    />
                )}
                actions={row => (
                    <React.Fragment>
                        <DescriptionRowAction
                            row={row}
                            ButtonProps={buttonProps}
                        />
                        <EditIconButton
                            onClick={() => handleOnEdit(row)}
                            {...buttonProps}
                        />
                        <DeleteRowAction
                            title={`Delete ${row.label}`}
                            onConfirm={() => handleOnDelete(row)}
                            ButtonProps={buttonProps}
                        />
                    </React.Fragment>
                )}
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
                    value={term}
                    onChange={handleSearchTermChange}
                />
            </Paper>
            {loading && <LinearProgress/>}
            {content}
        </div>
    );
};
