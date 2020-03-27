import {gql, useLazyQuery} from '@apollo/client';
import React, {useState} from 'react';
import {TextField} from '@material-ui/core';
import {useFormContext} from 'react-hook-form';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import SearchField from './SearchField';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import get from 'lodash.get';

const CONCEPT_SEARCH_QUERY = gql`
    query ConceptSelectSearch($searchTerm: String) {
        subjects(term: $searchTerm, options: { pageSize: 10}) {
            nodes { id label }
        }
    }
`;

export default function ConceptSelect(props) {
    const {
        name,
        required,
        defaultValue,
        ...otherProps
    } = props;
    const [open, setOpen] = useState(false);
    const [getConcepts, { loading, data }] = useLazyQuery(CONCEPT_SEARCH_QUERY);
    const {errors, register, setValue} = useFormContext();
    const error = get(errors, name);

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = event => {
        const searchTerm = event.target.value;
        searchTerm && getConcepts({ variables: {searchTerm} });
    };

    const handleSelect = item => {
        setValue(name, item);
        handleClose();
    };

    return (
        <div>
            <input
                hidden
                name={`${name}.id`}
                ref={register({required})}
            />
            <TextField
                name={`${name}.label`}
                inputRef={register({ required })}
                onClick={handleClickOpen}
                required={required}
                error={!!error}
                fullWidth
                variant="filled"
                InputProps={{ readOnly: true }}
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
                        {data && data.subjects.nodes.map(subject => (
                            <ListItem button
                                key={subject.id}
                                onClick={() => handleSelect(subject)}
                            >
                                <ListItemText
                                    primary={subject.label}
                                    secondary={subject.id}
                                />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    );
}
