import React from "react";
import MUITable from "@material-ui/core/Table"
import TableContainer from "@material-ui/core/TableContainer";
import TableToolbar from "./TableToolbar";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";

export default function Table() {
    return (
        <TableContainer>
            <TableToolbar />
            <MUITable>
                <TableHead>

                </TableHead>
                <TableBody>

                </TableBody>
                <TableFooter>
                    <TableRow>
                        {/*<TablePagination />*/}
                    </TableRow>
                </TableFooter>
            </MUITable>
        </TableContainer>
    );
}
