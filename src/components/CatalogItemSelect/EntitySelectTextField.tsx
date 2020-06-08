import React, {useState} from 'react';
import {TextField, TextFieldProps} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SearchField from '../SearchField';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CatalogItemIcon from "../icons/CatalogItemIcon";
import {Concept, useAsFormValue} from "../../hooks";
import InputAdornment from "@material-ui/core/InputAdornment";
import {useCatalogItemSelectLazyQuery} from "../../generated/types";

export interface ConceptSelectProps {
    initialEntity?: Concept;
    supportedFieldName: string;
    // labels: XtdEntityTypes[]
    // excludedIds: string[];
    onConceptSelect: (selection: string | null) => void;
}

export default function EntitySelectTextField(props: ConceptSelectProps & TextFieldProps) {
    const {
        initialEntity,
        supportedFieldName,
        // labels,
        // excludedIds,
        onConceptSelect,
        ...otherProps
    } = props;
    const [open, setOpen] = useState(false);
    const [getConcepts, { loading, data }] = useCatalogItemSelectLazyQuery();
    const { current, error, setValue: setCurrentConcept } = useAsFormValue({name: supportedFieldName, defaultValue: initialEntity ? initialEntity : null});

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const searchTerm = event.target.value;
        // TODO: filter by label, excluded ids
        searchTerm && getConcepts({ variables: { input: { query: searchTerm } } });
    };

    const handleSelect = (item: Concept) => {
        setCurrentConcept(item);
        onConceptSelect(item.id);
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
                            <CatalogItemIcon itemType={current.__typename} />
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
                                    <CatalogItemIcon itemType={item.__typename} />
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
