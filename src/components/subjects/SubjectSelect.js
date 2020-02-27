import React, {useEffect, useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useQuery} from '@apollo/client';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import gql from 'graphql-tag';

const SUBJECT_SELECT_QUERY = gql`
    query SubjectSelect($term: String) {
        subjects(options: { term: $term}) {
            nodes {
                uniqueId
                names {
                    name
                }
            }
        }
    }
`;

export default function SubjectSelect(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const {loading, error, data} = useQuery(SUBJECT_SELECT_QUERY, {variables: { term: searchTerm }});

    useEffect(() => {
        if (data) {
            setOptions(data.subjects.nodes);
        }
    }, [data]);

    const handleInputChange = (input, value, reason) => {
        if (reason === 'input') setSearchTerm(value);
    };

    return (
        <Autocomplete
            filterOptions={() => {}}
            onInputChange={handleInputChange}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => option.uniqueId === value.uniqueId}
            getOptionLabel={option => option.names[0].name}
            options={options}
            loading={loading}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Subject"
                    variant="standard"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
