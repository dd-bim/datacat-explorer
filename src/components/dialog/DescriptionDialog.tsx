import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import {XtdDescription} from "../../types";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

interface DescriptionDialogProps {
  title: string;
  descriptions: XtdDescription[];
  open: boolean;
  onClose: () => void;
}

export default function DescriptionDialog(props: DescriptionDialogProps) {
  const {
    title,
    onClose,
    descriptions,
    ...otherProps
  } = props;

  const listItems = descriptions.reduce((acc: JSX.Element[], {value}, index) => {
    acc.push(
      <ListItem key={index} component="li">
        <ListItemText primary={value}/>
      </ListItem>
    );

    if (index < descriptions.length - 1) {
      acc.push(<Divider key={index + '-divider'} />);
    }
    return acc;
  }, []);

  return (
    <Dialog onClose={onClose} aria-labelledby="dialog-title" {...otherProps}>
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      <DialogContent>
        <List component="ul" dense={true}>
          {listItems}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
