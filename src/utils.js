import {
    AllInclusive,
    Assignment,
    DoubleArrow,
    EmojiObjects,
    Functions,
    Gavel,
    Palette,
    Person,
} from '@material-ui/icons';
import React from 'react';

export const removeTypename = (obj) => {
    Object.keys(obj).forEach(key => {
        if (key === '__typename') {
            delete obj[key]
        }
        if (obj[key] && typeof obj[key] === 'object') {
            removeTypename(obj[key]);
        }
    });
    return obj;
};

export const iconDict = label => {
    switch (label) {
        case 'XtdActivity': return <DoubleArrow />;
        case 'XtdActor': return <Person />;
        case 'XtdBag': return <AllInclusive />;
        case 'XtdExternalDocument': return <Gavel />;
        case 'XtdNest':return <Palette />;
        case 'XtdProperty': return <Assignment />;
        case 'XtdSubject': return <EmojiObjects />;
        case 'XtdUnit': return <Functions />;
    }
};

export const sanitizeTextInput = x => {
    x.id = x.id === "" ? null : x.id;
};

export const sanitizeRootInput = input => {
    input.id = input.id === "" ? null : input.id;
    input.names.forEach(sanitizeTextInput);
    input.descriptions = input.descriptions ? input.descriptions : [];
    input.descriptions.forEach(sanitizeTextInput);
};
