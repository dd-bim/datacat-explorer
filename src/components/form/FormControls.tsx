import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";
import DeleteButton from "./DeleteButton";
import {FormStateProxy} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(.5),
        }
    },
}));

type FormControlsProps = {
    formState: FormStateProxy,
    submit?: boolean
    onDelete?(): void
    onCancel?(): void
}

export default function FormControls(props: FormControlsProps) {
    const { formState, submit, onDelete, onCancel } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {onCancel && <CancelButton onClick={onCancel} />}
            {onDelete && <DeleteButton onConfirm={onDelete} />}
            {submit && <SubmitButton disabled={!formState.dirty} />}
        </div>

    )
}
