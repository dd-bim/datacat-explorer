import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {DeleteForever} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default function DeleteIconButton(props) {
    const {onDelete, ...otherProps} = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOnOpen = () => setDialogOpen(true);
    const handleOnClose = () => setDialogOpen(false);

    const handleOnDelete = () => {
        onDelete();
        handleOnClose();
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleOnOpen} {...otherProps}>
                <DeleteForever/>
            </IconButton>
            <Dialog
                open={dialogOpen}
                onClose={handleOnClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Delete item?</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to delete this item? This action can not be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOnClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleOnDelete} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

DeleteIconButton.propTypes = {
    onDelete: PropTypes.func.isRequired
};
