import IconButton from '@material-ui/core/IconButton';
import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core';
import {Help as HelpIcon} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => {
    return {
        popover: {
            'z-index': theme.zIndex.tooltip,
        },
    };
});

export default function (props) {
    const {title, descriptions, ...otherProps} = props;
    const [open, setOpen] = useState(false);

    const listItems = descriptions.reduce((acc, {value}, index) => {
            acc.push(
                <ListItem key={index} component="li">
                    <ListItemText primary={value}/>
                </ListItem>
            );

            if (index < descriptions.length - 1) {
                acc.push(<Divider key={index + '-divider'} />);
            }
            return acc;
    }, []);

    const handleOnOpen = () => setOpen(true);
    const handleOnClose = () => setOpen(false);

    if (descriptions.length === 0) {
        return <React.Fragment />
    }

    return (
        <React.Fragment>
            <IconButton onClick={handleOnOpen} {...otherProps}>
                <HelpIcon />
            </IconButton>
            <Dialog open={open} onClose={handleOnClose} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <List component="ul" dense={true}>
                        {listItems}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOnClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
