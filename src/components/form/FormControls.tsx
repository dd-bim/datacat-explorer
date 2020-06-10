import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";
import DeleteButton from "./DeleteButton";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(.5),
        }
    },
}));

type FormControlsProps = {
    submit?: boolean
    onDelete?(): void
    onCancel?(): void
}

export default function FormControls(props: FormControlsProps) {
    const { submit, onDelete, onCancel } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {onCancel && <CancelButton onClick={onCancel} />}
            {onDelete && <DeleteButton onClick={onDelete} />}
            {submit && <SubmitButton />}
        </div>

    )
}
