import * as React from "react";
import {useState} from "react";
import {XtdRelAssociates, XtdRoot} from "../../types";
import RelAssociatesIconButton from "../button/RelAssociatesIconButton";
// import RelAssociatesDialog from "../dialog/RelAssociatesDialog";
import {IconButtonProps} from "@material-ui/core";
import {gql} from "@apollo/client";

interface RelAssociatesRowActionProps<T> {
    row: T;
    onSelect: (entity: XtdRelAssociates) => void;
    ButtonProps?: IconButtonProps;
}

export default function RelAssociatesRowAction<T extends XtdRoot>(props: RelAssociatesRowActionProps<T>) {
    const { row, onSelect, ButtonProps } = props;
    const { associates, associatedBy } = row;
    const [openRelAssociatesDialog, setOpenRelAssociatesDialog] = useState(false);

    return (
        <React.Fragment>
            <RelAssociatesIconButton
                disabled={(associates.totalElements + associatedBy.totalElements) === 0}
                onClick={() => setOpenRelAssociatesDialog(true)}
                {...ButtonProps}
            />
            {/*<RelAssociatesDialog*/}
            {/*    entity={row}*/}
            {/*    open={openRelAssociatesDialog}*/}
            {/*    onSelect={onSelect}*/}
            {/*    onClose={() => setOpenRelAssociatesDialog(false)}*/}
            {/*/>*/}
        </React.Fragment>
    );
}

RelAssociatesRowAction.fragments = {
    root: gql`
        fragment RelAssociatesRowActionRoot on XtdRoot {
            associates {
                nodes {
                    id label
                }
                pageInfo {
                    pageNumber
                    totalPages
                }
                totalElements
            }
            associatedBy {
                nodes {
                    id label
                }
                pageInfo {
                    pageNumber
                    totalPages
                }
                totalElements
            }
        }
    `
}
