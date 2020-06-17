import * as React from "react";
import {
    CollectsInput,
    CollectsUpdateInput,
    EntityInput,
    EntityUpdateInput,
    MeasureInput,
    MeasureUpdateInput,
    RootInput,
    RootUpdateInput,
    TextInput,
    ValueInput,
    ValueUpdateInput
} from "./generated/types";

export const route = (typename: string): string => {

    switch (typename) {
        case 'XtdExternalDocument':
            return '/externalDocuments';
        case 'XtdActivity':
            return '/objects/activities';
        case 'XtdActor':
            return '/objects/actors';
        case 'XtdMeasureWithUnit':
            return '/objects/measures';
        case 'XtdSubject':
            return '/objects/subjects';
        case 'XtdUnit':
            return '/objects/units';
        case 'XtdProperty':
            return '/objects/properties';
        case 'XtdValue':
            return '/objects/values';
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

function validIdPredicate(input: { id?: string | null }) {
    return input.id && input.id.trim();
}

export const sanitizeTextInput = (input: TextInput) => {
    if (!validIdPredicate(input)) {
        delete input.id;
    }
};

const validTextInputPredicate = (text: TextInput) => {
    return (text.languageCode && text.languageCode.trim())
        && (text.value && text.value.trim());
};

export const sanitizeEntityInput = (input: EntityInput | EntityUpdateInput) => {
    if (!validIdPredicate(input)) {
        delete input.id;
    }
    input.names = input.names.filter(validTextInputPredicate);
    input.names.forEach(sanitizeTextInput);
};

export const sanitizeRootInput = (input: RootInput | RootUpdateInput) => {
    sanitizeEntityInput(input);
    input.descriptions = input.descriptions.filter(validTextInputPredicate);
    input.descriptions.forEach(sanitizeTextInput);
};

export const sanitizeValueInput = (input: ValueInput | ValueUpdateInput) => {
    sanitizeRootInput(input);
    if (!input.toleranceType) {
        delete input.toleranceType;
    }
    if (!input.lowerTolerance) {
        delete input.lowerTolerance
    }
    if (!input.upperTolerance) {
        delete input.upperTolerance
    }
    if (!input.valueType) {
        delete input.valueType
    }
    if (!input.valueRole) {
        delete input.valueRole
    }
    if (!input.nominalValue) {
        delete input.nominalValue;
    }
};

export const sanitizeMeasureInput = (input: MeasureInput | MeasureUpdateInput) => {
    sanitizeRootInput(input);
    if (!input.unitComponent) {
        delete input.unitComponent;
    }
}

export const sanitizeCollectsInput = (input: CollectsInput | CollectsUpdateInput) => {
    sanitizeRootInput(input);
}
