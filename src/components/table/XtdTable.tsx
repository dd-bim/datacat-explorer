import * as React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {Page, XtdRoot} from "../../types";
import XtdTableRow from "./XtdTableRow";
import TableHead from "@material-ui/core/TableHead";
import {IconButtonProps, TableBody, TableProps} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import {gql} from "@apollo/client";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";

interface RowAction<T> {
  (row: T): void;
}

interface XtdTableProps<T> {
  rows: T[];
  page: Page;
  onNavSelect: RowAction<T>;
  onHelp?: RowAction<T>;
  onEdit?: RowAction<T>;
  onDelete?: RowAction<T>;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  IconButtonProps?: IconButtonProps
}

export default function XtdTable<T extends XtdRoot<T>>(props: XtdTableProps<T> & TableProps) {
  const {
    rows,
    page: {
      pageNumber,
      pageSize,
      totalElements
    },
    onNavSelect,
    onEdit,
    onDelete,
    onChangePage,
    onChangeRowsPerPage,
    className,
    IconButtonProps,
    ...otherProps
  } = props;

  const tableHead = (
    <TableRow>
      <TableCell colSpan={2}>Label</TableCell>
      <TableCell>Created</TableCell>
      <TableCell>Last modified</TableCell>
      <TableCell>Version</TableCell>
      <TableCell>Relations</TableCell>
      <TableCell align={'center'}>Actions</TableCell>
    </TableRow>
  );

  return (
    <Paper className={className}>
      <TableContainer>
        <Table {...otherProps}>
          <TableHead>
            {tableHead}
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <XtdTableRow
                hover
                key={row.id}
                row={row}
                onNavSelect={onNavSelect}
                onEdit={onEdit ? () => onEdit(row) : undefined}
                onDelete={onDelete ? () => onDelete(row) : undefined}
                ButtonProps={IconButtonProps}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={totalElements}
        rowsPerPage={pageSize}
        page={pageNumber}
        onChangeRowsPerPage={onChangeRowsPerPage}
        onChangePage={onChangePage}
      />
    </Paper>
  );
}

XtdTable.fragments = {
  root: gql`
    fragment XtdTableRoot on XtdRoot {
      id
      descriptions { id value }
      ...XtdTableRow
    }
    ${XtdTableRow.fragments.root}
  `,
  page: gql`
    fragment XtdTablePage on Page {
      totalElements
      pageSize
      pageNumber
    }
  `
};
