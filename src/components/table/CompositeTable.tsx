import {useRouteMatch} from "react-router-dom";
import {ApolloError, gql} from "@apollo/client";
import {Page, XtdEntity} from "../../types";
import * as React from "react";
import ErrorAlert from "../ErrorAlert";
import SimpleTable from "./SimpleTable";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddButton from "../button/AddButton";
import SearchField from "../SearchField";
import LinearProgress from "@material-ui/core/LinearProgress";
import {makeStyles} from "@material-ui/core/styles";

interface CompositeTableProps<T> {
    title: string;
    loading: boolean;
    error?: ApolloError;
    tableHeader: React.ReactNode;
    children?: React.ReactNode;
    page?: Page;
    term: string;
    onTermChange: (newTerm: string) => void;
    onPageNumberChange: (newPageNumber: number) => void;
    onPageSizeChange: (newPageSize: number) => void;
}

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
    },
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

export default function CompositeTable<T extends XtdEntity>(props: CompositeTableProps<T>) {
    const {
        tableHeader,
        title,
        loading,
        error,
        children,
        page,
        term, onTermChange,
        onPageNumberChange,
        onPageSizeChange,
    } = props;
    const classes = useStyles();
    const {path} = useRouteMatch();

    const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onTermChange(e.target.value);
    };

    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        onPageSizeChange(parseInt(e.target.value, 10));
    };

    const handleChangePage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
        onPageNumberChange(page);
    };

    let content = null;
    if (error) {
        content = <ErrorAlert/>;
    }
    if (!error && !loading && page) {
        content = (
            <SimpleTable
                tableHeader={tableHeader}
                page={page}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onChangePage={handleChangePage}
            >
                {children}
            </SimpleTable>
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
}

CompositeTable.fragments = {
    page: gql`
        fragment CompositeTablePage on Page {
            ...SimpleTablePage
        }
        ${SimpleTable.fragments.page}
    `
}
