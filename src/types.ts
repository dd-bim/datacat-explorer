export interface XtdLanguage {
	id: string;
	languageNameInEnglish: string;
	languageNameInSelf: string;
}

export interface XtdLanguageRepresentation {
	id: string;
	languageCode: string;
	languageName: XtdLanguage;
	value: string;
}

export interface XtdName extends XtdLanguageRepresentation {
}

export interface XtdDescription extends XtdLanguageRepresentation {
}

export enum XtdObjectTypes {
  XtdActivity = 'XtdActivity',
  XtdActor = 'XtdActor',
  XtSubject = 'XtdSubject'
}

export enum XtdCollectionTypes {
  XtdBag = 'XtdBag',
  XtdNest = 'XtdNest',
}

export enum XtdRelationshipTypes {
  XtdRelGroups = 'XtdRelGroups'
}

export interface XtdRoot {
  __typename: XtdObjectTypes | XtdCollectionTypes | XtdRelationshipTypes;
	id: string;
	created: Date;
	lastModified: Date;
	versionId: string;
	versionDate: string;
	label: string;
	names: [XtdName]
	descriptions: [XtdDescription]
	groups: XtdRootConnection
	groupedBy: XtdRootConnection
}

type PageSize = 10 | 25 | 50 | 100;

export interface Page {
	pageNumber: number;
	pageSize: PageSize;
	totalPages: number;
	totalElements: number;
}

export interface XtdRootConnection {
	nodes: [XtdRoot]
	page: Page
}
