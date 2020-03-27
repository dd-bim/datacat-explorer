import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {TextField} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
    },
    cardHeader: {
        padding: theme.spacing(1, 2),
    },
    list: {
        width: 200,
        height: 230,
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
}));

function not(a, b) {
    return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

export default function ConceptTransferList(props) {
    const classes = useStyles();
    const {
        left,
        right,
        onChangeLeft,
        onChangeRight
    } = props;

    return (
        <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
            <Grid item>
                <ConceptList label="Search selected" items={left} onChange={onChangeLeft} /></Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                </Grid>
            </Grid>
            <Grid item>
                <ConceptList label="Search concepts" items={right} onChange={onChangeRight}/>
            </Grid>
        </Grid>
    );
}

function ConceptList(props) {
    const {
        title,
        items,
        loading,
        onChange,
        ...otherProps
    } = props;
    const classes = useStyles();
    const checked = useState([]);

    return (
        <Card>
            <CardContent>
                <TextField
                    fullWidth
                    {...otherProps}
                    loading={loading}
                    onChange={onChange}
                />
                <Divider/>
                <List className={classes.list} dense component="div" role="list">
                    {items.map(value => {
                        const labelId = `transfer-list-all-item-${value}-label`;

                        return (
                            <ListItem key={value} role="listitem" button>
                                <ListItemIcon>
                                    <Checkbox
                                        checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={`List item ${value + 1}`}/>
                            </ListItem>
                        );
                    })}
                    <ListItem/>
                </List>
            </CardContent>
        </Card>
    );
}
