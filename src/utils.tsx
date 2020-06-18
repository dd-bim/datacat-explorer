import * as React from "react";
import {
    AssignsCollectionsInput,
    AssignsCollectionsUpdateInput,
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

interface Properties {
    title: string
    description?: string
    route: string
}

type CatalogItems = {
    [name: string]: Properties;
};

export const CatalogItems: CatalogItems = {
    'XtdExternalDocument': {
        title: 'External document',
        route: '/externalDocuments'
    },
    'XtdActivity': {
        title: 'Activity',
        route: '/objects/activities'
    },
    'XtdActor': {
        title: 'Actor',
        route: '/objects/actors'
    },
    'XtdMeasureWithUnit': {
        title: 'Measure',
        route: '/objects/measures'
    },
    'XtdSubject': {
        title: 'Subject',
        route: '/objects/subjects'
    },
    'XtdUnit': {
        title: 'Unit',
        route: '/objects/units'
    },
    'XtdProperty': {
        title: 'Property',
        route: '/objects/properties'
    },
    'XtdValue': {
        title: 'Value',
        route: '/objects/values'
    },
    'XtdBag': {
        title: 'Bag',
        route: '/collections/bags'
    },
    'XtdNest': {
        title: 'Nest',
        route: '/collections/nests'
    },
    'XtdRelAssignsCollections': {
        title: 'Assigns collections relationship',
        route: '/relationships/assignsCollections'
    },
    'XtdRelDocuments': {
        title: 'Documents relationship',
        route: '/relationships/documents'
    },
    'XtdRelCollects': {
        title: 'Collects relationship',
        route: '/relationships/collects'
    },
    'XtdRelAssociates': {
        title: 'Associates relationship',
        route: '/relationships/associates'
    },
    'XtdRelGroups': {
        title: 'Groups relationship',
        route: '/relationships/groups'
    },
    'XtdRelSpecializes': {
        title: 'Specializes relationship',
        route: '/relationships/specializes'
    },
    'XtdRelActsUpon': {
        title: 'Acts upon relationship',
        route: '/relationships/actsUpon'
    },
}

export const route = (typename: keyof CatalogItems): string => {
    return CatalogItems[typename].route;
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

export const sanitizeAssignsCollectionsInput = (input: AssignsCollectionsInput | AssignsCollectionsUpdateInput) => {
    sanitizeRootInput(input);
}
