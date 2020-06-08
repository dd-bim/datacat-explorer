import * as React from "react";
import {languages} from "./lang";
import {EntityInput, EntityUpdateInput, TextFragment, TextInput} from "./generated/types";

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

export const defaultTextInputs = () => Object
    .keys(languages)
    .map(languageCode => ({
        id: '',
        languageCode,
        value: ''
    }));

export const mapTextFragmentToTextInput = ({id, language, value}: TextFragment): TextInput => ({
    id,
    languageCode: language.id,
    value
});

export const sanitizeRootInput = (input: any) => {
    input.id = input.id === "" ? null : input.id;
    input.names.forEach(sanitizeTextInput);
    input.descriptions = input.descriptions ? input.descriptions : [];
    input.descriptions.forEach(sanitizeTextInput);
};

export const defaultEntityInput = (): EntityInput => ({
    id: '',
    names: defaultTextInputs()
});

function validId(input: { id?: string | null }) {
    return input.id && input.id.trim();
}

export const sanitizeTextInput = (input: TextInput) => {
    if (!validId(input)) {
        delete input.id;
    }
};

export const sanitizeEntityInput = (input: EntityInput | EntityUpdateInput) => {
    if (!validId(input)) {
        delete input.id;
    }
    input.names = input.names.filter(name => name.value && name.value.trim());
    input.names.forEach(sanitizeTextInput);
}
