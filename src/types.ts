type PageSize = 10 | 25 | 50 | 100;

export interface Page {
  pageNumber: number;
  pageSize: PageSize;
  totalPages: number;
  totalElements: number;
}

export enum EntityTypes {
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
	id: string;
	languageCode: string;
	languageNameInEnglish: string;
	languageNameInSelf: string;
}

export interface Entity {
  __typename: EntityTypes | XtdLanguageRepresentationTypes | XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes;
  id: string;
  created: Date;
  lastModified: Date;
}

export interface XtdLanguageRepresentation extends Entity {
  __typename: XtdLanguageRepresentationTypes;
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
	groups: XtdRootConnection
	groupedBy: XtdRootConnection
}

export interface XtdObject extends XtdRoot {
  __typename: XtdObjectTypes;
}

export interface XtdCollection extends XtdRoot {
  __typename: XtdCollectionTypes;
}

export interface XtdRelationship extends XtdRoot {
  __typename: XtdRelationshipTypes;
}

export interface XtdRootConnection {
	nodes: [XtdRoot]
	page: Page
}
