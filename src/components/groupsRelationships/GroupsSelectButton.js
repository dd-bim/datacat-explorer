import React, {useEffect, useState} from 'react';
import {RelatingObjectIcon} from './RelGroupsIcon';
import RelGroupsSelectDialog from './RelGroupsSelectDialog';
import gql from 'graphql-tag';
import IconButton from '@material-ui/core/IconButton';
import {useLazyQuery} from '@apollo/client';
import {useHistory} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

export const GROUPS_SELECT_BUTTON_QUERY = gql`
    query RelGroupsSelectButton($relatingObject: ID!, $pageSize: Int, $pageNumber: Int) {
        groupsRelations(
            relatingObject: $relatingObject,
            options: {
                pageSize: $pageSize
                pageNumber: $pageNumber
            }
        ) {
            nodes {
                id
                label
                relatingObject {
                    label
                }
            }
        }
    }
`;

export default function GroupsSelectButton(props) {
    const {id, totalElements, onSelect, ...otherProps} = props;
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const variables = {relatingObject: id};
    const [loadRelGroups, { data }] = useLazyQuery(GROUPS_SELECT_BUTTON_QUERY, {variables});
    const history = useHistory();

    useEffect(() => {
        if (!data) {
            setOptions([]);
        } else {
            const newOptions = data.groupsRelations.nodes.map(({id, label, relatingObject}) => ({
                id: id,
                label: label ? label : `${id.substring(0, 6)}...<${relatingObject.label}>`
            }));
            setOptions(newOptions);
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
                    <RelatingObjectIcon/>
                </IconButton>
            </Badge>
            <RelGroupsSelectDialog options={options} open={open} onClose={handleClose} onSelect={handleSelect} />
        </React.Fragment>
    );
};
