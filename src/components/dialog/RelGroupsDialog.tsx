import {XtdRelGroups, XtdRoot} from "../../types";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import XtdList from "../list/XtdList";
import {DialogActions} from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface RelGroupsDialogProps<T> {
  entity: T;
  open: boolean;
  onSelect: (entity: XtdRelGroups) => void;
  onClose: () => void;
}

export default function RelGroupsDialog<T extends XtdRoot>(props: RelGroupsDialogProps<T>) {
  const {
    entity: {
      id,
      label,
      groups: {
        nodes: groups,
        page: groupsPage
      },
      groupedBy: {
        nodes: groupedBy,
        page: groupedByPage
      }
    },
    onSelect,
    onClose,
    ...otherProps
  } = props;

  return (
    <Dialog fullWidth maxWidth="md" {...otherProps}>
      <DialogTitle>
        {label} - {id}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant={"body1"}>Groups</Typography>
            <XtdList
              items={groups}
              onSelect={item => onSelect(item)}
              PaginationProps={{
                page: groupsPage.pageNumber,
                count: groupsPage.totalPages
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"body1"}>Grouped by</Typography>
            <XtdList
              items={groupedBy}
              onSelect={item => onSelect(item)}
              PaginationProps={{
                page: groupedByPage.pageNumber,
                count: groupedByPage.totalPages
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )

}
