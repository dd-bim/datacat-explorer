import IconButton from '@material-ui/core/IconButton';
import React, {useState} from 'react';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core';
import {Description} from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => {
    return {
        popover: {
            'z-index': theme.zIndex.tooltip,
        },
    };
});

export default function (props) {
    const classes = useStyles();
    const {descriptions} = props;
    const [open, setOpen] = useState(false);
    const buttonRef = React.useRef(null);

    const listItems = descriptions.reduce((acc, {value}, index) => {
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

    const handleClose = event => {
        if (buttonRef.current && buttonRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    if (descriptions.length === 0) {
        return <React.Fragment />
    }

    return (
        <React.Fragment>
            <IconButton
                ref={buttonRef}
                onClick={() => setOpen(true)}
            >
                <Description />
            </IconButton>
            <Popper open={open} anchorEl={buttonRef.current} placement={'top'} transition>
                {({TransitionProps}) => (
                    <Grow {...TransitionProps}>
                        <Paper className={classes.popover} elevation={3}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <List component="ul" dense={true}>
                                    {listItems}
                                </List>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}
