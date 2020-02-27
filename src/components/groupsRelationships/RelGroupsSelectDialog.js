import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import RelGroupsIcon from './RelGroupsIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';

export default function RelGroupsSelectDialog(props) {
    const {open, options, onClose, onSelect} = props;
    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Select groups relationship</DialogTitle>
            <List>
                {options.map(option => (
                    <ListItem button onClick={() => onSelect(option)} key={option.uniqueId}>
                        <ListItemAvatar>
                            <Avatar>
                                <RelGroupsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={option.label} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}
