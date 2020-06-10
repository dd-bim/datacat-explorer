import {ButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

type DeleteButtonProps = {
    onConfirm(): void
}

export default function DeleteButton(props: DeleteButtonProps & ButtonProps) {
    const {onConfirm, ...otherProps} = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOnOpen = () => setDialogOpen(true);
    const handleOnClose = () => setDialogOpen(false);

    const handleOnDelete = () => {
        onConfirm();
        handleOnClose();
    };

    return (
        <React.Fragment>
            <Button
                color="secondary"
                onClick={handleOnOpen}
                variant="contained"
                {...otherProps}
            >
                Delete
            </Button>
            <Dialog
                open={dialogOpen}
                onBackdropClick={handleOnClose}
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
    );
}
