import TableRow, {TableRowProps} from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import * as React from "react";
import {useState} from "react";
import {toLocaleDateTimeString} from "../../dateTime";
import EditIconButton from "../button/EditIconButton";
import {XtdRoot} from "../../types";
import {gql} from "@apollo/client";
import HelpIconButton from "../button/HelpIconButton";
import {IconButtonProps} from "@material-ui/core";
import DeleteIconButton from "../button/DeleteIconButton";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import EntityIcon from "../icons/EntityIcon";
import DescriptionDialog from "../dialog/DescriptionDialog";
import DeleteDialog from "../dialog/DeleteDialog";
import RelGroupsIconButton from "../button/RelGroupsIconButton";
import RelGroupsDialog from "../dialog/RelGroupsDialog";

interface XtdTableRowProps {
  row: XtdRoot;
  onNavSelect: (entity: XtdRoot) => void;
  onEdit?: () => void;
  onDelete?: () => void;
  ButtonProps?: IconButtonProps;
}

const useStyles = makeStyles(theme => ({
  idLabel: {
    'color': theme.palette.text.hint
  }
}));

export default function XtdTableRow(props: XtdTableRowProps & TableRowProps) {
  const {
    row: {
      id,
      label,
      descriptions,
      versionId,
      versionDate,
      created,
      lastModified,
      groups,
      groupedBy
    },
    onNavSelect,
    onEdit,
    onDelete,
    ButtonProps,
    ...otherProps
  } = props;
  const classes = useStyles();
  const [openRelGroupsDialog, setOpenRelGroupsDialog] = useState(false);
  const [openDescriptionDialog, setOpenDescriptionDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const versionString = [
    versionId,
    toLocaleDateTimeString(versionDate, 'll')
  ].filter(x => x).join(' | ');

  return (
    <TableRow { ...otherProps }>
      <TableCell>
        <EntityIcon entity={props.row} fontSize={'small'} />
      </TableCell>
      <TableCell>
        <Typography variant="body1">{label}</Typography>
        <Typography className={classes.idLabel} variant="body2">{id}</Typography>
      </TableCell>
      <TableCell>{toLocaleDateTimeString(created)}</TableCell>
      <TableCell>{toLocaleDateTimeString(lastModified)}</TableCell>
      <TableCell>{versionString}</TableCell>
      <TableCell align="center">
        <RelGroupsIconButton
          disabled={(groups.page.totalElements + groupedBy.page.totalElements) === 0}
          onClick={() => setOpenRelGroupsDialog(true)}
          { ...ButtonProps }
        />
        <RelGroupsDialog
          entity={props.row}
          open={openRelGroupsDialog}
          onSelect={onNavSelect}
          onClose={() => setOpenRelGroupsDialog(false)}
        />


      </TableCell>
      <TableCell align="center">
        <HelpIconButton
          disabled={!descriptions.length}
          onClick={() => setOpenDescriptionDialog(true)}
          { ...ButtonProps }
        />
        {!!descriptions.length && (
          <DescriptionDialog
            title={label}
            descriptions={descriptions}
            open={openDescriptionDialog}
            onClose={() => setOpenDescriptionDialog(false)}
          />
        )}

        <EditIconButton
          disabled={!onEdit}
          onClick={onEdit ? () => onEdit() : undefined}
          { ...ButtonProps }
        />

        <DeleteIconButton
          disabled={!onDelete}
          onClick={() => setOpenDeleteDialog(true)}
          { ...ButtonProps }
         />
        {onDelete && (
          <DeleteDialog
            open={openDeleteDialog}
            onCancel={() => setOpenDeleteDialog(false)}
            onConfirm={() => onDelete()}
          />
        )}
      </TableCell>
    </TableRow>
  );
}

XtdTableRow.fragments = {
  root: gql`
    fragment XtdTableRow on XtdRoot {
      id
      created
      lastModified
      label
      versionId
      versionDate
    }
  `
};
