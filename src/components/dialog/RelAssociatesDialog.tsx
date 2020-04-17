import {XtdRelAssociates, XtdRoot} from "../../types";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import XtdList from "../list/XtdList";
import {DialogActions} from "@material-ui/core";
import Button from "@material-ui/core/Button";

interface RelAssociatesDialogProps<T> {
  entity: T;
  open: boolean;
  onSelect: (entity: XtdRelAssociates) => void;
  onClose: () => void;
}

export default function RelAssociatesDialog<T extends XtdRoot>(props: RelAssociatesDialogProps<T>) {
  const {
    entity: {
      id,
      label,
      associates: {
        nodes: associates,
        page: associatesPage
      },
      associatedBy: {
        nodes: associatedBy,
        page: associatedByPage
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
            <Typography variant={"body1"}>Associates</Typography>
            <XtdList
              items={associates}
              onSelect={item => onSelect(item)}
              PaginationProps={{
                page: associatesPage.pageNumber,
                count: associatesPage.totalPages
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"body1"}>Associated by</Typography>
            <XtdList
              items={associatedBy}
              onSelect={item => onSelect(item)}
              PaginationProps={{
                page: associatedByPage.pageNumber,
                count: associatedByPage.totalPages
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
