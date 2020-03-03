import React, {useEffect, useState} from 'react';
import {RelatingObjectIcon} from './RelGroupsIcon';
import RelGroupsSelectDialog from './RelGroupsSelectDialog';
import gql from 'graphql-tag';
import IconButton from '@material-ui/core/IconButton';
import {useLazyQuery} from '@apollo/client';
import {useHistory} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';

export const REL_GROUPS_SELECT_BUTTON_QUERY = gql`
    query RelGroupsSelectButton($relatingObject: ID!, $pageSize: Int, $pageNumber: Int) {
        groupsRelationships(options: {
            relatingObject: $relatingObject
            pageSize: $pageSize
            pageNumber: $pageNumber
        }) {
            nodes {
                id
                relatingObject {
                    names {
                        name
                    }
                }
            }
        }
    }
`;

export default function RelGroupsSelectButton(props) {
    const {id, totalElements, onSelect, ...otherProps} = props;
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const variables = {relatingObject: id};
    const [loadRelGroups, { data }] = useLazyQuery(REL_GROUPS_SELECT_BUTTON_QUERY, {variables});
    const history = useHistory();

    useEffect(() => {
        if (!data) {
            setOptions([]);
        } else {
            const newOptions = data.groupsRelationships.nodes.map(relationship => {
                const {id, relatingObject} = relationship;
                return {
                    id: id,
                    label: relatingObject.names[0].name,
                }
            });
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
