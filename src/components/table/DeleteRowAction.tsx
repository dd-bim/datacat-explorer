import DeleteIconButton from "../button/DeleteIconButton";
import DeleteDialog from "../dialog/DeleteDialog";
import * as React from "react";
import {useState} from "react";
import {IconButtonProps} from "@material-ui/core";
import useAuthContext from "../../hooks/useAuthContext";

interface DeleteRowActionProps {
    title?: string;
    message?: string;
    disabled?: boolean;
    onConfirm: () => void;
    ButtonProps?: IconButtonProps;
}

export default function DeleteRowAction(props: DeleteRowActionProps) {
    const { title, message, disabled, onConfirm, ButtonProps } = props;
    const { hasRole } = useAuthContext();
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    return (
        <React.Fragment>
            <DeleteIconButton
                disabled={!hasRole('USER') || disabled}
                onClick={() => setOpenDeleteDialog(true)}
                {...ButtonProps}
            />
            {!disabled && (
                <DeleteDialog
                    title={title}
                    message={message}
                    open={openDeleteDialog}
                    onCancel={() => setOpenDeleteDialog(false)}
                    onConfirm={onConfirm}
                />
            )}
        </React.Fragment>
    )

}
