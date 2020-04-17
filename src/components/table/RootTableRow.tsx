import TableCell from "@material-ui/core/TableCell";
import EntityIcon from "../icons/EntityIcon";
import Typography from "@material-ui/core/Typography";
import {toLocaleDateTimeString} from "../../dateTime";
import TableRow from "@material-ui/core/TableRow";
import * as React from "react";
import {XtdEntity, XtdRoot} from "../../types";
import {makeStyles} from "@material-ui/core/styles";
import EditIconButton from "../button/EditIconButton";
import DeleteRowAction from "./DeleteRowAction";
import DescriptionRowAction from "./DescriptionRowAction";
import RelGroupsRowAction from "./RelGroupsRowAction";
import {gql} from "@apollo/client";
import {HtmlTooltip} from "../HtmlTooltip";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {List} from "@material-ui/core";
import RelAssociatesRowAction from "./RelAssociatesRowAction";

const useStyles = makeStyles(theme => ({
    describedEntity: {
        'text-descoration': 'underlined'
    },
    idLabel: {
        'color': theme.palette.text.hint,
        'font-family': 'monospace'
    }
}));

export interface XtdRootTableRowProps<T> {
    row: T;
    onEntitySelect: (entity: XtdEntity) => void;
    onEdit: (row: T) => void;
    onDelete: (row: T) => void;
}

export default function RootTableRow<T extends XtdRoot>(props: XtdRootTableRowProps<T>) {
    const {row, onEntitySelect, onEdit, onDelete} = props;
    const classes = useStyles();
    const hasDescriptions = row.descriptions.length;

    let entityLabel;
    if (hasDescriptions) {
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

                                if (index < hasDescriptions - 1) {
                                    acc.push(<Divider key={index + '-divider'}/>);
                                }
                                return acc;
                            }, [])}
                        </List>
                    </React.Fragment>
                }
            >
                <TableCell>
                    <Typography variant="body1">{row.label}</Typography>
                    <Typography className={classes.idLabel} variant="body2">{row.id}</Typography>
                </TableCell>
            </HtmlTooltip>
        );
    } else {
        entityLabel = (
            <TableCell>
                <Typography variant="body1">{row.label}</Typography>
                <Typography className={classes.idLabel} variant="body2">{row.id}</Typography>
            </TableCell>
        );
    }

    return (
        <TableRow>
            <TableCell align={'center'}>
                <EntityIcon
                    entity={row}
                    fontSize="small"
                    color={hasDescriptions ? 'inherit' : 'disabled'}
                />
            </TableCell>
            {entityLabel}
            <TableCell>{toLocaleDateTimeString(row.created)}</TableCell>
            <TableCell>{toLocaleDateTimeString(row.lastModified)}</TableCell>
            <TableCell>{row.versionId} | {toLocaleDateTimeString(row.versionDate, 'll')}</TableCell>
            <TableCell align={'center'}>
                <RelAssociatesRowAction
                    row={row}
                    onSelect={onEntitySelect}
                    ButtonProps={{ size: 'small' }}
                />
                <RelGroupsRowAction
                    row={row}
                    onSelect={onEntitySelect}
                    ButtonProps={{ size: 'small' }}
                />
            </TableCell>
            <TableCell align={'center'}>
                <EditIconButton
                    onClick={() => onEdit(row)}
                    size='small'
                />
                <DeleteRowAction
                    title={`Delete ${row.label}`}
                    onConfirm={() => onDelete(row)}
                    ButtonProps={{size: 'small'}}
                />
            </TableCell>
        </TableRow>
    );
}

RootTableRow.fragments = {
    root: gql`
        fragment RootTableRowRoot on XtdRoot {
            label
            created
            lastModified
            versionId
            versionDate
            ...RelGroupsRowActionRoot
            ...DescriptionRowActionRoot
        }
        ${RelGroupsRowAction.fragments.root}
        ${DescriptionRowAction.fragments.root}
    `
}
