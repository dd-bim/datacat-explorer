import {XtdRoot} from "../../types";
import {gql, useQuery} from "@apollo/client";
import * as React from "react";
import {useState} from "react";
import {FindOneQueryData, usePagination} from "../../hooks";
import {IconButtonProps} from "@material-ui/core/IconButton";
import RelationshipDialog from "../../components/dialog/RelationshipDialog";
import {EntityItem} from "../../components/list/PaginatedEntityList";
import RelComposesIconButton from "../../components/button/RelComposesIconButton";

const findNode = gql`
    query findNode($id: ID!, $leftPaging: PagingOptions, $rightPaging: PagingOptions) {
        node(id: $id) {
            id
            ... on XtdRoot {
                label
                descriptions {
                    id value
                }
                composes(options: $leftPaging) {
                    ...ConnectionProps
                }
                composedBy(options: $rightPaging) {
                    ...ConnectionProps
                }
            }
        }
    }
    fragment ConnectionProps on XtdRelComposesConnection {
        totalElements
        nodes { id label }
        pageInfo { ...RelationshipDialogPageInfo }
    }
    ${RelationshipDialog.fragments.pageInfo}
`

interface RelComposesDialogViewProps {
    id: string;
    totalElementsComposes: number;
    totalElementsComposedBy: number;
    onSelectItem?: (item: EntityItem) => void;
    ButtonProps: IconButtonProps
}

export default function RelComposesDialogView(props: RelComposesDialogViewProps) {
    const {
        id,
        totalElementsComposes,
        totalElementsComposedBy,
        onSelectItem,
        ButtonProps
    } = props;
    const [open, setOpen] = useState(false);
    const hasChildren = (totalElementsComposes + totalElementsComposedBy) === 0;
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
            <RelComposesIconButton
                disabled={hasChildren}
                onClick={() => setOpen(true)}
                {...ButtonProps}
            />
            {data && <RelationshipDialog
                open={open}
                title={'"Composes" relationships'}
                left={{
                    label: `Composes (${totalElementsComposes})`,
                    connection: data.node.associates,
                    onSelectItem,
                    onChangePage: setLeftPageNumber,

                }}
                right={{
                    label: `Composed by (${totalElementsComposedBy})`,
                    connection: data.node.associatedBy,
                    onSelectItem,
                    onChangePage: setRightPageNumber
                }}
                onClose={() => setOpen(false)}
            />}
        </React.Fragment>
    );
}
