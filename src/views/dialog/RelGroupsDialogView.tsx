import {XtdRoot} from "../../types";
import {gql, useQuery} from "@apollo/client";
import * as React from "react";
import {useState} from "react";
import {FindOneQueryData, usePagination} from "../../hooks";
import {IconButtonProps} from "@material-ui/core/IconButton";
import RelGroupsIconButton from "../../components/button/RelGroupsIconButton";
import RelationshipDialog from "../../components/dialog/RelationshipDialog";
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
                groups(options: $leftPaging) {
                    ...ConnectionProps
                }
                groupedBy(options: $rightPaging) {
                    ...ConnectionProps
                }
            }
        }
    }
    fragment ConnectionProps on XtdRelGroupsConnection {
        totalElements
        nodes { id label }
        pageInfo { ...RelationshipDialogPageInfo }
    }
    ${RelationshipDialog.fragments.pageInfo}
`

interface RelGroupsDialogViewProps {
    id: string;
    totalElementsGroups: number;
    totalElementsGroupedBy: number;
    onSelectItem?: (item: EntityItem) => void;
    ButtonProps: IconButtonProps
}

export default function RelGroupsDialogView(props: RelGroupsDialogViewProps) {
    const {
        id,
        totalElementsGroups,
        totalElementsGroupedBy,
        onSelectItem,
        ButtonProps
    } = props;
    const [open, setOpen] = useState(false);
    const hasChildren = (totalElementsGroups + totalElementsGroupedBy) === 0;
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
            <RelGroupsIconButton
                disabled={hasChildren}
                onClick={() => setOpen(true)}
                {...ButtonProps}
            />
            {data && <RelationshipDialog
                open={open}
                title={'Groups relationships'}
                left={{
                    label: `Groups (${totalElementsGroups})`,
                    connection: data.node.groups,
                    onSelectItem,
                    onChangePage: setLeftPageNumber
                }}
                right={{
                    label: `Grouped by (${totalElementsGroupedBy})`,
                    connection: data.node.groupedBy,
                    onSelectItem,
                    onChangePage: setRightPageNumber
                }}
                onClose={() => setOpen(false)}
            />}
        </React.Fragment>
    );
}
