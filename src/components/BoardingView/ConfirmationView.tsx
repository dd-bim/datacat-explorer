import Typography from "@material-ui/core/Typography";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {ConfirmEmailMutationVariables, useConfirmEmailMutation} from "../../generated/types";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import useLocationQueryParam from "../../hooks/useLocationQueryParam";
import {Alert} from "@material-ui/lab";
import {Redirect} from "react-router-dom";
import {useSnackbar} from "notistack";

export default function ConfirmationView() {
    const token = useLocationQueryParam('token', '');
    const {register, errors, handleSubmit} = useForm<ConfirmEmailMutationVariables>();
    const [success, setSuccess] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [confirm, {error}] = useConfirmEmailMutation({
        errorPolicy: "all",
        onCompleted: (result) => {
            if (result.success) {
                enqueueSnackbar('Your email has been confirmed. Please use your credentials to log in!');
                setSuccess(true);
            }
        }
    });
    const onSubmit = async (value: ConfirmEmailMutationVariables) => {
        await confirm({variables: value});
    }

    if (success) {
        return <Redirect to="/" />;
    }

    return (
        <React.Fragment>
            <Typography variant="h2">Confirm email address</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                {error && <Alert severity="error">{error.message}</Alert>}

                <TextField
                    name="token"
                    label="Token"
                    defaultValue={token}
                    required
                    error={!!errors.token}
                    helperText={errors.token ? 'The token is required and will be delivered to your inbox.' : ''}
                    inputRef={register({required: true})}
                    fullWidth
                />
                <Button
                    color="primary"
                    type="submit"
                    variant="contained"
                >
                    Send
                </Button>
            </form>
        </React.Fragment>
    )
}
