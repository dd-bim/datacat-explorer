import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    form: {
        'padding': theme.spacing(1),
        '& > *': {
            'margin-bottom': theme.spacing(1.5)
        }
    },
}));

export default function Form(props) {
    const {
        children,
        title,
        onSubmit = e => e.preventDefault(),
        ...otherProps
    } = props;
    const classes = useStyles();

    return (
        <form className={classes.form} autoComplete={'false'} noValidate={true} onSubmit={onSubmit} {...otherProps}>
            <Typography variant={'overline'}>{title}</Typography>
            {children}
        </form>
    )
}
