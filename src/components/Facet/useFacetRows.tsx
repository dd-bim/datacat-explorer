import {FacetFragment} from "../../generated/types";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import LabelCell from "../table/LabelCell";
import useTableRows from "../../hooks/useTableRows";
import {getUpdatePath} from "../../Routes";
import {FacetIcon} from "../icons/icons";

const columnsFactory = () => [
    {id: 'label', Header: 'Name', accessor: 'label'},
    {id: 'created', Header: 'Created', accessor: 'created'},
    {id: 'lastModified', Header: 'Last modified', accessor: 'lastModified'},
    {id: 'actions', Header: 'Actions', accessor: 'actions'}
];

const rowFactory = (item: FacetFragment) => {
    const {
        id,
        label,
    } = item;

    return {
        icon: <FacetIcon fontSize={'small'}/>,
        label: (
            <LabelCell id={id} label={label}/>
        ),
        actions: (
            <Link component={RouterLink} to={getUpdatePath('Facet', id)}>
                <EditIcon
                    fontSize="small"
                    aria-label="edit item"
                />
            </Link>
        ),
    };
};

export default function useFacetRows(items?: FacetFragment[]) {
    return useTableRows({items, columnsFactory, rowFactory});
}
