import {IconButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";

type ConfirmButtonProps = {
    children: React.ReactNode,
    title: React.ReactNode,
    content: React.ReactNode,
    onConfirm(): void
}

export default function ConfirmButton(props: ConfirmButtonProps & IconButtonProps) {
    const {children, title, content, onConfirm, ...otherProps} = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOnOpen = () => setDialogOpen(true);
    const handleOnClose = () => setDialogOpen(false);

    const handleOnDelete = () => {
        onConfirm();
        handleOnClose();
    };

    return (
        <React.Fragment>
            <IconButton onClick={handleOnOpen} {...otherProps}>
                {children}
            </IconButton>
            <Dialog
                open={dialogOpen}
                onBackdropClick={handleOnClose}
                onClose={handleOnClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOnClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleOnDelete} color="secondary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
