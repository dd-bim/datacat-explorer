import * as React from "react";
import {EntityInput, EntityUpdateInput, RootInput, RootUpdateInput, TextInput} from "./generated/types";

export const route = (typename: string): string => {

    switch (typename) {
        case 'XtdExternalDocument':
            return '/externalDocuments';
        case 'XtdActivity':
            return '/objects/activities';
        case 'XtdActor':
            return '/objects/actors';
        case 'XtdSubject':
            return '/objects/subjects';
        case 'XtdUnit':
            return '/objects/units';
        case 'XtdProperty':
            return '/objects/properties';
        case 'XtdBag':
            return '/collections/bags';
        case 'XtdNest':
            return '/collections/nests';
        case 'XtdRelDocuments':
            return '/relationships/documents';
        case 'XtdRelCollects':
            return '/relationships/collects';
        case 'XtdRelAssociates':
            return '/relationships/associates';
        case 'XtdRelGroups':
            return '/relationships/groups';
        case 'XtdRelSpecializes':
            return '/relationships/specializes';
        case 'XtdRelActsUpon':
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

function validId(input: { id?: string | null }) {
    return input.id && input.id.trim();
}

export const sanitizeTextInput = (input: TextInput) => {
    if (!validId(input)) {
        delete input.id;
    }
};

const validTextInputPredicate = (text: TextInput) => text.value && text.value.trim();

export const sanitizeEntityInput = (input: EntityInput | EntityUpdateInput) => {
    if (!validId(input)) {
        delete input.id;
    }
    input.names = input.names.filter(validTextInputPredicate);
    input.names.forEach(sanitizeTextInput);
}

export const sanitizeRootInput = (input: RootInput | RootUpdateInput) => {
    sanitizeEntityInput(input);
    input.descriptions = input.descriptions.filter(validTextInputPredicate);
    input.descriptions.forEach(sanitizeTextInput);
}
