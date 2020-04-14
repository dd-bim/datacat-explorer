import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React from "react";

export interface DeleteDialogProps {
  title?: string;
  message?: string
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function DeleteDialog(props: DeleteDialogProps) {
  const {
    title = 'Delete item',
    message = 'Are you sure to delete this item? This action can not be undone.',
    open,
    onCancel,
    onConfirm
  } = props;

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-message"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-message">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
