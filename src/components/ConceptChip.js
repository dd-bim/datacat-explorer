import React from "react";
import Icon from "@material-ui/core/Icon";
import Chip from "@material-ui/core/Chip";

import '@fortawesome/fontawesome-free/css/all.css';

const icons = {
    'XtdExternalDocument': 'fa-book',
    'XtdRelDocuments': 'fa-book-reader',
    'XtdActor': 'fa-user',
    'XtdActivity': 'fa-cog',
    'XtdRelSequence': 'fa-cogs',
    'XtdBag': 'fa-not-equal',
    'XtdNest': 'fa-equals',
    'XtdSubject': 'fa-brain',
};

export default function({ name, type }) {

    return (
        <Chip icon={<Icon className={"fas " + icons[type]} style={{ fontSize: '1rem' }}/>} variant="outlined" size="small" label={name}/>
    );
}
