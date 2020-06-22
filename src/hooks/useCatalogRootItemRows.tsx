import {CatalogItemFragment, RootFragment} from "../generated/types";
import CatalogItemIcon from "../components/icons/CatalogItemIcon";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import LabelCell from "../components/table/LabelCell";
import PropertyCell from "../components/table/PropertyCell";
import useTableRows from "./useTableRows";
import dateUtil from "../dateUtil";
import {getUpdatePath} from "../Routes";

const columnsFactory = () => [
    {id: 'icon', Header: '', accessor: 'icon'},
    {id: 'label', Header: 'Name', accessor: 'label'},
    {id: 'version', Header: 'Version', accessor: 'version'},
    {id: 'created', Header: 'Created', accessor: 'created'},
    {id: 'lastModified', Header: 'Last modified', accessor: 'lastModified'},
    {id: 'actions', Header: 'Actions', accessor: 'actions'}
];

const rowFactory = (item: RootFragment) => {
    const {
        __typename,
        id,
        label,
        created,
        createdBy,
        lastModified,
        lastModifiedBy,
        versionId,
        versionDate
    } = item;

    return {
        icon: <CatalogItemIcon itemType={__typename} fontSize={'small'}/>,
        label: (
            <LabelCell id={id} label={label}/>
        ),
        version: (
            <PropertyCell
                primary={versionId}
                secondary={versionDate}
            />
        ),
        created: (
            <PropertyCell
                primary={dateUtil(created).fromNow()}
                secondary={createdBy}
                tooltip={dateUtil(created).format('lll')}
            />
        ),
        lastModified: (
            <PropertyCell
                primary={dateUtil(lastModified).fromNow()}
                secondary={lastModifiedBy}
                tooltip={dateUtil(lastModified).format('lll')}
            />
        ),
        actions: (
            <Link component={RouterLink} to={getUpdatePath(__typename, id)}>
                <EditIcon
                    fontSize="small"
                    aria-label="edit item"
                />
            </Link>
        )
    }
};

export default function useCatalogRootItemRows(items?: RootFragment[]) {
    return useTableRows<CatalogItemFragment>({items, columnsFactory, rowFactory});
}
