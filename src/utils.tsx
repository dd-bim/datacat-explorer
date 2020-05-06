import React from 'react';
import {XtdCollectionTypes, XtdObjectTypes, XtdRelationshipTypes, XtdTypes} from "./types";

export const route = (typename: string): string => {
    switch (typename) {
        case XtdTypes.XtdExternalDocument:
            return '/externalDocuments';
        case XtdObjectTypes.XtdActivity:
            return '/objects/activities';
        case XtdObjectTypes.XtdActor:
            return '/objects/actors';
        case XtdObjectTypes.XtdSubject:
            return '/objects/subjects';
        case XtdObjectTypes.XtdUnit:
            return '/objects/units';
        case XtdObjectTypes.XtdProperty:
            return '/objects/properties';
        case XtdCollectionTypes.XtdBag:
            return '/collections/bags';
        case XtdCollectionTypes.XtdNest:
            return '/collections/nests';
        case XtdRelationshipTypes.XtdRelDocuments:
            return '/relationships/documents';
        case XtdRelationshipTypes.XtdRelCollects:
            return '/relationships/collects';
        case XtdRelationshipTypes.XtdRelAssociates:
            return '/relationships/associates';
        case XtdRelationshipTypes.XtdRelGroups:
            return '/relationships/groups';
        case XtdRelationshipTypes.XtdRelSpecializes:
            return '/relationships/specializes';
        case XtdRelationshipTypes.XtdRelActsUpon:
            return '/relationships/actsUpon';
        default:
            throw new Error("Unknown type")
    }
};

export const removeTypename = (obj: any) => {
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

export const sanitizeTextInput = (x: { id: string | null }) => {
    x.id = x.id === "" ? null : x.id;
};

export const sanitizeRootInput = (input: any) => {
    input.id = input.id === "" ? null : input.id;
    input.names.forEach(sanitizeTextInput);
    input.descriptions = input.descriptions ? input.descriptions : [];
    input.descriptions.forEach(sanitizeTextInput);
};
