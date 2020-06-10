import {CatalogItemFragment, RootFragment} from "../generated/types";
import CatalogItemIcon from "../components/icons/CatalogItemIcon";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {route} from "../utils";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import LabelCell from "../components/table/LabelCell";
import PropertyCell from "../components/table/PropertyCell";
import useTableRows from "./useTableRows";

const columnsFactory = () => [
    {id: 'icon', Header: '', accessor: 'icon'},
    {id: 'label', Header: 'Name', accessor: 'label'},
    {id: 'version', Header: 'Version', accessor: 'version'},
    {id: 'created', Header: 'Created', accessor: 'created'},
    {id: 'lastModified', Header: 'Last modified', accessor: 'lastModified'},
    {id: 'actions', Header: 'Actions', accessor: 'actions'}
];

const rowFactory = (item: RootFragment) => ({
    icon: <CatalogItemIcon itemType={item.__typename} fontSize={'small'}/>,
    label: (
        <LabelCell id={item.id} label={item.label} />
    ),
    version: (
        <PropertyCell
            primary={item.versionId}
            secondary={item.versionDate}
        />
    ),
    created: (
        <PropertyCell
            primary={item.created}
            secondary={item.createdBy}
        />
    ),
    lastModified: (
        <PropertyCell
            primary={item.lastModified}
            secondary={item.lastModifiedBy}
        />
    ),
    actions: (
        <Link
            component={RouterLink}
            to={`${route(item.__typename)}/${item.id}`}
        >
            <EditIcon
                fontSize="small"
                aria-label="edit item"
            />
        </Link>
    )
});

export default function useCatalogRootItemRows(items?: RootFragment[]) {
    return useTableRows<CatalogItemFragment>({items, columnsFactory, rowFactory });
}
