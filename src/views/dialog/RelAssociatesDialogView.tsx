import {XtdRoot} from "../../types";
import {gql, useQuery} from "@apollo/client";
import * as React from "react";
import {useState} from "react";
import {FindOneQueryData, usePagination} from "../../hooks";
import {IconButtonProps} from "@material-ui/core/IconButton";
import RelationshipDialog from "../../components/dialog/RelationshipDialog";
import RelAssociatesIconButton from "../../components/button/RelAssociatesIconButton";
import {EntityItem} from "../../components/list/PaginatedEntityList";

const findNode = gql`
    query findNode($id: ID!, $leftPaging: PagingOptions, $rightPaging: PagingOptions) {
        node(id: $id) {
            id
            ... on XtdRoot {
                label
                descriptions {
                    id value
                }
                associates(options: $leftPaging) {
                    ...ConnectionProps
                }
                associatedBy(options: $rightPaging) {
                    ...ConnectionProps
                }
            }
        }
    }
    fragment ConnectionProps on XtdRelAssociatesConnection {
        totalElements
        nodes { id label }
        pageInfo { ...RelationshipDialogPageInfo }
    }
    ${RelationshipDialog.fragments.pageInfo}
`

interface RelAssociatesDialogViewProps {
    id: string;
    totalElementsAssociates: number;
    totalElementsAssociatedBy: number;
    onSelectItem?: (item: EntityItem) => void;
    ButtonProps: IconButtonProps
}

export default function RelAssociatesDialogView(props: RelAssociatesDialogViewProps) {
    const {
        id,
        totalElementsAssociates,
        totalElementsAssociatedBy,
        onSelectItem,
        ButtonProps
    } = props;
    const [open, setOpen] = useState(false);
    const hasChildren = (totalElementsAssociates + totalElementsAssociatedBy) === 0;
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
            <RelAssociatesIconButton
                disabled={hasChildren}
                onClick={() => setOpen(true)}
                {...ButtonProps}
            />
            {data && <RelationshipDialog
                open={open}
                title={'Associates relationships'}
                left={{
                    label: `Associates (${totalElementsAssociates})`,
                    connection: data.node.associates,
                    onSelectItem,
                    onChangePage: setLeftPageNumber,

                }}
                right={{
                    label: `Associates by (${totalElementsAssociatedBy})`,
                    connection: data.node.associatedBy,
                    onSelectItem,
                    onChangePage: setRightPageNumber
                }}
                onClose={() => setOpen(false)}
            />}
        </React.Fragment>
    );
}
