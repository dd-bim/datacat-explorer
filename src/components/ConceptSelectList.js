import SearchField from './SearchField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const CONCEPT_SEARCH_QUERY = gql`
    query ConceptSelectSearch($searchTerm: String) {
        subjects(term: $searchTerm, options: { pageSize: 10}) {
            nodes { id label }
        }
    }
`;

export default function ConceptSelectList(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const { multiple, onChange } = props;
    const [checked, setChecked] = useState([]);
    const { loading, error, data } = useQuery(CONCEPT_SEARCH_QUERY, { variables: searchTerm });

    const indexOf = item => checked.findIndex(x => x.id === item.id);
    const isChecked = item => indexOf(item) > -1;

    const handleChange = event => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
    };

    const handleSelect = value => {
        onChange && onChange(value);
    };

    const handleToggle = value => {
        const currentIndex = indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);

        onChange && onChange(checked);
    };

    const handleClick = () => {

    };

    return (
        <div>
            <SearchField
                autoFocus
                fullWidth
                loading={loading}
                onChange={handleChange}
            />
            <List dense>
                {data && data.subjects.nodes.map(subject => {
                    const labelId = `list-item-${subject.id}-label`;

                    return (
                        <ListItem button
                                  key={subject.id}
                                  onClick={multiple ? () => handleToggle(subject) : () => handleSelect(subject)}
                        >
                            {multiple && (
                                <ListItemIcon>
                                    <Checkbox
                                        checked={isChecked(subject)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                            )}
                            <ListItemText
                                id={labelId}
                                primary={subject.label}
                                secondary={subject.id}
                            />
                        </ListItem>
                    );
                })}
            </List>
            <Button onClick={handleClick}>Confirm</Button>
        </div>
    );
}
