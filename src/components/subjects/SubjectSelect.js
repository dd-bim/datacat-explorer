import SearchField from '../SearchField';
import React, {useState} from 'react';
import {gql, useQuery} from '@apollo/client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {ListItemText} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    selectedItems: {
        'margin': theme.spacing(.5),
    }
}));

const SUBJECT_FIELD_QUERY = gql`
    query SubjectField($searchTerm: String) {
        subjects(options: { term: $searchTerm }) {
            nodes { id label }
        }
    }
`;

export default function SubjectSelect(props) {
    const classes = useStyles();
    const {title, multiple, selected, onSelect, onUnselect} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const {loading, error, data} = useQuery(SUBJECT_FIELD_QUERY, {variables: {searchTerm}});

    const handleSearchTermChange = e => {
        setSearchTerm(e.target.value);
    };

    let listItems = [];
    if (!loading && !error) {
        listItems = data.subjects.nodes.map(item => {
            const {id, label} = item;
            return (
                <ListItem button
                    key={id}
                    onClick={() => onSelect(item)}
                    selected={multiple ? selected.find(x => x.id === id) : selected && selected.id === id}
                >
                    <ListItemText primary={label} />
                </ListItem>
            );
        });
    }

    let labels = [];
    if (multiple) {
        labels = selected.map(item => (
            <Chip
                key={item.id}
                className={classes.selectedItems}
                label={item.label}
                onDelete={onUnselect && (() => onUnselect(item))}
            />
        ));
    } else if (selected) {
        labels.push(<Chip
            label={selected.label}
            onDelete={onUnselect && (() => onUnselect(selected))}
        />);
    }

    return (
        <Card>
            <CardHeader title={title} />
            <CardActions>
                <SearchField
                    value={searchTerm}
                    loading={loading}
                    onChange={handleSearchTermChange}
                />
            </CardActions>
            <CardContent>
                <div>{labels}</div>
                <List>
                    {listItems}
                </List>
            </CardContent>
        </Card>
    )
}
