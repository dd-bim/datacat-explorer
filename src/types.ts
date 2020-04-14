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
    XtdRelGroups = 'XtdRelGroups',
}

export interface XtdLanguage {
    __typename: EntityTypes.XtdLanguage;
    id: string;
    languageCode: string;
    languageNameInEnglish: string;
    languageNameInSelf: string;
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

export interface Entity {
    __typename: EntityTypes | XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes;
    id: string;
    created: Date;
    lastModified: Date;
}

export interface XtdExternalDocument extends Entity {
    __typename: EntityTypes.XtdExternalDocument;
    names: XtdName[];
}

export interface XtdRoot extends Entity {
    __typename: XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes;
    versionId: string;
    versionDate: string;
    label: string;
    names: XtdName[]
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
    __typename: XtdRelationshipTypes;
}

export interface XtdRelGroups extends XtdRelationship {
    __typename: XtdRelationshipTypes;
    relatingThing: XtdRoot
    relatedThings: XtdRoot[]
}
