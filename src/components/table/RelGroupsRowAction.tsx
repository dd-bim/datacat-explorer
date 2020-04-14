import * as React from "react";
import {useState} from "react";
import {XtdRelGroups, XtdRoot} from "../../types";
import RelGroupsIconButton from "../button/RelGroupsIconButton";
import RelGroupsDialog from "../dialog/RelGroupsDialog";
import {IconButtonProps} from "@material-ui/core";

interface RelGroupsRowActionProps<T> {
    row: T;
    onSelect: (entity: XtdRelGroups) => void;
    ButtonProps?: IconButtonProps;
}

export default function RelGroupsRowAction<T extends XtdRoot>(props: RelGroupsRowActionProps<T>) {
    const { row, onSelect, ButtonProps } = props;
    const { groups, groupedBy } = row;
    const [openRelGroupsDialog, setOpenRelGroupsDialog] = useState(false);

    return (
        <React.Fragment>
            <RelGroupsIconButton
                disabled={(groups.page.totalElements + groupedBy.page.totalElements) === 0}
                onClick={() => setOpenRelGroupsDialog(true)}
                {...ButtonProps}
            />
            <RelGroupsDialog
                entity={row}
                open={openRelGroupsDialog}
                onSelect={onSelect}
                onClose={() => setOpenRelGroupsDialog(false)}
            />
        </React.Fragment>
    );
}
