import {gql, useLazyQuery} from '@apollo/client';
import React, {useState} from 'react';
import {TextField, TextFieldProps} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SearchField from './SearchField';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {QueryConnection, XtdEntity, XtdEntityTypes} from "../types";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import EntityIcon from "./icons/EntityIcon";
import {useAsFormValue} from "../hooks";
import InputAdornment from "@material-ui/core/InputAdornment";

const CONCEPT_SEARCH_QUERY = gql`
    query ConceptSelectSearch($options: SearchInput) {
        search(options: $options, paging: { pageSize: 10}) {
            nodes { id label }
        }
    }
`;

export interface ConceptSelectProps {
    initialEntity?: XtdEntity;
    supportedFieldName: string;
    labels: XtdEntityTypes[]
    excludedIds: string[];
    onConceptSelect: (selection: XtdEntity | null) => void;
}

interface SearchQueryData {
    search: QueryConnection<XtdEntity>
}

export default function EntitySelectTextField(props: ConceptSelectProps & TextFieldProps) {
    const {
        initialEntity,
        supportedFieldName,
        labels,
        excludedIds,
        onConceptSelect,
        ...otherProps
    } = props;
    const [open, setOpen] = useState(false);
    const [getConcepts, { loading, data }] = useLazyQuery<SearchQueryData>(CONCEPT_SEARCH_QUERY);
    const { current, error, setValue: setCurrentConcept } = useAsFormValue({name: supportedFieldName, defaultValue: initialEntity ? initialEntity : null});

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const searchTerm = event.target.value;
        searchTerm && getConcepts({ variables: { options: { term: searchTerm, labels, excludedIds } } });
    };

    const handleSelect = (item: XtdEntity) => {
        setCurrentConcept(item);
        onConceptSelect(item ? item : null);
        handleClose();
    };

    return (
        <div>

            <TextField
                value={current ? `${current.label} (${current.id})`  : ''}
                onClick={handleClickOpen}
                required={true}
                error={!!error}
                fullWidth
                variant="filled"
                InputProps={{
                    readOnly: true,
                    startAdornment: (current &&
                        <InputAdornment position="start">
                            <EntityIcon entityType={current.__typename} />
                        </InputAdornment>
                    )
                }}
                InputLabelProps={{ shrink: true}}
                {...otherProps}
            />
            <Dialog
                fullWidth
                maxWidth="sm"
                open={open}
                onClose={handleClose}>
                <DialogTitle>Select concept</DialogTitle>
                <DialogContent>
                    <SearchField
                        autoFocus
                        fullWidth
                        loading={loading}
                        onChange={handleChange}
                    />
                    <List dense>
                        {data && data.search.nodes.map(item => (
                            <ListItem button
                                key={item.id}
                                onClick={() => handleSelect(item)}
                            >
                                <ListItemIcon>
                                    <EntityIcon entityType={item.__typename} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.label}
                                    secondary={item.id}
                                />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    );
}
