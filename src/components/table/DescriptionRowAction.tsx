import HelpIconButton from "../button/HelpIconButton";
import DescriptionDialog from "../dialog/DescriptionDialog";
import * as React from "react";
import {useState} from "react";
import {IconButtonProps} from "@material-ui/core";
import {XtdRoot} from "../../types";
import {gql} from "@apollo/client";

interface DescriptionRowActionProps<T> {
    row: T;
    ButtonProps?: IconButtonProps;
}

export default function DescriptionRowAction<T extends XtdRoot>(props: DescriptionRowActionProps<T>) {
    const { row, ButtonProps } = props;
    const { label, descriptions } = row;
    const [openDescriptionDialog, setOpenDescriptionDialog] = useState(false);

    return (
        <React.Fragment>
        <HelpIconButton
            disabled={!descriptions.length}
            onClick={() => setOpenDescriptionDialog(true)}
            {...ButtonProps}
        />
    {!!descriptions.length && (
        <DescriptionDialog
            title={label}
            descriptions={descriptions}
            open={openDescriptionDialog}
            onClose={() => setOpenDescriptionDialog(false)}
        />
    )}
        </React.Fragment>
    )
}

DescriptionRowAction.fragments = {
    root: gql`
        fragment DescriptionRowActionRoot on XtdRoot {
            descriptions {
                id
                value
            }
        }
    `
}
