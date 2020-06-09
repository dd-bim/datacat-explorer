import React from 'react';
import {Route, Switch, useHistory, useParams, useRouteMatch} from 'react-router-dom';
import ExternalDocumentForm from "./ExternalDocumentForm";
import {
    EntityInput,
    EntityUpdateInput,
    ExternalDocumentDetailsFragment,
    useCreateExternalDocumentMutation,
    useExternalDocumentListQuery,
    useExternalDocumentQuery,
    useUpdateExternalDocumentMutation
} from "../../generated/types";
import {defaultEntityInput, defaultTextInputs, sanitizeEntityInput} from "../../utils";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {useQueryOptions} from "../../hooks";
import Table, {useCatalogItemRows} from "../table/Table";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    idLabel: {
        'color': theme.palette.text.hint
    }
}));

type ViewProps = {
    onCompleted(): void
    onCancel(): void
}

function ListView() {
    const classes = useStyles();
    const history = useHistory();
    const q = useLocationQueryParam("q", "");
    const {query, setQuery, pageNumber, setPageNumber, pageSize, setPageSize} = useQueryOptions(q);
    const {error, loading, data} = useExternalDocumentListQuery({
        variables: {
            input: {query, pageSize, pageNumber}
        }
    });
    const {columns, rows} = useCatalogItemRows(data?.externalDocuments.nodes)

    return (
        <Paper className={classes.root}>
            <Table
                title="External documents"
                onAdd={() => history.push('/externalDocuments/new')}
                query={query}
                onQueryChange={setQuery}
                loading={loading}
                error={!!error}
                columns={columns}
                rows={rows}
                paginationOptions={{
                    page: pageNumber,
                    count: data?.externalDocuments.totalElements || 0,
                    rowsPerPage: pageSize,
                    rowsPerPageOptions: [10, 20, 50, 100],
                    onChangeRowsPerPage: e => setPageSize(parseInt(e.target.value, 10)),
                    onChangePage: (e, num) => setPageNumber(num)
                }}
            />
        </Paper>
    );
}

function CreateView(props: ViewProps) {
    const classes = useStyles();
    const {onCompleted, onCancel} = props;
    const defaultValues = defaultEntityInput();
    const [createExternalDocument] = useCreateExternalDocumentMutation({onCompleted});
    const handleSubmit = (data: EntityInput) => {
        sanitizeEntityInput(data);
        return createExternalDocument({variables: {input: data}});
    };

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" gutterBottom>Create external document</Typography>
            <ExternalDocumentForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                onCancel={onCancel}
            />
        </Paper>
    )
}

function UpdateView(props: ViewProps) {
    const classes = useStyles();
    const {onCompleted, onCancel} = props;
    const {id} = useParams();
    const {loading, error, data} = useExternalDocumentQuery({variables: {id}});
    const [updateExternalDocument] = useUpdateExternalDocumentMutation({onCompleted});
    const handleSubmit = (input: EntityUpdateInput) => {
        sanitizeEntityInput(input);
        return updateExternalDocument({variables: {input}});
    };

    if (loading) return (
        <p>Loading...</p>
    );

    if (error) return (
        <p>Error...</p>
    );

    const node = (data?.node as ExternalDocumentDetailsFragment);
    const defaultValues: EntityUpdateInput = {
        id: node.id,
        names: defaultTextInputs().map(textInput => {
            const existingName = node.names.find(name => name.language.id === textInput.languageCode);
            if (existingName) {
                textInput.id = existingName.id;
                textInput.value = existingName.value;
            }
            return textInput;
        })
    };
    return (
        <Paper className={classes.root}>
            <Typography variant="h5" gutterBottom>Update external document</Typography>
            <ExternalDocumentForm
                defaultValues={defaultValues}
                onSubmit={handleSubmit}
                onCancel={onCancel}
                catalogItemFormProps={{isUpdate: true}}
            />
        </Paper>
    )
}

export default function ExternalDocumentViews() {
    const {path} = useRouteMatch();
    const history = useHistory();
    const onCompleted = () => history.push(path);

    return (
        <Switch>
            <Route exact path={path}>
                <ListView />
            </Route>
            <Route exact path={`${path}/new`}>
                <CreateView
                    onCancel={onCompleted}
                    onCompleted={onCompleted}
                />
            </Route>
            <Route path={`${path}/:id`}>
                <UpdateView
                    onCancel={onCompleted}
                    onCompleted={onCompleted}
                />
            </Route>
        </Switch>
    )
}
