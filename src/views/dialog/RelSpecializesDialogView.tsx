import {XtdRoot} from "../../types";
import {gql, useQuery} from "@apollo/client";
import * as React from "react";
import {useState} from "react";
import {FindOneQueryData, usePagination} from "../../hooks";
import {IconButtonProps} from "@material-ui/core/IconButton";
import RelationshipDialog from "../../components/dialog/RelationshipDialog";
import {EntityItem} from "../../components/list/PaginatedEntityList";
import RelSpecializesIconButton from "../../components/button/RelSpecializesIconButton";

const findNode = gql`
    query findNode($id: ID!, $leftPaging: PagingOptions, $rightPaging: PagingOptions) {
        node(id: $id) {
            id
            ... on XtdRoot {
                label
                descriptions {
                    id value
                }
                specializes(options: $leftPaging) {
                    ...ConnectionProps
                }
                specializedBy(options: $rightPaging) {
                    ...ConnectionProps
                }
            }
        }
    }
    fragment ConnectionProps on XtdRelSpecializesConnection {
        totalElements
        nodes { id label }
        pageInfo { ...RelationshipDialogPageInfo }
    }
    ${RelationshipDialog.fragments.pageInfo}
`

interface RelSpecializesDialogViewProps {
    id: string;
    totalElementsSpecializes: number;
    totalElementsSpecializedBy: number;
    onSelectItem?: (item: EntityItem) => void;
    ButtonProps: IconButtonProps
}

export default function RelSpecializesDialogView(props: RelSpecializesDialogViewProps) {
    const {
        id,
        totalElementsSpecializes,
        totalElementsSpecializedBy,
        onSelectItem,
        ButtonProps
    } = props;
    const [open, setOpen] = useState(false);
    const hasChildren = (totalElementsSpecializes + totalElementsSpecializedBy) === 0;
    const { pageNumber: leftPageNumber, setPageNumber: setLeftPageNumber } = usePagination(0, 5);
    const { pageNumber: rightPageNumber, setPageNumber: setRightPageNumber } = usePagination(0, 5);
    const {data} = useQuery<FindOneQueryData<XtdRoot>>(findNode, {
        skip: !open,
        variables: {
            id,
            leftPaging: { pageNumber: leftPageNumber, pageSize: 5 },
            rightPaging: { pageNumber: rightPageNumber, pageSize: 5 }
        }
    });

    return (
        <React.Fragment>
            <RelSpecializesIconButton
                disabled={hasChildren}
                onClick={() => setOpen(true)}
                {...ButtonProps}
            />
            {data && <RelationshipDialog
                open={open}
                title={'"Specializes" relationships'}
                left={{
                    label: `Specializes (${totalElementsSpecializes})`,
                    connection: data.node.specializes,
                    onSelectItem,
                    onChangePage: setLeftPageNumber
                }}
                right={{
                    label: `Specialized by (${totalElementsSpecializedBy})`,
                    connection: data.node.specializedBy,
                    onSelectItem,
                    onChangePage: setRightPageNumber
                }}
                onClose={() => setOpen(false)}
            />}
        </React.Fragment>
    );
}
