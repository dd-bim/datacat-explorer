import TableCell from '@material-ui/core/TableCell';
import XtdChip from './term/XtdChip';
import {toLocaleDateTimeString} from '../dateTime';
import DescriptionButton from './DescriptionButton';
import IconButton from '@material-ui/core/IconButton';
import {DeleteForever, Edit, FilterList} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import List from '@material-ui/core/List';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles(theme => {
    return {
        filterUp: {
            rotate: '180deg',
        }
    };
});

export default function TermTableRow(props) {
    const classes = useStyles();
    const filterUpRef = React.useRef(null);
    const [open, setOpen] = useState(false);
    const {
        toEdit,
        onSelectRow,
        onDeleteRow,
        row
    } = props;
    const {
        uniqueId,
        versionId,
        versionDate,
        createdAt,
        updatedAt,
        descriptions,
        associates,
        associatedBy,
    } = row;

    const handleClose = event => {
        if (filterUpRef.current && filterUpRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    return (
        <TableRow key={uniqueId}>
            <TableCell>
                <XtdChip {...row} />
            </TableCell>
            <TableCell>{[versionId, toLocaleDateTimeString(versionDate, 'll')].join(' | ')}</TableCell>
            <TableCell>{toLocaleDateTimeString(createdAt)}</TableCell>
            <TableCell>{toLocaleDateTimeString(updatedAt)}</TableCell>
            <TableCell>
                <DescriptionButton descriptions={descriptions}/>
            </TableCell>
            <TableCell>
                <IconButton disabled={!associates || !associates.length} onClick={() => onSelectRow(row)}>
                    <FilterList/>
                </IconButton>
                <IconButton buttonRef={filterUpRef}
                            disabled={!associatedBy || !associatedBy.length}
                            onClick={() => setOpen(true)}>
                    <FilterList className={classes.filterUp}/>
                </IconButton>
                <Popper open={open} anchorEl={filterUpRef.current} placement={'left'} transition>
                    {({TransitionProps}) => (
                        <Grow {...TransitionProps}>
                            <Paper className={classes.popover} elevation={3}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <List component="ul" dense={true}>
                                        {associatedBy.map(x => (
                                            <li key={x.uniqueId}>
                                                <XtdChip onClick={() => onSelectRow(x.relatingObject)} {...x.relatingObject} />
                                            </li>
                                        ))}
                                    </List>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <IconButton component={Link} to={`${toEdit}/${uniqueId}`}>
                    <Edit/>
                </IconButton>
                <IconButton onClick={() => onDeleteRow(uniqueId)}>
                    <DeleteForever/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}
