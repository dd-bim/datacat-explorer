import React from 'react';
import {XtdCollectionTypes, XtdObjectTypes, XtdRelationshipTypes} from "./types";

export const route = (typename: XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes): string => {
  switch (typename) {
    case XtdObjectTypes.XtdActivity:
      return '/objects/activities';
    case XtdObjectTypes.XtdActor:
      return '/objects/actors';
    case XtdObjectTypes.XtSubject:
      return '/objects/subjects';
    case XtdCollectionTypes.XtdBag:
      return '/collections/bags';
    case XtdCollectionTypes.XtdNest:
      return '/collections/nests';
    case XtdRelationshipTypes.XtdRelGroups:
      return '/relationships/groups';
    default: throw new Error("Unknown type")
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

export const sanitizeTextInput = (x: {id: string | null}) => {
    x.id = x.id === "" ? null : x.id;
};

export const sanitizeRootInput = (input: any) => {
    input.id = input.id === "" ? null : input.id;
    input.names.forEach(sanitizeTextInput);
    input.descriptions = input.descriptions ? input.descriptions : [];
    input.descriptions.forEach(sanitizeTextInput);
};
