type PageSize = 10 | 25 | 50 | 100;

export interface PagingOptions {
    pageSize?: number;
    pageNumber?: number;
}

export interface PageInfo {
    pageNumber: number;
    pageSize: PageSize;
    totalPages: number;
}

export interface QueryConnection<T> {
    nodes: T[]
    pageInfo: PageInfo
    totalElements: number;
}

export enum XtdTypes {
    XtdLanguage = 'XtdLanguage',
    XtdExternalDocument = 'XtdExternalDocument',
}

export enum XtdLanguageRepresentationTypes {
    XtdName = 'XtdName',
    XtdDescription = 'XtdDescription',
}

export enum XtdObjectTypes {
    XtdActivity = 'XtdActivity',
    XtdActor = 'XtdActor',
    XtdClassification = 'XtdClassification',
    XtdMeasureWithUnit = 'XtdMeasureWithUnit',
    XtdProperty = 'XtdProperty',
    XtdSubject = 'XtdSubject',
    XtdUnit = 'XtdUnit',
    XtdValue = 'XtdValue',
}

export enum XtdCollectionTypes {
    XtdBag = 'XtdBag',
    XtdNest = 'XtdNest',
}

export enum XtdRelationshipTypes {
    XtdRelDocuments = 'XtdRelDocuments',
    XtdRelAssociates = 'XtdRelAssociates',
    XtdRelComposes = 'XtdRelComposes',
    XtdRelSpecializes = 'XtdRelSpecializes',
    XtdRelGroups = 'XtdRelGroups',
    XtdRelActsUpon = 'XtdRelActsUpon',
    XtdRelCollects = 'XtdRelCollects',
}

export interface XtdLanguage {
    __typename: XtdTypes.XtdLanguage;
    id: string;
    languageCode: string;
    languageNameInEnglish: string;
    languageNameInSelf: string;
}

export interface TextInput {
    languageCode: string;
    value: string;
}

export interface XtdLanguageRepresentation {
    __typename: XtdLanguageRepresentationTypes;
    id: string;
    created: Date;
    lastModified: Date;
    languageCode: string;
    languageName: XtdLanguage;
    value: string;
}

export interface XtdName extends XtdLanguageRepresentation {
    __typename: XtdLanguageRepresentationTypes.XtdName;
}

export interface XtdDescription extends XtdLanguageRepresentation {
    __typename: XtdLanguageRepresentationTypes.XtdDescription;
}

export type XtdEntityTypes = XtdTypes | XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes;

export interface XtdEntity {
    __typename: XtdEntityTypes;
    id: string;
    created: Date;
    createdBy: string;
    lastModified: Date;
    lastModifiedBy: string;
    label: string;
    names: XtdName[];
}

export interface XtdExternalDocument extends XtdEntity {
    __typename: XtdTypes.XtdExternalDocument;
}

export type XtdRootTypes = XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes;

export function isXtdRoot(row: XtdEntity): row is XtdRoot {
    return isXtdObject(row) || isXtdCollection(row) || isXtdRelationship(row);
}

export interface XtdRoot extends XtdEntity {
    __typename: XtdRootTypes;
    versionId: string;
    versionDate: string;
    descriptions: XtdDescription[];
    associates: QueryConnection<XtdRelAssociates>;
    associatedBy: QueryConnection<XtdRelAssociates>;
    composes: QueryConnection<XtdRelComposes>;
    composedBy: QueryConnection<XtdRelComposes>;
    groups: QueryConnection<XtdRelGroups>;
    groupedBy: QueryConnection<XtdRelGroups>;
    specializes: QueryConnection<XtdRelSpecializes>;
    specializedBy: QueryConnection<XtdRelSpecializes>;
    actsUpon: QueryConnection<XtdRelActsUpon>;
    actedUponBy: QueryConnection<XtdRelActsUpon>;
}

export function isXtdObject(entity: XtdEntity): entity is XtdObject {
    return (<any>Object).values(XtdObjectTypes).includes(entity.__typename);
}

export interface XtdObject extends XtdRoot {
    __typename: XtdObjectTypes;
}

export interface XtdActivity extends XtdObject {
    __typename: XtdObjectTypes.XtdActivity;
}

export interface XtdActor extends XtdObject {
    __typename: XtdObjectTypes.XtdActor;
}

export interface XtdClassification extends XtdObject {
    __typename: XtdObjectTypes.XtdClassification;
}

export interface XtdSubject extends XtdObject {
    __typename: XtdObjectTypes.XtdSubject;
}

export interface XtdUnit extends XtdObject {
    __typename: XtdObjectTypes.XtdUnit;
}

export interface XtdProperty extends XtdObject {
    __typename: XtdObjectTypes.XtdProperty;
}

export function isXtdCollection(entity: XtdEntity): entity is XtdCollection {
    return (<any>Object).values(XtdCollectionTypes).includes(entity.__typename);
}

export interface XtdCollection extends XtdRoot {
    __typename: XtdCollectionTypes;
}

export interface XtdBag extends XtdCollection {
    __typename: XtdCollectionTypes;
}

export interface XtdNest extends XtdCollection {
    __typename: XtdCollectionTypes;
}

export function isXtdRelationship(entity: XtdEntity): entity is XtdRelationship {
    return (<any>Object).values(XtdRelationshipTypes).includes(entity.__typename);
}

export interface XtdRelationship extends XtdRoot {
    __typename: XtdRelationshipTypes;
}

export interface AssociationInput {
    id?: string;
    versionId: string;
    versionDate: string;
    names: TextInput[];
    descriptions?: TextInput[];
    relatingThing: string;
    relatedThings: string[];
}

export interface XtdRelAssociates extends XtdRelationship {
    __typename: XtdRelationshipTypes.XtdRelAssociates;
    relatingThing: XtdRoot;
    relatedThings: QueryConnection<XtdRoot>;
}

export interface XtdRelComposes extends XtdRelationship {
    __typename: XtdRelationshipTypes.XtdRelComposes;
    relatingThing: XtdRoot;
    relatedThings: QueryConnection<XtdRoot>;
}

export interface XtdRelGroups extends XtdRelationship {
    __typename: XtdRelationshipTypes.XtdRelGroups;
    relatingThing: XtdRoot;
    relatedThings: QueryConnection<XtdRoot>;
}

export interface XtdRelSpecializes extends XtdRelationship {
    __typename: XtdRelationshipTypes.XtdRelSpecializes;
    relatingThing: XtdRoot;
    relatedThings: QueryConnection<XtdRoot>;
}

export interface XtdRelActsUpon extends XtdRelationship {
    __typename: XtdRelationshipTypes.XtdRelActsUpon;
    relatingThing: XtdRoot;
    relatedThings: QueryConnection<XtdRoot>;
}
