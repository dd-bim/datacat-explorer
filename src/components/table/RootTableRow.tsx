import TableCell from "@material-ui/core/TableCell";
import EntityIcon from "../icons/EntityIcon";
import Typography from "@material-ui/core/Typography";
import {toLocaleDateTimeString} from "../../dateTime";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {isXtdRoot, XtdEntity} from "../../types";
import {makeStyles} from "@material-ui/core/styles";
import EditIconButton from "../button/EditIconButton";
import DeleteRowAction from "./DeleteRowAction";
import {gql} from "@apollo/client";
import {HtmlTooltip} from "../HtmlTooltip";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {List} from "@material-ui/core";
import RelGroupsDialogView from "../../views/dialog/RelGroupsDialogView";
import RelAssociatesDialogView from "../../views/dialog/RelAssociatesDialogView";
import {EntityItem} from "../list/PaginatedEntityList";
import RelComposesDialogView from "../../views/dialog/RelComposesDialogView";
import RelSpecializesDialogView from "../../views/dialog/RelSpecializesDialogView";
import RelActsUponDialogView from "../../views/dialog/RelActsUponDialogView";

const useStyles = makeStyles(theme => ({
    describedEntity: {
        'text-descoration': 'underlined'
    },
    idLabel: {
        'color': theme.palette.text.hint,
        'font-family': 'monospace'
    }
}));

export type XtdRootTableRowProps<T> = {
    row: T;
    onSelectItem(item: EntityItem): void;
    onEdit?(row: T): void;
    onDelete?(row: T): void;
}

export default function RootTableRow<T extends XtdEntity>(props: XtdRootTableRowProps<T>) {
    const {row, onSelectItem, onEdit, onDelete} = props;
    const classes = useStyles();
    const tableCell = (
        <TableCell>
            <Typography variant="body1">{row.label}</Typography>
            <Typography className={classes.idLabel} variant="body2">{row.id}</Typography>
        </TableCell>
    );
    let entityLabel = tableCell;

    if (isXtdRoot(row) && row.descriptions.length) {
        entityLabel = (
            <HtmlTooltip
                arrow
                title={
                    <React.Fragment>
                        <List dense disablePadding={true}>
                            {row.descriptions.reduce((acc: JSX.Element[], {value}, index) => {
                                acc.push(
                                    <ListItem key={index} component="li" dense disableGutters={true}>
                                        <ListItemText primary={value}/>
                                    </ListItem>
                                );

                                if (index < row.descriptions.length - 1) {
                                    acc.push(<Divider key={index + '-divider'}/>);
                                }
                                return acc;
                            }, [])}
                        </List>
                    </React.Fragment>
                }
            >
                {tableCell}
            </HtmlTooltip>
        );
    }

    const versionString = isXtdRoot(row) ? `${row.versionId} | ${toLocaleDateTimeString(row.versionDate, 'll')}` : '';

    return (
        <TableRow>
            <TableCell align={'center'}>
                <EntityIcon
                    entityType={row.__typename}
                    fontSize="small"
                    color={isXtdRoot(row) && row.descriptions.length ? 'inherit' : 'disabled'}
                />
            </TableCell>
            {entityLabel}
            <TableCell>{toLocaleDateTimeString(row.created)} ({row.createdBy})</TableCell>
            <TableCell>{toLocaleDateTimeString(row.lastModified)} ({row.lastModifiedBy})</TableCell>
            <TableCell>{versionString}</TableCell>
            <TableCell align={'center'}>
                {isXtdRoot(row) && row.associates.totalElements + row.associatedBy.totalElements && <RelAssociatesDialogView
                    id={row.id}
                    totalElementsAssociates={row.associates.totalElements}
                    totalElementsAssociatedBy={row.associatedBy.totalElements}
                    onSelectItem={onSelectItem}
                    ButtonProps={{size: 'small'}}
                />}
                {isXtdRoot(row) && <RelComposesDialogView
                    id={row.id}
                    totalElementsComposes={row.composes.totalElements}
                    totalElementsComposedBy={row.composedBy.totalElements}
                    onSelectItem={onSelectItem}
                    ButtonProps={{size: 'small'}}
                />}
                {isXtdRoot(row) && <RelGroupsDialogView
                    id={row.id}
                    totalElementsGroups={row.groups.totalElements}
                    totalElementsGroupedBy={row.groupedBy.totalElements}
                    onSelectItem={onSelectItem}
                    ButtonProps={{size: 'small'}}
                />}
                {isXtdRoot(row) && <RelSpecializesDialogView
                    id={row.id}
                    totalElementsSpecializes={row.specializes.totalElements}
                    totalElementsSpecializedBy={row.specializedBy.totalElements}
                    onSelectItem={onSelectItem}
                    ButtonProps={{size: 'small'}}
                />}
                {isXtdRoot(row) && <RelActsUponDialogView
                    id={row.id}
                    totalElementsActsUpon={row.actsUpon.totalElements}
                    totalElementsActedUponBy={row.actedUponBy.totalElements}
                    onSelectItem={onSelectItem}
                    ButtonProps={{size: 'small'}}
                />}
            </TableCell>
            <TableCell align={'center'}>
                {onEdit && <EditIconButton
                    onClick={() => onEdit(row)}
                    size='small'
                />}
                {onDelete && <DeleteRowAction
                    title={`Delete ${row.label}`}
                    onConfirm={() => onDelete(row)}
                    ButtonProps={{size: 'small'}}
                />}
            </TableCell>
        </TableRow>
    );
}

RootTableRow.fragments = {
    root: gql`
        fragment RootTableRowRoot on XtdRoot {
            id
            label
            descriptions { id value }
            created
            createdBy
            lastModified
            lastModifiedBy
            versionId
            versionDate
        }
    `
}
