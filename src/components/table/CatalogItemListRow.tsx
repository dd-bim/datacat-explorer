import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {ReactNode} from "react";

export type CatalogItemListRowProps = {
    icon: ReactNode,
    title: ReactNode,
    created: ReactNode,
    lastModified: ReactNode,
    version: ReactNode,
    links: ReactNode,
    actions: React.ReactNode,
}

export default function CatalogItemListRow(props: CatalogItemListRowProps) {
    const {icon, title, created, lastModified, version, links, actions } = props;

    return (
        <TableRow>
            <TableCell align={'center'}>
                {icon}
            </TableCell>
            <TableCell>
                {title}
            </TableCell>
            <TableCell>
                {created}
            </TableCell>
            <TableCell>
                {lastModified}
            </TableCell>
            <TableCell>
                {version}
            </TableCell>
            <TableCell align={'center'}>
                {links}
            </TableCell>
            <TableCell align={'center'}>
                {actions}
            </TableCell>
        </TableRow>
    );
}
