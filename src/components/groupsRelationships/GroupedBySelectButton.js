import React, {useEffect, useState} from 'react';
import {RelatedObjectsIcon} from './RelGroupsIcon';
import RelGroupsSelectDialog from './RelGroupsSelectDialog';
import IconButton from '@material-ui/core/IconButton';
import {gql, useLazyQuery} from '@apollo/client';
import {useHistory} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

export const GROUPED_BY_SELECT_BUTTON_QUERY = gql`
    query RelGroupsSelectButton($relatedObject: ID!) {
        subject(id: $relatedObject) {
            groupedBy {
                nodes {
                    id
                    label
                }
            }
        }
    }
`;

export default function GroupedBySelectButton(props) {
    const {id, totalElements, onSelect, ...otherProps} = props;
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const variables = {relatedObject: id};
    const [loadRelGroups, { data }] = useLazyQuery(GROUPED_BY_SELECT_BUTTON_QUERY, {variables});
    const history = useHistory();

    useEffect(() => {
        if (!data) {
            setOptions([]);
        } else {
            setOptions(data.subject.groupedBy.nodes);
        }
    }, [data]);

    const handleOpen = () => {
        loadRelGroups();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelect = (option) => {
        history.push(`/relationships/groups/${option.id}`);
    };

    return (
        <React.Fragment>
            <Badge color="primary" overlap="circle" badgeContent={totalElements}>
                <IconButton onClick={handleOpen} disabled={!totalElements} {...otherProps}>
                    <RelatedObjectsIcon/>
                </IconButton>
            </Badge>
            <RelGroupsSelectDialog options={options} open={open} onClose={handleClose} onSelect={handleSelect} />
        </React.Fragment>
    );
};
