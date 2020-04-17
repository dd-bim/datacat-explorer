type PageSize = 10 | 25 | 50 | 100;

export interface PagingOptions {
    pageSize?: number;
    pageNumber?: number;
}

export interface QueryArgs {
    term?: string;
    options?: PagingOptions;
}

export interface Page {
    pageNumber: number;
    pageSize: PageSize;
    totalPages: number;
    totalElements: number;
}

export interface QueryConnection<T> {
    nodes: T[]
    page: Page
}

export enum EntityTypes {
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
    XtdAssociates = 'XtdAssociates',
}

export enum XtdRelAssociatesTypes {
    XtdRelSpecializes = 'XtdRelSpecializes',
    XtdRelGroups = 'XtdRelGroups',
}

export interface XtdLanguage {
    __typename: EntityTypes.XtdLanguage;
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

export interface XtdEntity {
    __typename: EntityTypes | XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes | XtdRelAssociatesTypes;
    id: string;
    created: Date;
    lastModified: Date;
    label: string;
    names: XtdName[];
}

export interface XtdExternalDocument extends XtdEntity {
    __typename: EntityTypes.XtdExternalDocument;
}

export interface XtdRoot extends XtdEntity {
    __typename: XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes | XtdRelAssociatesTypes;
    versionId: string;
    versionDate: string;
    descriptions: XtdDescription[]
    groups: QueryConnection<XtdRelGroups>
    groupedBy: QueryConnection<XtdRelGroups>
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

export interface XtdCollection extends XtdRoot {
    __typename: XtdCollectionTypes;
}

export interface XtdBag extends XtdCollection {
    __typename: XtdCollectionTypes;
}

export interface XtdNest extends XtdCollection {
    __typename: XtdCollectionTypes;
}

export interface XtdRelationship extends XtdRoot {
    __typename: XtdRelationshipTypes | XtdRelAssociatesTypes;
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
    __typename: XtdRelationshipTypes.XtdAssociates | XtdRelAssociatesTypes;
    relatingThing: XtdRoot
    relatedThings: XtdRoot[]
}

export interface XtdRelGroups extends XtdRelAssociates {
    __typename: XtdRelAssociatesTypes.XtdRelGroups;
}

export interface XtdRelSpecializes extends XtdRelationship {
    __typename: XtdRelAssociatesTypes.XtdRelSpecializes;
}
