import {QueryConnection, XtdRelationship, XtdRoot} from "../../types";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {DialogActions} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {gql} from "@apollo/client";
import RelationshipPanel from "../panels/RelationshipPanel";
import {EntityItem} from "../list/PaginatedEntityList";

interface RelationshipDialogConnectionProps {
    label: string;
    connection?: QueryConnection<XtdRelationship>;
    onSelectItem?: (item: EntityItem) => void;
    onChangePage?: (page: number) => void;
}

interface RelationshipDialogProps {
    title: string;
    left: RelationshipDialogConnectionProps;
    right: RelationshipDialogConnectionProps;
    open: boolean;
    onClose?: () => void;
}

const toItems = ({__typename, id, label}: XtdRoot) => ({
    entityType: __typename,
    id,
    label
});

const toPaginationListProps = (props: RelationshipDialogConnectionProps) => {
    const {label, connection, onSelectItem, onChangePage} = props;
    return {
        label,
        items: connection?.nodes.map(toItems),
        pageNumber: connection ?.pageInfo.pageNumber,
        totalPages: connection?.pageInfo.totalPages,
        onSelectItem,
        onChangePage
    };
};

export default function RelationshipDialog(props: RelationshipDialogProps) {
    const {
        title,
        left,
        right,
        onClose,
        ...otherProps
    } = props;
    const leftProps = toPaginationListProps(left);
    const rightProps = toPaginationListProps(right);

    return (
        <Dialog fullWidth maxWidth="md" {...otherProps}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <RelationshipPanel
                    LeftPaginatedEntityListProps={leftProps}
                    RightPaginatedEntityListProps={rightProps}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

RelationshipDialog.fragments = {
    pageInfo: gql`
        fragment RelationshipDialogPageInfo on PageInfo {
            pageNumber
            totalPages
        }
    `
}
