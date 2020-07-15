import {IconButtonProps} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import {AccountStatus, useUpdateAccountStatusMutation} from "../../generated/types";
import TextField from "@material-ui/core/TextField";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import MenuItem from "@material-ui/core/MenuItem";
import Tooltip from "@material-ui/core/Tooltip";

type ChangeStatusButtonProps = {
    username: string,
    initialStatus: AccountStatus
}

export default function ChangeStatusButton(props: ChangeStatusButtonProps & IconButtonProps) {
    const {username, initialStatus, ...otherProps} = props;
    const [mutation, {loading}] = useUpdateAccountStatusMutation();
    const [status, setStatus] = useState(initialStatus);
    const [dialogOpen, setDialogOpen] = useState(false);
    const handleOnOpen = () => setDialogOpen(true);
    const handleOnClose = () => setDialogOpen(false);
    const handleOnConfirm = async () => {
        await mutation({ variables: { input: { username, status }}})
        handleOnClose();
    };

    return (
        <React.Fragment>
            <Tooltip title="Change account status">
                <IconButton onClick={handleOnOpen} size="small" {...otherProps}>
                    <VerifiedUserIcon fontSize="small"/>
                </IconButton>
            </Tooltip>
            <Dialog
                open={dialogOpen}
                onBackdropClick={handleOnClose}
                onClose={handleOnClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Change account status</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please select the new status of this account.
                    </DialogContentText>
                    <TextField
                        id="account-status-select"
                        select
                        label="Select new status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as AccountStatus)}
                        helperText="Please select your currency"
                    >
                        <MenuItem value="Unverified">
                            Unverified
                        </MenuItem>
                        <MenuItem value="Verified">
                            Verified
                        </MenuItem>
                        <MenuItem value="Admin">
                            Admin
                        </MenuItem>
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button disabled={loading} onClick={handleOnClose} color="primary">
                        Cancel
                    </Button>
                    <Button disabled={loading} onClick={handleOnConfirm} color="secondary" autoFocus>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
