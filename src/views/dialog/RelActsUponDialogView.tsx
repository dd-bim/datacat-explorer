import {XtdRoot} from "../../types";
import {gql, useQuery} from "@apollo/client";
import * as React from "react";
import {useState} from "react";
import {FindOneQueryData, usePagination} from "../../hooks";
import {IconButtonProps} from "@material-ui/core/IconButton";
import RelationshipDialog from "../../components/dialog/RelationshipDialog";
import {EntityItem} from "../../components/list/PaginatedEntityList";
import RelActsUponIconButton from "../../components/button/RelActsUponIconButton";

const findNode = gql`
    query findNode($id: ID!, $leftPaging: PagingOptions, $rightPaging: PagingOptions) {
        node(id: $id) {
            id
            ... on XtdRoot {
                label
                descriptions {
                    id value
                }
                actsUpon(options: $leftPaging) {
                    ...ConnectionProps
                }
                actedUponBy(options: $rightPaging) {
                    ...ConnectionProps
                }
            }
        }
    }
    fragment ConnectionProps on XtdRelActsUponConnection {
        totalElements
        nodes { id label }
        pageInfo { ...RelationshipDialogPageInfo }
    }
    ${RelationshipDialog.fragments.pageInfo}
`

interface RelActsUponDialogViewProps {
    id: string;
    totalElementsActsUpon: number;
    totalElementsActedUponBy: number;
    onSelectItem?: (item: EntityItem) => void;
    ButtonProps: IconButtonProps
}

export default function RelActsUponDialogView(props: RelActsUponDialogViewProps) {
    const {
        id,
        totalElementsActsUpon,
        totalElementsActedUponBy,
        onSelectItem,
        ButtonProps
    } = props;
    const [open, setOpen] = useState(false);
    const hasChildren = (totalElementsActsUpon + totalElementsActedUponBy) === 0;
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
            <RelActsUponIconButton
                disabled={hasChildren}
                onClick={() => setOpen(true)}
                {...ButtonProps}
            />
            {data && <RelationshipDialog
                open={open}
                title={'"Acts upon" relationships'}
                left={{
                    label: `Groups (${totalElementsActsUpon})`,
                    connection: data.node.actsUpon,
                    onSelectItem,
                    onChangePage: setLeftPageNumber
                }}
                right={{
                    label: `Acted upon by (${totalElementsActedUponBy})`,
                    connection: data.node.actedUponBy,
                    onSelectItem,
                    onChangePage: setRightPageNumber
                }}
                onClose={() => setOpen(false)}
            />}
        </React.Fragment>
    );
}
