import {ApolloError} from "@apollo/client";
import * as React from "react";
import ErrorAlert from "../ErrorAlert";
import SimpleTable from "./SimpleTable";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SearchField from "../SearchField";
import LinearProgress from "@material-ui/core/LinearProgress";
import {makeStyles} from "@material-ui/core/styles";
import {PageInfoFragment} from "../../generated/types";

interface CompositeTableProps {
    title: string;
    loading: boolean;
    error?: ApolloError;
    tools?: React.ReactNode;
    tableHeader: React.ReactNode;
    children?: React.ReactNode;
    totalElements?: number;
    pageInfo?: PageInfoFragment;
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

export default function CompositeTable(props: CompositeTableProps) {
    const {
        tools,
        tableHeader,
        title,
        loading,
        error,
        children,
        totalElements,
        pageInfo,
        term, onTermChange,
        onPageNumberChange,
        onPageSizeChange,
    } = props;
    const classes = useStyles();

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

    if (!error && !loading && pageInfo && totalElements) {
        content = (
            <SimpleTable
                tableHeader={tableHeader}
                totalElements={totalElements}
                pageInfo={pageInfo}
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
                    {tools}
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
