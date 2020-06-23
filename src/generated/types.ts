import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AssignsCollectionsInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingObject: Scalars['ID'];
  relatedCollections: Array<Scalars['ID']>;
};

export type AssignsCollectionsUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingObject: Scalars['ID'];
  relatedCollections: Array<Scalars['ID']>;
};

export type AssignsPropertyWithValuesInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingObject: Scalars['ID'];
  relatedProperty: Scalars['ID'];
  relatedValues: Array<Scalars['ID']>;
};

export type AssignsPropertyWithValuesUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingObject: Scalars['ID'];
  relatedProperty: Scalars['ID'];
  relatedValues: Array<Scalars['ID']>;
};

export type AssociationInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions?: Maybe<Array<TextInput>>;
  relatingThing: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};

export type AssociationUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions?: Maybe<Array<TextInput>>;
  relatingThing: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};




export type CollectsInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingCollection: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};

export type CollectsUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingCollection: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};

export type DocumentsInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingDocument: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};

export type DocumentsUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  relatingDocument: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};


export type EntityInput = {
  id?: Maybe<Scalars['ID']>;
  names: Array<TextInput>;
};

/**  inputs */
export enum EntityTypes {
  XtdExternalDocument = 'XtdExternalDocument',
  XtdRoot = 'XtdRoot',
  XtdObject = 'XtdObject',
  XtdActivity = 'XtdActivity',
  XtdActor = 'XtdActor',
  XtdClassification = 'XtdClassification',
  XtdMeasureWithUnit = 'XtdMeasureWithUnit',
  XtdProperty = 'XtdProperty',
  XtdSubject = 'XtdSubject',
  XtdUnit = 'XtdUnit',
  XtdValue = 'XtdValue',
  XtdCollection = 'XtdCollection',
  XtdBag = 'XtdBag',
  XtdNest = 'XtdNest',
  XtdRelationship = 'XtdRelationship',
  XtdRelActsUpon = 'XtdRelActsUpon',
  XtdRelAssignsCollections = 'XtdRelAssignsCollections',
  XtdRelAssignsMeasures = 'XtdRelAssignsMeasures',
  XtdRelAssignsProperties = 'XtdRelAssignsProperties',
  XtdRelAssignsPropertyWithValues = 'XtdRelAssignsPropertyWithValues',
  XtdRelAssignsUnit = 'XtdRelAssignsUnit',
  XtdRelAssignsValues = 'XtdRelAssignsValues',
  XtdRelAssociates = 'XtdRelAssociates',
  XtdRelClassifies = 'XtdRelClassifies',
  XtdRelCollects = 'XtdRelCollects',
  XtdRelComposes = 'XtdRelComposes',
  XtdRelDocuments = 'XtdRelDocuments',
  XtdRelGroups = 'XtdRelGroups',
  XtdRelSequences = 'XtdRelSequences',
  XtdRelSpecializes = 'XtdRelSpecializes'
}

export type EntityUpdateInput = {
  id: Scalars['ID'];
  names: Array<TextInput>;
};

export type FilterInput = {
  query?: Maybe<Scalars['String']>;
  queryScope?: Maybe<QueryScopes>;
  idIn?: Maybe<Array<Scalars['String']>>;
  idNotIn?: Maybe<Array<Scalars['String']>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type MeasureInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  unitComponent?: Maybe<Scalars['ID']>;
  valueDomain: Array<Scalars['ID']>;
};

export type MeasureUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  unitComponent?: Maybe<Scalars['ID']>;
  valueDomain: Array<Scalars['ID']>;
};



export type PagingInput = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export enum QueryScopes {
  All = 'ALL',
  Names = 'NAMES',
  Descriptions = 'DESCRIPTIONS'
}

export type RootInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
};

export type RootUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
};

export type SearchInput = {
  query?: Maybe<Scalars['String']>;
  queryScope?: Maybe<QueryScopes>;
  entityTypeIn?: Maybe<Array<EntityTypes>>;
  entityTypeNotIn?: Maybe<Array<EntityTypes>>;
  idIn?: Maybe<Array<Scalars['String']>>;
  idNotIn?: Maybe<Array<Scalars['String']>>;
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


export type SignupInput = {
  username: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  organization: Scalars['String'];
};

export type TextInput = {
  id?: Maybe<Scalars['ID']>;
  languageCode: Scalars['ID'];
  value: Scalars['String'];
};



export type ValueInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  toleranceType: XtdToleranceTypeEnum;
  lowerTolerance?: Maybe<Scalars['String']>;
  upperTolerance?: Maybe<Scalars['String']>;
  valueRole: XtdValueRoleEnum;
  valueType: XtdValueTypeEnum;
  nominalValue?: Maybe<Scalars['String']>;
};

export type ValueUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  toleranceType: XtdToleranceTypeEnum;
  lowerTolerance?: Maybe<Scalars['String']>;
  upperTolerance?: Maybe<Scalars['String']>;
  valueRole: XtdValueRoleEnum;
  valueType: XtdValueTypeEnum;
  nominalValue?: Maybe<Scalars['String']>;
};

















































export enum XtdToleranceTypeEnum {
  Nil = 'Nil',
  Realvalue = 'Realvalue',
  Percentage = 'Percentage'
}





export enum XtdValueRoleEnum {
  Nil = 'Nil',
  Nominal = 'Nominal',
  Maximum = 'Maximum',
  Minimum = 'Minimum'
}

export enum XtdValueTypeEnum {
  Nil = 'Nil',
  XtdString = 'XtdString',
  XtdNumber = 'XtdNumber',
  XtdInteger = 'XtdInteger',
  XtdReal = 'XtdReal',
  XtdBoolean = 'XtdBoolean',
  XtdLogical = 'XtdLogical'
}

export type CreateActivityMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateActivityMutation = { __typename: 'Mutation', createActivity?: Maybe<(
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  )> };

export type UpdateActivityMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateActivityMutation = { __typename: 'Mutation', updateActivity?: Maybe<(
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  )> };

export type DeleteActivityMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteActivityMutation = { __typename: 'Mutation', deleteActivity?: Maybe<{ __typename: 'XtdActivity', id: string }> };

export type ActivityListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type ActivityListQuery = { __typename: 'Query', activities: { __typename: 'XtdActivityConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdActivity' }
      & Root_XtdActivity_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ActivityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ActivityQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type CreateActorMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateActorMutation = { __typename: 'Mutation', createActor?: Maybe<(
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  )> };

export type UpdateActorMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateActorMutation = { __typename: 'Mutation', updateActor?: Maybe<(
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  )> };

export type DeleteActorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteActorMutation = { __typename: 'Mutation', deleteActor?: Maybe<{ __typename: 'XtdActor', id: string }> };

export type ActorListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type ActorListQuery = { __typename: 'Query', actors: { __typename: 'XtdActorConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdActor' }
      & Root_XtdActor_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ActorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ActorQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type SearchInputQueryVariables = Exact<{
  input?: Maybe<SearchInput>;
}>;


export type SearchInputQuery = { __typename: 'Query', search: { __typename: 'SearchResultConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdExternalDocument' }
      & CatalogItem_XtdExternalDocument_Fragment
    ) | (
      { __typename: 'XtdRelDocuments' }
      & CatalogItem_XtdRelDocuments_Fragment
      & Root_XtdRelDocuments_Fragment
    ) | (
      { __typename: 'XtdRelActsUpon' }
      & CatalogItem_XtdRelActsUpon_Fragment
      & Root_XtdRelActsUpon_Fragment
    ) | (
      { __typename: 'XtdRelAssociates' }
      & CatalogItem_XtdRelAssociates_Fragment
      & Root_XtdRelAssociates_Fragment
    ) | (
      { __typename: 'XtdRelCollects' }
      & CatalogItem_XtdRelCollects_Fragment
      & Root_XtdRelCollects_Fragment
    ) | (
      { __typename: 'XtdRelComposes' }
      & CatalogItem_XtdRelComposes_Fragment
      & Root_XtdRelComposes_Fragment
    ) | (
      { __typename: 'XtdRelGroups' }
      & CatalogItem_XtdRelGroups_Fragment
      & Root_XtdRelGroups_Fragment
    ) | (
      { __typename: 'XtdRelSpecializes' }
      & CatalogItem_XtdRelSpecializes_Fragment
      & Root_XtdRelSpecializes_Fragment
    ) | (
      { __typename: 'XtdActor' }
      & CatalogItem_XtdActor_Fragment
      & Root_XtdActor_Fragment
    ) | (
      { __typename: 'XtdActivity' }
      & CatalogItem_XtdActivity_Fragment
      & Root_XtdActivity_Fragment
    ) | (
      { __typename: 'XtdClassification' }
      & CatalogItem_XtdClassification_Fragment
      & Root_XtdClassification_Fragment
    ) | (
      { __typename: 'XtdMeasureWithUnit' }
      & CatalogItem_XtdMeasureWithUnit_Fragment
      & Root_XtdMeasureWithUnit_Fragment
    ) | (
      { __typename: 'XtdUnit' }
      & CatalogItem_XtdUnit_Fragment
      & Root_XtdUnit_Fragment
    ) | (
      { __typename: 'XtdValue' }
      & CatalogItem_XtdValue_Fragment
      & Root_XtdValue_Fragment
    ) | (
      { __typename: 'XtdProperty' }
      & CatalogItem_XtdProperty_Fragment
      & Root_XtdProperty_Fragment
    ) | (
      { __typename: 'XtdSubject' }
      & CatalogItem_XtdSubject_Fragment
      & Root_XtdSubject_Fragment
    ) | (
      { __typename: 'XtdBag' }
      & CatalogItem_XtdBag_Fragment
      & Root_XtdBag_Fragment
    ) | (
      { __typename: 'XtdNest' }
      & CatalogItem_XtdNest_Fragment
      & Root_XtdNest_Fragment
    ) | (
      { __typename: 'XtdRelAssignsCollections' }
      & CatalogItem_XtdRelAssignsCollections_Fragment
      & Root_XtdRelAssignsCollections_Fragment
    ) | (
      { __typename: 'XtdRelAssignsPropertyWithValues' }
      & CatalogItem_XtdRelAssignsPropertyWithValues_Fragment
      & Root_XtdRelAssignsPropertyWithValues_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type AssignsCollectionsFragment = (
  { __typename: 'XtdRelAssignsCollections', relatingObject: (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ), relatedCollections: Array<(
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  )> }
  & Root_XtdRelAssignsCollections_Fragment
);

export type CreateAssignsCollectionsMutationVariables = Exact<{
  input: AssignsCollectionsInput;
}>;


export type CreateAssignsCollectionsMutation = { __typename: 'Mutation', createAssignsCollectionsRelation?: Maybe<(
    { __typename: 'XtdRelAssignsCollections' }
    & AssignsCollectionsDetailsFragment
  )> };

export type UpdateAssignsCollectionsMutationVariables = Exact<{
  input: AssignsCollectionsUpdateInput;
}>;


export type UpdateAssignsCollectionsMutation = { __typename: 'Mutation', updateAssignsCollectionsRelation?: Maybe<(
    { __typename: 'XtdRelAssignsCollections' }
    & AssignsCollectionsDetailsFragment
  )> };

export type DeleteAssignsCollectionsMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAssignsCollectionsMutation = { __typename: 'Mutation', deleteAssignsCollectionsRelation?: Maybe<{ __typename: 'XtdRelAssignsCollections', id: string }> };

export type AssignsCollectionsListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type AssignsCollectionsListQuery = { __typename: 'Query', assignsCollectionsRelations: { __typename: 'XtdRelAssignsCollectionsConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdRelAssignsCollections' }
      & AssignsCollectionsFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type AssignsCollectionsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AssignsCollectionsQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | (
    { __typename: 'XtdRelAssignsCollections' }
    & AssignsCollectionsDetailsFragment
  ) | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type AssignsCollectionsDetailsFragment = (
  { __typename: 'XtdRelAssignsCollections', relatingObject: (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ), relatedCollections: Array<(
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  )> }
  & RootDetails_XtdRelAssignsCollections_Fragment
);

export type AssignsPropertyWithValuesFragment = (
  { __typename: 'XtdRelAssignsPropertyWithValues', relatingObject: (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ), relatedProperty: (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ), relatedValues: Array<(
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  )> }
  & Root_XtdRelAssignsPropertyWithValues_Fragment
);

export type AssignsPropertyWithValuesDetailsFragment = (
  { __typename: 'XtdRelAssignsPropertyWithValues', relatingObject: (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ), relatedProperty: (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ), relatedValues: Array<(
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  )> }
  & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
);

export type CreateAssignsPropertyWithValuesMutationVariables = Exact<{
  input: AssignsPropertyWithValuesInput;
}>;


export type CreateAssignsPropertyWithValuesMutation = { __typename: 'Mutation', createAssignsPropertyWithValues?: Maybe<(
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & AssignsPropertyWithValuesDetailsFragment
  )> };

export type UpdateAssignsPropertyWithValuesMutationVariables = Exact<{
  input: AssignsPropertyWithValuesUpdateInput;
}>;


export type UpdateAssignsPropertyWithValuesMutation = { __typename: 'Mutation', updateAssignsPropertyWithValues?: Maybe<(
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & AssignsPropertyWithValuesDetailsFragment
  )> };

export type DeleteAssignsPropertyWithValuesMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAssignsPropertyWithValuesMutation = { __typename: 'Mutation', deleteAssignsPropertyWithValues?: Maybe<{ __typename: 'XtdRelAssignsPropertyWithValues', id: string }> };

export type AssignsPropertyWithValuesListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type AssignsPropertyWithValuesListQuery = { __typename: 'Query', assignsPropertyWithValues: { __typename: 'XtdRelAssignsPropertyWithValuesConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdRelAssignsPropertyWithValues' }
      & AssignsPropertyWithValuesFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type AssignsPropertyWithValuesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AssignsPropertyWithValuesQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | { __typename: 'XtdRelAssignsCollections' } | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & AssignsPropertyWithValuesDetailsFragment
  )> };

export type BagFragment = (
  { __typename: 'XtdBag' }
  & CatalogItem_XtdBag_Fragment
  & Root_XtdBag_Fragment
);

export type CreateBagMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateBagMutation = { __typename: 'Mutation', createBag?: Maybe<(
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  )> };

export type UpdateBagMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateBagMutation = { __typename: 'Mutation', updateBag?: Maybe<(
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  )> };

export type DeleteBagMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBagMutation = { __typename: 'Mutation', deleteBag?: Maybe<{ __typename: 'XtdBag', id: string }> };

export type BagListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type BagListQuery = { __typename: 'Query', bags: { __typename: 'XtdBagConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdBag' }
      & Root_XtdBag_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type BagQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BagQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type BagDetailsFragment = (
  { __typename: 'XtdBag' }
  & CatalogItem_XtdBag_Fragment
  & RootDetails_XtdBag_Fragment
);

export type LoginFormMutationVariables = Exact<{
  credentials: LoginInput;
}>;


export type LoginFormMutation = { __typename: 'Mutation', login: (
    { __typename: 'UserSession' }
    & UserSessionFragment
  ) };

export type SignupFormMutationVariables = Exact<{
  profile: SignupInput;
}>;


export type SignupFormMutation = { __typename: 'Mutation', signup: { __typename: 'UserSession', token: string, user: (
      { __typename: 'UserProfile' }
      & UserProfileFragment
    ) } };

export type CatalogItemStatisticsFragment = { __typename: 'CatalogItemStatistics', id: string, count: number };

export type CatalogStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type CatalogStatisticsQuery = { __typename: 'Query', statistics: { __typename: 'CatalogStatistics', items: Array<(
      { __typename: 'CatalogItemStatistics' }
      & CatalogItemStatisticsFragment
    )> } };

export type CreateClassificationMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateClassificationMutation = { __typename: 'Mutation', createClassification?: Maybe<(
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  )> };

export type UpdateClassificationMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateClassificationMutation = { __typename: 'Mutation', updateClassification?: Maybe<(
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  )> };

export type DeleteClassificationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteClassificationMutation = { __typename: 'Mutation', deleteClassification?: Maybe<{ __typename: 'XtdClassification', id: string }> };

export type ClassificationListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type ClassificationListQuery = { __typename: 'Query', classifications: { __typename: 'XtdClassificationConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdClassification' }
      & Root_XtdClassification_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ClassificationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ClassificationQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type CollectsFragment = (
  { __typename: 'XtdRelCollects', relatingCollection: (
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  ), relatedThings: Array<(
    { __typename: 'XtdRelDocuments' }
    & Root_XtdRelDocuments_Fragment
  ) | (
    { __typename: 'XtdRelActsUpon' }
    & Root_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & Root_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & Root_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & Root_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & Root_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & Root_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & Root_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & Root_XtdRelAssignsPropertyWithValues_Fragment
  )> }
  & Root_XtdRelCollects_Fragment
);

export type CreateCollectsMutationVariables = Exact<{
  input: CollectsInput;
}>;


export type CreateCollectsMutation = { __typename: 'Mutation', createCollectsRelation?: Maybe<(
    { __typename: 'XtdRelCollects' }
    & CollectsDetailsFragment
  )> };

export type UpdateCollectsMutationVariables = Exact<{
  input: CollectsUpdateInput;
}>;


export type UpdateCollectsMutation = { __typename: 'Mutation', updateCollectsRelation?: Maybe<(
    { __typename: 'XtdRelCollects' }
    & CollectsDetailsFragment
  )> };

export type DeleteCollectsMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteCollectsMutation = { __typename: 'Mutation', deleteCollectsRelation?: Maybe<{ __typename: 'XtdRelCollects', id: string }> };

export type CollectsListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type CollectsListQuery = { __typename: 'Query', collectsRelations: { __typename: 'XtdRelCollectsConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdRelCollects' }
      & CollectsFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type CollectsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CollectsQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | (
    { __typename: 'XtdRelCollects' }
    & CollectsDetailsFragment
  ) | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | { __typename: 'XtdRelAssignsCollections' } | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type CollectsDetailsFragment = (
  { __typename: 'XtdRelCollects', relatingCollection: (
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  ), relatedThings: Array<(
    { __typename: 'XtdRelDocuments' }
    & Root_XtdRelDocuments_Fragment
  ) | (
    { __typename: 'XtdRelActsUpon' }
    & Root_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & Root_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & Root_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & Root_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & Root_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & Root_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & Root_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & Root_XtdRelAssignsPropertyWithValues_Fragment
  )> }
  & RootDetails_XtdRelCollects_Fragment
);

export type DocumentsFragment = (
  { __typename: 'XtdRelDocuments', relatingDocument: (
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentFragment
  ), relatedThings: Array<(
    { __typename: 'XtdRelDocuments' }
    & Root_XtdRelDocuments_Fragment
  ) | (
    { __typename: 'XtdRelActsUpon' }
    & Root_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & Root_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & Root_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & Root_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & Root_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & Root_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & Root_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & Root_XtdRelAssignsPropertyWithValues_Fragment
  )> }
  & Root_XtdRelDocuments_Fragment
);

export type CreateDocumentsMutationVariables = Exact<{
  input: DocumentsInput;
}>;


export type CreateDocumentsMutation = { __typename: 'Mutation', createDocumentsRelation?: Maybe<(
    { __typename: 'XtdRelDocuments' }
    & DocumentsDetailsFragment
  )> };

export type UpdateDocumentsMutationVariables = Exact<{
  input: DocumentsUpdateInput;
}>;


export type UpdateDocumentsMutation = { __typename: 'Mutation', updateDocumentsRelation?: Maybe<(
    { __typename: 'XtdRelDocuments' }
    & DocumentsDetailsFragment
  )> };

export type DeleteDocumentsMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteDocumentsMutation = { __typename: 'Mutation', deleteDocumentsRelation?: Maybe<{ __typename: 'XtdRelDocuments', id: string }> };

export type DocumentsListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type DocumentsListQuery = { __typename: 'Query', documentsRelations: { __typename: 'XtdRelDocumentsConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdRelDocuments' }
      & DocumentsFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type DocumentsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DocumentsQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & DocumentsDetailsFragment
  ) | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | { __typename: 'XtdRelAssignsCollections' } | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type DocumentsDetailsFragment = (
  { __typename: 'XtdRelDocuments', relatingDocument: (
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  ), relatedThings: Array<(
    { __typename: 'XtdRelDocuments' }
    & Root_XtdRelDocuments_Fragment
  ) | (
    { __typename: 'XtdRelActsUpon' }
    & Root_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & Root_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & Root_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & Root_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & Root_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & Root_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & Root_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & Root_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & Root_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & Root_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & Root_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & Root_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & Root_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & Root_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & Root_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & Root_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & Root_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & Root_XtdRelAssignsPropertyWithValues_Fragment
  )> }
  & RootDetails_XtdRelDocuments_Fragment
);

export type CreateExternalDocumentMutationVariables = Exact<{
  input: EntityInput;
}>;


export type CreateExternalDocumentMutation = { __typename: 'Mutation', createExternalDocument?: Maybe<(
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  )> };

export type UpdateExternalDocumentMutationVariables = Exact<{
  input: EntityUpdateInput;
}>;


export type UpdateExternalDocumentMutation = { __typename: 'Mutation', updateExternalDocument?: Maybe<(
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  )> };

export type DeleteExternalDocumentMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteExternalDocumentMutation = { __typename: 'Mutation', deleteExternalDocument?: Maybe<{ __typename: 'XtdExternalDocument', id: string }> };

export type ExternalDocumentListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type ExternalDocumentListQuery = { __typename: 'Query', externalDocuments: { __typename: 'XtdExternalDocumentConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdExternalDocument' }
      & ExternalDocumentFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ExternalDocumentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ExternalDocumentQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | (
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  ) | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | { __typename: 'XtdRelAssignsCollections' } | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type CreateMeasureMutationVariables = Exact<{
  input: MeasureInput;
}>;


export type CreateMeasureMutation = { __typename: 'Mutation', createMeasure?: Maybe<(
    { __typename: 'XtdMeasureWithUnit' }
    & MeasureDetailsFragment
  )> };

export type UpdateMeasureMutationVariables = Exact<{
  input: MeasureUpdateInput;
}>;


export type UpdateMeasureMutation = { __typename: 'Mutation', updateMeasure?: Maybe<(
    { __typename: 'XtdMeasureWithUnit' }
    & MeasureDetailsFragment
  )> };

export type DeleteMeasureMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteMeasureMutation = { __typename: 'Mutation', deleteMeasure?: Maybe<{ __typename: 'XtdMeasureWithUnit', id: string }> };

export type MeasureListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type MeasureListQuery = { __typename: 'Query', measures: { __typename: 'XtdMeasureWithUnitConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdMeasureWithUnit' }
      & MeasureFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type MeasureQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MeasureQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | (
    { __typename: 'XtdMeasureWithUnit' }
    & MeasureDetailsFragment
  ) | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | { __typename: 'XtdRelAssignsCollections' } | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type NestFragment = (
  { __typename: 'XtdNest' }
  & CatalogItem_XtdNest_Fragment
  & Root_XtdNest_Fragment
);

export type CreateNestMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateNestMutation = { __typename: 'Mutation', createNest?: Maybe<(
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  )> };

export type UpdateNestMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateNestMutation = { __typename: 'Mutation', updateNest?: Maybe<(
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  )> };

export type DeleteNestMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteNestMutation = { __typename: 'Mutation', deleteNest?: Maybe<{ __typename: 'XtdNest', id: string }> };

export type NestListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type NestListQuery = { __typename: 'Query', nests: { __typename: 'XtdNestConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdNest' }
      & NestFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type NestQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NestQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | (
    { __typename: 'XtdNest' }
    & NestDetailsFragment
  ) | { __typename: 'XtdRelAssignsCollections' } | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type NestDetailsFragment = (
  { __typename: 'XtdNest' }
  & CatalogItem_XtdNest_Fragment
  & RootDetails_XtdNest_Fragment
);

export type CreatePropertyMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreatePropertyMutation = { __typename: 'Mutation', createProperty?: Maybe<(
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  )> };

export type UpdatePropertyMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdatePropertyMutation = { __typename: 'Mutation', updateProperty?: Maybe<(
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  )> };

export type DeletePropertyMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePropertyMutation = { __typename: 'Mutation', deleteProperty?: Maybe<{ __typename: 'XtdProperty', id: string }> };

export type PropertyListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type PropertyListQuery = { __typename: 'Query', properties: { __typename: 'XtdPropertyConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdProperty' }
      & Root_XtdProperty_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type PropertyQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PropertyQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type SearchViewQueryVariables = Exact<{
  input?: Maybe<SearchInput>;
}>;


export type SearchViewQuery = { __typename: 'Query', search: { __typename: 'SearchResultConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdExternalDocument' }
      & CatalogItem_XtdExternalDocument_Fragment
    ) | (
      { __typename: 'XtdRelDocuments' }
      & CatalogItem_XtdRelDocuments_Fragment
    ) | (
      { __typename: 'XtdRelActsUpon' }
      & CatalogItem_XtdRelActsUpon_Fragment
    ) | (
      { __typename: 'XtdRelAssociates' }
      & CatalogItem_XtdRelAssociates_Fragment
    ) | (
      { __typename: 'XtdRelCollects' }
      & CatalogItem_XtdRelCollects_Fragment
    ) | (
      { __typename: 'XtdRelComposes' }
      & CatalogItem_XtdRelComposes_Fragment
    ) | (
      { __typename: 'XtdRelGroups' }
      & CatalogItem_XtdRelGroups_Fragment
    ) | (
      { __typename: 'XtdRelSpecializes' }
      & CatalogItem_XtdRelSpecializes_Fragment
    ) | (
      { __typename: 'XtdActor' }
      & CatalogItem_XtdActor_Fragment
    ) | (
      { __typename: 'XtdActivity' }
      & CatalogItem_XtdActivity_Fragment
    ) | (
      { __typename: 'XtdClassification' }
      & CatalogItem_XtdClassification_Fragment
    ) | (
      { __typename: 'XtdMeasureWithUnit' }
      & CatalogItem_XtdMeasureWithUnit_Fragment
    ) | (
      { __typename: 'XtdUnit' }
      & CatalogItem_XtdUnit_Fragment
    ) | (
      { __typename: 'XtdValue' }
      & CatalogItem_XtdValue_Fragment
    ) | (
      { __typename: 'XtdProperty' }
      & CatalogItem_XtdProperty_Fragment
    ) | (
      { __typename: 'XtdSubject' }
      & CatalogItem_XtdSubject_Fragment
    ) | (
      { __typename: 'XtdBag' }
      & CatalogItem_XtdBag_Fragment
    ) | (
      { __typename: 'XtdNest' }
      & CatalogItem_XtdNest_Fragment
    ) | (
      { __typename: 'XtdRelAssignsCollections' }
      & CatalogItem_XtdRelAssignsCollections_Fragment
    ) | (
      { __typename: 'XtdRelAssignsPropertyWithValues' }
      & CatalogItem_XtdRelAssignsPropertyWithValues_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type CreateSubjectMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateSubjectMutation = { __typename: 'Mutation', createSubject?: Maybe<(
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  )> };

export type UpdateSubjectMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateSubjectMutation = { __typename: 'Mutation', updateSubject?: Maybe<(
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  )> };

export type DeleteSubjectMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteSubjectMutation = { __typename: 'Mutation', deleteSubject?: Maybe<{ __typename: 'XtdSubject', id: string }> };

export type SubjectListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type SubjectListQuery = { __typename: 'Query', subjects: { __typename: 'XtdSubjectConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdSubject' }
      & Root_XtdSubject_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type SubjectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SubjectQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type CreateUnitMutationVariables = Exact<{
  input: RootInput;
}>;


export type CreateUnitMutation = { __typename: 'Mutation', createUnit?: Maybe<(
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  )> };

export type UpdateUnitMutationVariables = Exact<{
  input: RootUpdateInput;
}>;


export type UpdateUnitMutation = { __typename: 'Mutation', updateUnit?: Maybe<(
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  )> };

export type DeleteUnitMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUnitMutation = { __typename: 'Mutation', deleteUnit?: Maybe<{ __typename: 'XtdUnit', id: string }> };

export type UnitListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type UnitListQuery = { __typename: 'Query', units: { __typename: 'XtdUnitConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdUnit' }
      & Root_XtdUnit_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type UnitQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnitQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | (
    { __typename: 'XtdRelDocuments' }
    & RootDetails_XtdRelDocuments_Fragment
  ) | { __typename: 'XtdDescription' } | (
    { __typename: 'XtdRelActsUpon' }
    & RootDetails_XtdRelActsUpon_Fragment
  ) | (
    { __typename: 'XtdRelAssociates' }
    & RootDetails_XtdRelAssociates_Fragment
  ) | (
    { __typename: 'XtdRelCollects' }
    & RootDetails_XtdRelCollects_Fragment
  ) | (
    { __typename: 'XtdRelComposes' }
    & RootDetails_XtdRelComposes_Fragment
  ) | (
    { __typename: 'XtdRelGroups' }
    & RootDetails_XtdRelGroups_Fragment
  ) | (
    { __typename: 'XtdRelSpecializes' }
    & RootDetails_XtdRelSpecializes_Fragment
  ) | (
    { __typename: 'XtdActor' }
    & RootDetails_XtdActor_Fragment
  ) | (
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  ) | (
    { __typename: 'XtdClassification' }
    & RootDetails_XtdClassification_Fragment
  ) | (
    { __typename: 'XtdMeasureWithUnit' }
    & RootDetails_XtdMeasureWithUnit_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  ) | (
    { __typename: 'XtdRelAssignsCollections' }
    & RootDetails_XtdRelAssignsCollections_Fragment
  ) | (
    { __typename: 'XtdRelAssignsPropertyWithValues' }
    & RootDetails_XtdRelAssignsPropertyWithValues_Fragment
  )> };

export type ValueFragment = (
  { __typename: 'XtdValue', valueType: XtdValueTypeEnum, valueRole: XtdValueRoleEnum, nominalValue?: Maybe<string>, toleranceType: XtdToleranceTypeEnum, lowerTolerance?: Maybe<string>, upperTolerance?: Maybe<string> }
  & CatalogItem_XtdValue_Fragment
  & Root_XtdValue_Fragment
);

export type CreateValueMutationVariables = Exact<{
  input: ValueInput;
}>;


export type CreateValueMutation = { __typename: 'Mutation', createValue?: Maybe<(
    { __typename: 'XtdValue' }
    & ValueDetailsFragment
  )> };

export type UpdateValueMutationVariables = Exact<{
  input: ValueUpdateInput;
}>;


export type UpdateValueMutation = { __typename: 'Mutation', updateValue?: Maybe<(
    { __typename: 'XtdValue' }
    & ValueDetailsFragment
  )> };

export type DeleteValueMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteValueMutation = { __typename: 'Mutation', deleteValue?: Maybe<{ __typename: 'XtdValue', id: string }> };

export type ValueListQueryVariables = Exact<{
  input?: Maybe<FilterInput>;
}>;


export type ValueListQuery = { __typename: 'Query', values: { __typename: 'XtdValueConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdValue' }
      & ValueFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ValueQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ValueQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | { __typename: 'XtdExternalDocument' } | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdUnit' } | (
    { __typename: 'XtdValue' }
    & ValueDetailsFragment
  ) | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' } | { __typename: 'XtdRelAssignsCollections' } | { __typename: 'XtdRelAssignsPropertyWithValues' }> };

export type ValueDetailsFragment = (
  { __typename: 'XtdValue', valueType: XtdValueTypeEnum, valueRole: XtdValueRoleEnum, nominalValue?: Maybe<string>, toleranceType: XtdToleranceTypeEnum, lowerTolerance?: Maybe<string>, upperTolerance?: Maybe<string> }
  & CatalogItem_XtdValue_Fragment
  & RootDetails_XtdValue_Fragment
);

type CatalogItem_XtdExternalDocument_Fragment = { __typename: 'XtdExternalDocument', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelDocuments_Fragment = { __typename: 'XtdRelDocuments', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelActsUpon_Fragment = { __typename: 'XtdRelActsUpon', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelAssociates_Fragment = { __typename: 'XtdRelAssociates', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelCollects_Fragment = { __typename: 'XtdRelCollects', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelComposes_Fragment = { __typename: 'XtdRelComposes', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelGroups_Fragment = { __typename: 'XtdRelGroups', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelSpecializes_Fragment = { __typename: 'XtdRelSpecializes', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdActor_Fragment = { __typename: 'XtdActor', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdActivity_Fragment = { __typename: 'XtdActivity', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdClassification_Fragment = { __typename: 'XtdClassification', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdMeasureWithUnit_Fragment = { __typename: 'XtdMeasureWithUnit', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdUnit_Fragment = { __typename: 'XtdUnit', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdValue_Fragment = { __typename: 'XtdValue', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdProperty_Fragment = { __typename: 'XtdProperty', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdSubject_Fragment = { __typename: 'XtdSubject', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdBag_Fragment = { __typename: 'XtdBag', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdNest_Fragment = { __typename: 'XtdNest', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelAssignsCollections_Fragment = { __typename: 'XtdRelAssignsCollections', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdRelAssignsPropertyWithValues_Fragment = { __typename: 'XtdRelAssignsPropertyWithValues', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

export type CatalogItemFragment = CatalogItem_XtdExternalDocument_Fragment | CatalogItem_XtdRelDocuments_Fragment | CatalogItem_XtdRelActsUpon_Fragment | CatalogItem_XtdRelAssociates_Fragment | CatalogItem_XtdRelCollects_Fragment | CatalogItem_XtdRelComposes_Fragment | CatalogItem_XtdRelGroups_Fragment | CatalogItem_XtdRelSpecializes_Fragment | CatalogItem_XtdActor_Fragment | CatalogItem_XtdActivity_Fragment | CatalogItem_XtdClassification_Fragment | CatalogItem_XtdMeasureWithUnit_Fragment | CatalogItem_XtdUnit_Fragment | CatalogItem_XtdValue_Fragment | CatalogItem_XtdProperty_Fragment | CatalogItem_XtdSubject_Fragment | CatalogItem_XtdBag_Fragment | CatalogItem_XtdNest_Fragment | CatalogItem_XtdRelAssignsCollections_Fragment | CatalogItem_XtdRelAssignsPropertyWithValues_Fragment;

type Collection_XtdBag_Fragment = (
  { __typename: 'XtdBag' }
  & Root_XtdBag_Fragment
);

type Collection_XtdNest_Fragment = (
  { __typename: 'XtdNest' }
  & Root_XtdNest_Fragment
);

export type CollectionFragment = Collection_XtdBag_Fragment | Collection_XtdNest_Fragment;

export type ExternalDocumentFragment = (
  { __typename: 'XtdExternalDocument', documents: { __typename: 'XtdRelDocumentsConnection', totalElements: number } }
  & CatalogItem_XtdExternalDocument_Fragment
);

export type ExternalDocumentDetailsFragment = (
  { __typename: 'XtdExternalDocument', documents: { __typename: 'XtdRelDocumentsConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdRelDocuments', relatedThings: Array<(
        { __typename: 'XtdRelDocuments' }
        & Root_XtdRelDocuments_Fragment
      ) | (
        { __typename: 'XtdRelActsUpon' }
        & Root_XtdRelActsUpon_Fragment
      ) | (
        { __typename: 'XtdRelAssociates' }
        & Root_XtdRelAssociates_Fragment
      ) | (
        { __typename: 'XtdRelCollects' }
        & Root_XtdRelCollects_Fragment
      ) | (
        { __typename: 'XtdRelComposes' }
        & Root_XtdRelComposes_Fragment
      ) | (
        { __typename: 'XtdRelGroups' }
        & Root_XtdRelGroups_Fragment
      ) | (
        { __typename: 'XtdRelSpecializes' }
        & Root_XtdRelSpecializes_Fragment
      ) | (
        { __typename: 'XtdActor' }
        & Root_XtdActor_Fragment
      ) | (
        { __typename: 'XtdActivity' }
        & Root_XtdActivity_Fragment
      ) | (
        { __typename: 'XtdClassification' }
        & Root_XtdClassification_Fragment
      ) | (
        { __typename: 'XtdMeasureWithUnit' }
        & Root_XtdMeasureWithUnit_Fragment
      ) | (
        { __typename: 'XtdUnit' }
        & Root_XtdUnit_Fragment
      ) | (
        { __typename: 'XtdValue' }
        & Root_XtdValue_Fragment
      ) | (
        { __typename: 'XtdProperty' }
        & Root_XtdProperty_Fragment
      ) | (
        { __typename: 'XtdSubject' }
        & Root_XtdSubject_Fragment
      ) | (
        { __typename: 'XtdBag' }
        & Root_XtdBag_Fragment
      ) | (
        { __typename: 'XtdNest' }
        & Root_XtdNest_Fragment
      ) | (
        { __typename: 'XtdRelAssignsCollections' }
        & Root_XtdRelAssignsCollections_Fragment
      ) | (
        { __typename: 'XtdRelAssignsPropertyWithValues' }
        & Root_XtdRelAssignsPropertyWithValues_Fragment
      )> }
      & Root_XtdRelDocuments_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } }
  & CatalogItem_XtdExternalDocument_Fragment
);

export type MeasureFragment = (
  { __typename: 'XtdMeasureWithUnit', unitComponent?: Maybe<(
    { __typename: 'XtdUnit' }
    & UnitFragment
  )>, valueDomain: Array<(
    { __typename: 'XtdValue' }
    & ValueFragment
  )> }
  & CatalogItem_XtdMeasureWithUnit_Fragment
  & Root_XtdMeasureWithUnit_Fragment
);

export type MeasureDetailsFragment = (
  { __typename: 'XtdMeasureWithUnit', unitComponent?: Maybe<(
    { __typename: 'XtdUnit' }
    & UnitDetailsFragment
  )>, valueDomain: Array<(
    { __typename: 'XtdValue' }
    & ValueDetailsFragment
  )> }
  & CatalogItem_XtdMeasureWithUnit_Fragment
  & RootDetails_XtdMeasureWithUnit_Fragment
);

export type PageInfoFragment = { __typename: 'PageInfo', pageSize: number, pageNumber: number, totalPages: number };

type Root_XtdRelDocuments_Fragment = (
  { __typename: 'XtdRelDocuments', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelDocuments_Fragment
);

type Root_XtdRelActsUpon_Fragment = (
  { __typename: 'XtdRelActsUpon', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelActsUpon_Fragment
);

type Root_XtdRelAssociates_Fragment = (
  { __typename: 'XtdRelAssociates', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelAssociates_Fragment
);

type Root_XtdRelCollects_Fragment = (
  { __typename: 'XtdRelCollects', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelCollects_Fragment
);

type Root_XtdRelComposes_Fragment = (
  { __typename: 'XtdRelComposes', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelComposes_Fragment
);

type Root_XtdRelGroups_Fragment = (
  { __typename: 'XtdRelGroups', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelGroups_Fragment
);

type Root_XtdRelSpecializes_Fragment = (
  { __typename: 'XtdRelSpecializes', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelSpecializes_Fragment
);

type Root_XtdActor_Fragment = (
  { __typename: 'XtdActor', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdActor_Fragment
);

type Root_XtdActivity_Fragment = (
  { __typename: 'XtdActivity', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdActivity_Fragment
);

type Root_XtdClassification_Fragment = (
  { __typename: 'XtdClassification', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdClassification_Fragment
);

type Root_XtdMeasureWithUnit_Fragment = (
  { __typename: 'XtdMeasureWithUnit', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdMeasureWithUnit_Fragment
);

type Root_XtdUnit_Fragment = (
  { __typename: 'XtdUnit', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdUnit_Fragment
);

type Root_XtdValue_Fragment = (
  { __typename: 'XtdValue', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdValue_Fragment
);

type Root_XtdProperty_Fragment = (
  { __typename: 'XtdProperty', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdProperty_Fragment
);

type Root_XtdSubject_Fragment = (
  { __typename: 'XtdSubject', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdSubject_Fragment
);

type Root_XtdBag_Fragment = (
  { __typename: 'XtdBag', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdBag_Fragment
);

type Root_XtdNest_Fragment = (
  { __typename: 'XtdNest', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdNest_Fragment
);

type Root_XtdRelAssignsCollections_Fragment = (
  { __typename: 'XtdRelAssignsCollections', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelAssignsCollections_Fragment
);

type Root_XtdRelAssignsPropertyWithValues_Fragment = (
  { __typename: 'XtdRelAssignsPropertyWithValues', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelAssignsPropertyWithValues_Fragment
);

export type RootFragment = Root_XtdRelDocuments_Fragment | Root_XtdRelActsUpon_Fragment | Root_XtdRelAssociates_Fragment | Root_XtdRelCollects_Fragment | Root_XtdRelComposes_Fragment | Root_XtdRelGroups_Fragment | Root_XtdRelSpecializes_Fragment | Root_XtdActor_Fragment | Root_XtdActivity_Fragment | Root_XtdClassification_Fragment | Root_XtdMeasureWithUnit_Fragment | Root_XtdUnit_Fragment | Root_XtdValue_Fragment | Root_XtdProperty_Fragment | Root_XtdSubject_Fragment | Root_XtdBag_Fragment | Root_XtdNest_Fragment | Root_XtdRelAssignsCollections_Fragment | Root_XtdRelAssignsPropertyWithValues_Fragment;

type RootDetails_XtdRelDocuments_Fragment = (
  { __typename: 'XtdRelDocuments', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelDocuments_Fragment
);

type RootDetails_XtdRelActsUpon_Fragment = (
  { __typename: 'XtdRelActsUpon', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelActsUpon_Fragment
);

type RootDetails_XtdRelAssociates_Fragment = (
  { __typename: 'XtdRelAssociates', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelAssociates_Fragment
);

type RootDetails_XtdRelCollects_Fragment = (
  { __typename: 'XtdRelCollects', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelCollects_Fragment
);

type RootDetails_XtdRelComposes_Fragment = (
  { __typename: 'XtdRelComposes', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelComposes_Fragment
);

type RootDetails_XtdRelGroups_Fragment = (
  { __typename: 'XtdRelGroups', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelGroups_Fragment
);

type RootDetails_XtdRelSpecializes_Fragment = (
  { __typename: 'XtdRelSpecializes', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelSpecializes_Fragment
);

type RootDetails_XtdActor_Fragment = (
  { __typename: 'XtdActor', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdActor_Fragment
);

type RootDetails_XtdActivity_Fragment = (
  { __typename: 'XtdActivity', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdActivity_Fragment
);

type RootDetails_XtdClassification_Fragment = (
  { __typename: 'XtdClassification', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdClassification_Fragment
);

type RootDetails_XtdMeasureWithUnit_Fragment = (
  { __typename: 'XtdMeasureWithUnit', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdMeasureWithUnit_Fragment
);

type RootDetails_XtdUnit_Fragment = (
  { __typename: 'XtdUnit', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdUnit_Fragment
);

type RootDetails_XtdValue_Fragment = (
  { __typename: 'XtdValue', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdValue_Fragment
);

type RootDetails_XtdProperty_Fragment = (
  { __typename: 'XtdProperty', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdProperty_Fragment
);

type RootDetails_XtdSubject_Fragment = (
  { __typename: 'XtdSubject', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdSubject_Fragment
);

type RootDetails_XtdBag_Fragment = (
  { __typename: 'XtdBag', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdBag_Fragment
);

type RootDetails_XtdNest_Fragment = (
  { __typename: 'XtdNest', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdNest_Fragment
);

type RootDetails_XtdRelAssignsCollections_Fragment = (
  { __typename: 'XtdRelAssignsCollections', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelAssignsCollections_Fragment
);

type RootDetails_XtdRelAssignsPropertyWithValues_Fragment = (
  { __typename: 'XtdRelAssignsPropertyWithValues', versionId: string, versionDate: string, descriptions: Array<(
    { __typename: 'XtdDescription' }
    & Text_XtdDescription_Fragment
  )>, actedUponBy: { __typename: 'XtdRelActsUponConnection', totalElements: number }, actsUpon: { __typename: 'XtdRelActsUponConnection', totalElements: number }, associatedBy: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, associates: { __typename: 'XtdRelAssociatesConnection', totalElements: number }, collectedBy: { __typename: 'XtdRelCollectsConnection', totalElements: number }, composedBy: { __typename: 'XtdRelComposesConnection', totalElements: number }, composes: { __typename: 'XtdRelComposesConnection', totalElements: number }, groupedBy: { __typename: 'XtdRelGroupsConnection', totalElements: number }, groups: { __typename: 'XtdRelGroupsConnection', totalElements: number }, specializedBy: { __typename: 'XtdRelSpecializesConnection', totalElements: number }, specializes: { __typename: 'XtdRelSpecializesConnection', totalElements: number } }
  & CatalogItem_XtdRelAssignsPropertyWithValues_Fragment
);

export type RootDetailsFragment = RootDetails_XtdRelDocuments_Fragment | RootDetails_XtdRelActsUpon_Fragment | RootDetails_XtdRelAssociates_Fragment | RootDetails_XtdRelCollects_Fragment | RootDetails_XtdRelComposes_Fragment | RootDetails_XtdRelGroups_Fragment | RootDetails_XtdRelSpecializes_Fragment | RootDetails_XtdActor_Fragment | RootDetails_XtdActivity_Fragment | RootDetails_XtdClassification_Fragment | RootDetails_XtdMeasureWithUnit_Fragment | RootDetails_XtdUnit_Fragment | RootDetails_XtdValue_Fragment | RootDetails_XtdProperty_Fragment | RootDetails_XtdSubject_Fragment | RootDetails_XtdBag_Fragment | RootDetails_XtdNest_Fragment | RootDetails_XtdRelAssignsCollections_Fragment | RootDetails_XtdRelAssignsPropertyWithValues_Fragment;

type Text_XtdName_Fragment = { __typename: 'XtdName', id: string, value: string, language: { __typename: 'XtdLanguage', id: string, languageNameInEnglish: string, languageNameInSelf: string } };

type Text_XtdDescription_Fragment = { __typename: 'XtdDescription', id: string, value: string, language: { __typename: 'XtdLanguage', id: string, languageNameInEnglish: string, languageNameInSelf: string } };

export type TextFragment = Text_XtdName_Fragment | Text_XtdDescription_Fragment;

export type UnitFragment = (
  { __typename: 'XtdUnit' }
  & CatalogItem_XtdUnit_Fragment
  & Root_XtdUnit_Fragment
);

export type UnitDetailsFragment = (
  { __typename: 'XtdUnit' }
  & CatalogItem_XtdUnit_Fragment
  & RootDetails_XtdUnit_Fragment
);

export type UserProfileFragment = { __typename: 'UserProfile', username: string, firstName: string, lastName: string, email: string, organization: string };

export type UserSessionFragment = { __typename: 'UserSession', token: string, user: (
    { __typename: 'UserProfile' }
    & UserProfileFragment
  ) };

export const TextFragmentDoc = gql`
    fragment Text on XtdLanguageRepresentation {
  id
  language {
    id
    languageNameInEnglish
    languageNameInSelf
  }
  value
}
    `;
export const CatalogItemFragmentDoc = gql`
    fragment CatalogItem on CatalogItem {
  id
  label
  created
  createdBy
  lastModified
  lastModifiedBy
  names {
    ...Text
  }
}
    ${TextFragmentDoc}`;
export const RootFragmentDoc = gql`
    fragment Root on XtdRoot {
  ...CatalogItem
  versionId
  versionDate
  descriptions {
    ...Text
  }
  actedUponBy {
    totalElements
  }
  actsUpon {
    totalElements
  }
  associatedBy {
    totalElements
  }
  associates {
    totalElements
  }
  collectedBy {
    totalElements
  }
  composedBy {
    totalElements
  }
  composes {
    totalElements
  }
  groupedBy {
    totalElements
  }
  groups {
    totalElements
  }
  specializedBy {
    totalElements
  }
  specializes {
    totalElements
  }
}
    ${CatalogItemFragmentDoc}
${TextFragmentDoc}`;
export const AssignsCollectionsFragmentDoc = gql`
    fragment AssignsCollections on XtdRelAssignsCollections {
  ...Root
  relatingObject {
    ...Root
  }
  relatedCollections {
    ...Root
  }
}
    ${RootFragmentDoc}`;
export const RootDetailsFragmentDoc = gql`
    fragment RootDetails on XtdRoot {
  ...CatalogItem
  versionId
  versionDate
  descriptions {
    ...Text
  }
  actedUponBy {
    totalElements
  }
  actsUpon {
    totalElements
  }
  associatedBy {
    totalElements
  }
  associates {
    totalElements
  }
  collectedBy {
    totalElements
  }
  composedBy {
    totalElements
  }
  composes {
    totalElements
  }
  groupedBy {
    totalElements
  }
  groups {
    totalElements
  }
  specializedBy {
    totalElements
  }
  specializes {
    totalElements
  }
}
    ${CatalogItemFragmentDoc}
${TextFragmentDoc}`;
export const AssignsCollectionsDetailsFragmentDoc = gql`
    fragment AssignsCollectionsDetails on XtdRelAssignsCollections {
  ...RootDetails
  relatingObject {
    ...Root
  }
  relatedCollections {
    ...Root
  }
}
    ${RootDetailsFragmentDoc}
${RootFragmentDoc}`;
export const AssignsPropertyWithValuesFragmentDoc = gql`
    fragment AssignsPropertyWithValues on XtdRelAssignsPropertyWithValues {
  ...Root
  relatingObject {
    ...Root
  }
  relatedProperty {
    ...Root
  }
  relatedValues {
    ...Root
  }
}
    ${RootFragmentDoc}`;
export const AssignsPropertyWithValuesDetailsFragmentDoc = gql`
    fragment AssignsPropertyWithValuesDetails on XtdRelAssignsPropertyWithValues {
  ...RootDetails
  relatingObject {
    ...Root
  }
  relatedProperty {
    ...Root
  }
  relatedValues {
    ...Root
  }
}
    ${RootDetailsFragmentDoc}
${RootFragmentDoc}`;
export const BagFragmentDoc = gql`
    fragment Bag on XtdBag {
  ...CatalogItem
  ...Root
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}`;
export const BagDetailsFragmentDoc = gql`
    fragment BagDetails on XtdBag {
  ...CatalogItem
  ...RootDetails
}
    ${CatalogItemFragmentDoc}
${RootDetailsFragmentDoc}`;
export const CatalogItemStatisticsFragmentDoc = gql`
    fragment CatalogItemStatistics on CatalogItemStatistics {
  id
  count
}
    `;
export const CollectsFragmentDoc = gql`
    fragment Collects on XtdRelCollects {
  ...Root
  relatingCollection {
    ...Root
  }
  relatedThings {
    ...Root
  }
}
    ${RootFragmentDoc}`;
export const CollectsDetailsFragmentDoc = gql`
    fragment CollectsDetails on XtdRelCollects {
  ...RootDetails
  relatingCollection {
    ...Root
  }
  relatedThings {
    ...Root
  }
}
    ${RootDetailsFragmentDoc}
${RootFragmentDoc}`;
export const ExternalDocumentFragmentDoc = gql`
    fragment ExternalDocument on XtdExternalDocument {
  ...CatalogItem
  documents {
    totalElements
  }
}
    ${CatalogItemFragmentDoc}`;
export const DocumentsFragmentDoc = gql`
    fragment Documents on XtdRelDocuments {
  ...Root
  relatingDocument {
    ...ExternalDocument
  }
  relatedThings {
    ...Root
  }
}
    ${RootFragmentDoc}
${ExternalDocumentFragmentDoc}`;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  pageSize
  pageNumber
  totalPages
}
    `;
export const ExternalDocumentDetailsFragmentDoc = gql`
    fragment ExternalDocumentDetails on XtdExternalDocument {
  ...CatalogItem
  documents {
    nodes {
      ...Root
      relatedThings {
        ...Root
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}
${PageInfoFragmentDoc}`;
export const DocumentsDetailsFragmentDoc = gql`
    fragment DocumentsDetails on XtdRelDocuments {
  ...RootDetails
  relatingDocument {
    ...ExternalDocumentDetails
  }
  relatedThings {
    ...Root
  }
}
    ${RootDetailsFragmentDoc}
${ExternalDocumentDetailsFragmentDoc}
${RootFragmentDoc}`;
export const NestFragmentDoc = gql`
    fragment Nest on XtdNest {
  ...CatalogItem
  ...Root
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}`;
export const NestDetailsFragmentDoc = gql`
    fragment NestDetails on XtdNest {
  ...CatalogItem
  ...RootDetails
}
    ${CatalogItemFragmentDoc}
${RootDetailsFragmentDoc}`;
export const CollectionFragmentDoc = gql`
    fragment Collection on XtdCollection {
  ...Root
}
    ${RootFragmentDoc}`;
export const UnitFragmentDoc = gql`
    fragment Unit on XtdUnit {
  ...CatalogItem
  ...Root
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}`;
export const ValueFragmentDoc = gql`
    fragment Value on XtdValue {
  ...CatalogItem
  ...Root
  valueType
  valueRole
  nominalValue
  toleranceType
  lowerTolerance
  upperTolerance
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}`;
export const MeasureFragmentDoc = gql`
    fragment Measure on XtdMeasureWithUnit {
  ...CatalogItem
  ...Root
  unitComponent {
    ...Unit
  }
  valueDomain {
    ...Value
  }
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}
${UnitFragmentDoc}
${ValueFragmentDoc}`;
export const UnitDetailsFragmentDoc = gql`
    fragment UnitDetails on XtdUnit {
  ...CatalogItem
  ...RootDetails
}
    ${CatalogItemFragmentDoc}
${RootDetailsFragmentDoc}`;
export const ValueDetailsFragmentDoc = gql`
    fragment ValueDetails on XtdValue {
  ...CatalogItem
  ...RootDetails
  valueType
  valueRole
  nominalValue
  toleranceType
  lowerTolerance
  upperTolerance
}
    ${CatalogItemFragmentDoc}
${RootDetailsFragmentDoc}`;
export const MeasureDetailsFragmentDoc = gql`
    fragment MeasureDetails on XtdMeasureWithUnit {
  ...CatalogItem
  ...RootDetails
  unitComponent {
    ...UnitDetails
  }
  valueDomain {
    ...ValueDetails
  }
}
    ${CatalogItemFragmentDoc}
${RootDetailsFragmentDoc}
${UnitDetailsFragmentDoc}
${ValueDetailsFragmentDoc}`;
export const UserProfileFragmentDoc = gql`
    fragment UserProfile on UserProfile {
  username
  firstName
  lastName
  email
  organization
}
    `;
export const UserSessionFragmentDoc = gql`
    fragment UserSession on UserSession {
  token
  user {
    ...UserProfile
  }
}
    ${UserProfileFragmentDoc}`;
export const CreateActivityDocument = gql`
    mutation CreateActivity($input: RootInput!) {
  createActivity(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateActivityMutationFn = ApolloReactCommon.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, baseOptions);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = ApolloReactCommon.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const UpdateActivityDocument = gql`
    mutation UpdateActivity($input: RootUpdateInput!) {
  updateActivity(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateActivityMutationFn = ApolloReactCommon.MutationFunction<UpdateActivityMutation, UpdateActivityMutationVariables>;

/**
 * __useUpdateActivityMutation__
 *
 * To run a mutation, you first call `useUpdateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActivityMutation, { data, loading, error }] = useUpdateActivityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateActivityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateActivityMutation, UpdateActivityMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateActivityMutation, UpdateActivityMutationVariables>(UpdateActivityDocument, baseOptions);
      }
export type UpdateActivityMutationHookResult = ReturnType<typeof useUpdateActivityMutation>;
export type UpdateActivityMutationResult = ApolloReactCommon.MutationResult<UpdateActivityMutation>;
export type UpdateActivityMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateActivityMutation, UpdateActivityMutationVariables>;
export const DeleteActivityDocument = gql`
    mutation DeleteActivity($id: ID!) {
  deleteActivity(id: $id) {
    id
  }
}
    `;
export type DeleteActivityMutationFn = ApolloReactCommon.MutationFunction<DeleteActivityMutation, DeleteActivityMutationVariables>;

/**
 * __useDeleteActivityMutation__
 *
 * To run a mutation, you first call `useDeleteActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActivityMutation, { data, loading, error }] = useDeleteActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteActivityMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteActivityMutation, DeleteActivityMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteActivityMutation, DeleteActivityMutationVariables>(DeleteActivityDocument, baseOptions);
      }
export type DeleteActivityMutationHookResult = ReturnType<typeof useDeleteActivityMutation>;
export type DeleteActivityMutationResult = ApolloReactCommon.MutationResult<DeleteActivityMutation>;
export type DeleteActivityMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const ActivityListDocument = gql`
    query ActivityList($input: FilterInput) {
  activities(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useActivityListQuery__
 *
 * To run a query within a React component, call `useActivityListQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActivityListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActivityListQuery, ActivityListQueryVariables>) {
        return ApolloReactHooks.useQuery<ActivityListQuery, ActivityListQueryVariables>(ActivityListDocument, baseOptions);
      }
export function useActivityListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActivityListQuery, ActivityListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActivityListQuery, ActivityListQueryVariables>(ActivityListDocument, baseOptions);
        }
export type ActivityListQueryHookResult = ReturnType<typeof useActivityListQuery>;
export type ActivityListLazyQueryHookResult = ReturnType<typeof useActivityListLazyQuery>;
export type ActivityListQueryResult = ApolloReactCommon.QueryResult<ActivityListQuery, ActivityListQueryVariables>;
export const ActivityDocument = gql`
    query Activity($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __useActivityQuery__
 *
 * To run a query within a React component, call `useActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActivityQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
        return ApolloReactHooks.useQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
      }
export function useActivityLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActivityQuery, ActivityQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActivityQuery, ActivityQueryVariables>(ActivityDocument, baseOptions);
        }
export type ActivityQueryHookResult = ReturnType<typeof useActivityQuery>;
export type ActivityLazyQueryHookResult = ReturnType<typeof useActivityLazyQuery>;
export type ActivityQueryResult = ApolloReactCommon.QueryResult<ActivityQuery, ActivityQueryVariables>;
export const CreateActorDocument = gql`
    mutation CreateActor($input: RootInput!) {
  createActor(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateActorMutationFn = ApolloReactCommon.MutationFunction<CreateActorMutation, CreateActorMutationVariables>;

/**
 * __useCreateActorMutation__
 *
 * To run a mutation, you first call `useCreateActorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActorMutation, { data, loading, error }] = useCreateActorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateActorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateActorMutation, CreateActorMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateActorMutation, CreateActorMutationVariables>(CreateActorDocument, baseOptions);
      }
export type CreateActorMutationHookResult = ReturnType<typeof useCreateActorMutation>;
export type CreateActorMutationResult = ApolloReactCommon.MutationResult<CreateActorMutation>;
export type CreateActorMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateActorMutation, CreateActorMutationVariables>;
export const UpdateActorDocument = gql`
    mutation UpdateActor($input: RootUpdateInput!) {
  updateActor(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateActorMutationFn = ApolloReactCommon.MutationFunction<UpdateActorMutation, UpdateActorMutationVariables>;

/**
 * __useUpdateActorMutation__
 *
 * To run a mutation, you first call `useUpdateActorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActorMutation, { data, loading, error }] = useUpdateActorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateActorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateActorMutation, UpdateActorMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateActorMutation, UpdateActorMutationVariables>(UpdateActorDocument, baseOptions);
      }
export type UpdateActorMutationHookResult = ReturnType<typeof useUpdateActorMutation>;
export type UpdateActorMutationResult = ApolloReactCommon.MutationResult<UpdateActorMutation>;
export type UpdateActorMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateActorMutation, UpdateActorMutationVariables>;
export const DeleteActorDocument = gql`
    mutation DeleteActor($id: ID!) {
  deleteActor(id: $id) {
    id
  }
}
    `;
export type DeleteActorMutationFn = ApolloReactCommon.MutationFunction<DeleteActorMutation, DeleteActorMutationVariables>;

/**
 * __useDeleteActorMutation__
 *
 * To run a mutation, you first call `useDeleteActorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActorMutation, { data, loading, error }] = useDeleteActorMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteActorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteActorMutation, DeleteActorMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteActorMutation, DeleteActorMutationVariables>(DeleteActorDocument, baseOptions);
      }
export type DeleteActorMutationHookResult = ReturnType<typeof useDeleteActorMutation>;
export type DeleteActorMutationResult = ApolloReactCommon.MutationResult<DeleteActorMutation>;
export type DeleteActorMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteActorMutation, DeleteActorMutationVariables>;
export const ActorListDocument = gql`
    query ActorList($input: FilterInput) {
  actors(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useActorListQuery__
 *
 * To run a query within a React component, call `useActorListQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useActorListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActorListQuery, ActorListQueryVariables>) {
        return ApolloReactHooks.useQuery<ActorListQuery, ActorListQueryVariables>(ActorListDocument, baseOptions);
      }
export function useActorListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActorListQuery, ActorListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActorListQuery, ActorListQueryVariables>(ActorListDocument, baseOptions);
        }
export type ActorListQueryHookResult = ReturnType<typeof useActorListQuery>;
export type ActorListLazyQueryHookResult = ReturnType<typeof useActorListLazyQuery>;
export type ActorListQueryResult = ApolloReactCommon.QueryResult<ActorListQuery, ActorListQueryVariables>;
export const ActorDocument = gql`
    query Actor($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __useActorQuery__
 *
 * To run a query within a React component, call `useActorQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useActorQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ActorQuery, ActorQueryVariables>) {
        return ApolloReactHooks.useQuery<ActorQuery, ActorQueryVariables>(ActorDocument, baseOptions);
      }
export function useActorLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ActorQuery, ActorQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ActorQuery, ActorQueryVariables>(ActorDocument, baseOptions);
        }
export type ActorQueryHookResult = ReturnType<typeof useActorQuery>;
export type ActorLazyQueryHookResult = ReturnType<typeof useActorLazyQuery>;
export type ActorQueryResult = ApolloReactCommon.QueryResult<ActorQuery, ActorQueryVariables>;
export const SearchInputDocument = gql`
    query SearchInput($input: SearchInput) {
  search(input: $input) {
    nodes {
      ...CatalogItem
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${CatalogItemFragmentDoc}
${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useSearchInputQuery__
 *
 * To run a query within a React component, call `useSearchInputQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchInputQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchInputQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchInputQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchInputQuery, SearchInputQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchInputQuery, SearchInputQueryVariables>(SearchInputDocument, baseOptions);
      }
export function useSearchInputLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchInputQuery, SearchInputQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchInputQuery, SearchInputQueryVariables>(SearchInputDocument, baseOptions);
        }
export type SearchInputQueryHookResult = ReturnType<typeof useSearchInputQuery>;
export type SearchInputLazyQueryHookResult = ReturnType<typeof useSearchInputLazyQuery>;
export type SearchInputQueryResult = ApolloReactCommon.QueryResult<SearchInputQuery, SearchInputQueryVariables>;
export const CreateAssignsCollectionsDocument = gql`
    mutation CreateAssignsCollections($input: AssignsCollectionsInput!) {
  createAssignsCollectionsRelation(input: $input) {
    ...AssignsCollectionsDetails
  }
}
    ${AssignsCollectionsDetailsFragmentDoc}`;
export type CreateAssignsCollectionsMutationFn = ApolloReactCommon.MutationFunction<CreateAssignsCollectionsMutation, CreateAssignsCollectionsMutationVariables>;

/**
 * __useCreateAssignsCollectionsMutation__
 *
 * To run a mutation, you first call `useCreateAssignsCollectionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssignsCollectionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssignsCollectionsMutation, { data, loading, error }] = useCreateAssignsCollectionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAssignsCollectionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAssignsCollectionsMutation, CreateAssignsCollectionsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAssignsCollectionsMutation, CreateAssignsCollectionsMutationVariables>(CreateAssignsCollectionsDocument, baseOptions);
      }
export type CreateAssignsCollectionsMutationHookResult = ReturnType<typeof useCreateAssignsCollectionsMutation>;
export type CreateAssignsCollectionsMutationResult = ApolloReactCommon.MutationResult<CreateAssignsCollectionsMutation>;
export type CreateAssignsCollectionsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAssignsCollectionsMutation, CreateAssignsCollectionsMutationVariables>;
export const UpdateAssignsCollectionsDocument = gql`
    mutation UpdateAssignsCollections($input: AssignsCollectionsUpdateInput!) {
  updateAssignsCollectionsRelation(input: $input) {
    ...AssignsCollectionsDetails
  }
}
    ${AssignsCollectionsDetailsFragmentDoc}`;
export type UpdateAssignsCollectionsMutationFn = ApolloReactCommon.MutationFunction<UpdateAssignsCollectionsMutation, UpdateAssignsCollectionsMutationVariables>;

/**
 * __useUpdateAssignsCollectionsMutation__
 *
 * To run a mutation, you first call `useUpdateAssignsCollectionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignsCollectionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignsCollectionsMutation, { data, loading, error }] = useUpdateAssignsCollectionsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAssignsCollectionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAssignsCollectionsMutation, UpdateAssignsCollectionsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAssignsCollectionsMutation, UpdateAssignsCollectionsMutationVariables>(UpdateAssignsCollectionsDocument, baseOptions);
      }
export type UpdateAssignsCollectionsMutationHookResult = ReturnType<typeof useUpdateAssignsCollectionsMutation>;
export type UpdateAssignsCollectionsMutationResult = ApolloReactCommon.MutationResult<UpdateAssignsCollectionsMutation>;
export type UpdateAssignsCollectionsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAssignsCollectionsMutation, UpdateAssignsCollectionsMutationVariables>;
export const DeleteAssignsCollectionsDocument = gql`
    mutation DeleteAssignsCollections($id: ID!) {
  deleteAssignsCollectionsRelation(id: $id) {
    id
  }
}
    `;
export type DeleteAssignsCollectionsMutationFn = ApolloReactCommon.MutationFunction<DeleteAssignsCollectionsMutation, DeleteAssignsCollectionsMutationVariables>;

/**
 * __useDeleteAssignsCollectionsMutation__
 *
 * To run a mutation, you first call `useDeleteAssignsCollectionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssignsCollectionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssignsCollectionsMutation, { data, loading, error }] = useDeleteAssignsCollectionsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAssignsCollectionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAssignsCollectionsMutation, DeleteAssignsCollectionsMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAssignsCollectionsMutation, DeleteAssignsCollectionsMutationVariables>(DeleteAssignsCollectionsDocument, baseOptions);
      }
export type DeleteAssignsCollectionsMutationHookResult = ReturnType<typeof useDeleteAssignsCollectionsMutation>;
export type DeleteAssignsCollectionsMutationResult = ApolloReactCommon.MutationResult<DeleteAssignsCollectionsMutation>;
export type DeleteAssignsCollectionsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAssignsCollectionsMutation, DeleteAssignsCollectionsMutationVariables>;
export const AssignsCollectionsListDocument = gql`
    query AssignsCollectionsList($input: FilterInput) {
  assignsCollectionsRelations(input: $input) {
    nodes {
      ...AssignsCollections
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${AssignsCollectionsFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useAssignsCollectionsListQuery__
 *
 * To run a query within a React component, call `useAssignsCollectionsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignsCollectionsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignsCollectionsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAssignsCollectionsListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AssignsCollectionsListQuery, AssignsCollectionsListQueryVariables>) {
        return ApolloReactHooks.useQuery<AssignsCollectionsListQuery, AssignsCollectionsListQueryVariables>(AssignsCollectionsListDocument, baseOptions);
      }
export function useAssignsCollectionsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AssignsCollectionsListQuery, AssignsCollectionsListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AssignsCollectionsListQuery, AssignsCollectionsListQueryVariables>(AssignsCollectionsListDocument, baseOptions);
        }
export type AssignsCollectionsListQueryHookResult = ReturnType<typeof useAssignsCollectionsListQuery>;
export type AssignsCollectionsListLazyQueryHookResult = ReturnType<typeof useAssignsCollectionsListLazyQuery>;
export type AssignsCollectionsListQueryResult = ApolloReactCommon.QueryResult<AssignsCollectionsListQuery, AssignsCollectionsListQueryVariables>;
export const AssignsCollectionsDocument = gql`
    query AssignsCollections($id: ID!) {
  node(id: $id) {
    ...AssignsCollectionsDetails
  }
}
    ${AssignsCollectionsDetailsFragmentDoc}`;

/**
 * __useAssignsCollectionsQuery__
 *
 * To run a query within a React component, call `useAssignsCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignsCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignsCollectionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAssignsCollectionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AssignsCollectionsQuery, AssignsCollectionsQueryVariables>) {
        return ApolloReactHooks.useQuery<AssignsCollectionsQuery, AssignsCollectionsQueryVariables>(AssignsCollectionsDocument, baseOptions);
      }
export function useAssignsCollectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AssignsCollectionsQuery, AssignsCollectionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AssignsCollectionsQuery, AssignsCollectionsQueryVariables>(AssignsCollectionsDocument, baseOptions);
        }
export type AssignsCollectionsQueryHookResult = ReturnType<typeof useAssignsCollectionsQuery>;
export type AssignsCollectionsLazyQueryHookResult = ReturnType<typeof useAssignsCollectionsLazyQuery>;
export type AssignsCollectionsQueryResult = ApolloReactCommon.QueryResult<AssignsCollectionsQuery, AssignsCollectionsQueryVariables>;
export const CreateAssignsPropertyWithValuesDocument = gql`
    mutation CreateAssignsPropertyWithValues($input: AssignsPropertyWithValuesInput!) {
  createAssignsPropertyWithValues(input: $input) {
    ...AssignsPropertyWithValuesDetails
  }
}
    ${AssignsPropertyWithValuesDetailsFragmentDoc}`;
export type CreateAssignsPropertyWithValuesMutationFn = ApolloReactCommon.MutationFunction<CreateAssignsPropertyWithValuesMutation, CreateAssignsPropertyWithValuesMutationVariables>;

/**
 * __useCreateAssignsPropertyWithValuesMutation__
 *
 * To run a mutation, you first call `useCreateAssignsPropertyWithValuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssignsPropertyWithValuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssignsPropertyWithValuesMutation, { data, loading, error }] = useCreateAssignsPropertyWithValuesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAssignsPropertyWithValuesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateAssignsPropertyWithValuesMutation, CreateAssignsPropertyWithValuesMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateAssignsPropertyWithValuesMutation, CreateAssignsPropertyWithValuesMutationVariables>(CreateAssignsPropertyWithValuesDocument, baseOptions);
      }
export type CreateAssignsPropertyWithValuesMutationHookResult = ReturnType<typeof useCreateAssignsPropertyWithValuesMutation>;
export type CreateAssignsPropertyWithValuesMutationResult = ApolloReactCommon.MutationResult<CreateAssignsPropertyWithValuesMutation>;
export type CreateAssignsPropertyWithValuesMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateAssignsPropertyWithValuesMutation, CreateAssignsPropertyWithValuesMutationVariables>;
export const UpdateAssignsPropertyWithValuesDocument = gql`
    mutation UpdateAssignsPropertyWithValues($input: AssignsPropertyWithValuesUpdateInput!) {
  updateAssignsPropertyWithValues(input: $input) {
    ...AssignsPropertyWithValuesDetails
  }
}
    ${AssignsPropertyWithValuesDetailsFragmentDoc}`;
export type UpdateAssignsPropertyWithValuesMutationFn = ApolloReactCommon.MutationFunction<UpdateAssignsPropertyWithValuesMutation, UpdateAssignsPropertyWithValuesMutationVariables>;

/**
 * __useUpdateAssignsPropertyWithValuesMutation__
 *
 * To run a mutation, you first call `useUpdateAssignsPropertyWithValuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssignsPropertyWithValuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssignsPropertyWithValuesMutation, { data, loading, error }] = useUpdateAssignsPropertyWithValuesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAssignsPropertyWithValuesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateAssignsPropertyWithValuesMutation, UpdateAssignsPropertyWithValuesMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateAssignsPropertyWithValuesMutation, UpdateAssignsPropertyWithValuesMutationVariables>(UpdateAssignsPropertyWithValuesDocument, baseOptions);
      }
export type UpdateAssignsPropertyWithValuesMutationHookResult = ReturnType<typeof useUpdateAssignsPropertyWithValuesMutation>;
export type UpdateAssignsPropertyWithValuesMutationResult = ApolloReactCommon.MutationResult<UpdateAssignsPropertyWithValuesMutation>;
export type UpdateAssignsPropertyWithValuesMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateAssignsPropertyWithValuesMutation, UpdateAssignsPropertyWithValuesMutationVariables>;
export const DeleteAssignsPropertyWithValuesDocument = gql`
    mutation DeleteAssignsPropertyWithValues($id: ID!) {
  deleteAssignsPropertyWithValues(id: $id) {
    id
  }
}
    `;
export type DeleteAssignsPropertyWithValuesMutationFn = ApolloReactCommon.MutationFunction<DeleteAssignsPropertyWithValuesMutation, DeleteAssignsPropertyWithValuesMutationVariables>;

/**
 * __useDeleteAssignsPropertyWithValuesMutation__
 *
 * To run a mutation, you first call `useDeleteAssignsPropertyWithValuesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssignsPropertyWithValuesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssignsPropertyWithValuesMutation, { data, loading, error }] = useDeleteAssignsPropertyWithValuesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAssignsPropertyWithValuesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteAssignsPropertyWithValuesMutation, DeleteAssignsPropertyWithValuesMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteAssignsPropertyWithValuesMutation, DeleteAssignsPropertyWithValuesMutationVariables>(DeleteAssignsPropertyWithValuesDocument, baseOptions);
      }
export type DeleteAssignsPropertyWithValuesMutationHookResult = ReturnType<typeof useDeleteAssignsPropertyWithValuesMutation>;
export type DeleteAssignsPropertyWithValuesMutationResult = ApolloReactCommon.MutationResult<DeleteAssignsPropertyWithValuesMutation>;
export type DeleteAssignsPropertyWithValuesMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteAssignsPropertyWithValuesMutation, DeleteAssignsPropertyWithValuesMutationVariables>;
export const AssignsPropertyWithValuesListDocument = gql`
    query AssignsPropertyWithValuesList($input: FilterInput) {
  assignsPropertyWithValues(input: $input) {
    nodes {
      ...AssignsPropertyWithValues
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${AssignsPropertyWithValuesFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useAssignsPropertyWithValuesListQuery__
 *
 * To run a query within a React component, call `useAssignsPropertyWithValuesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignsPropertyWithValuesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignsPropertyWithValuesListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAssignsPropertyWithValuesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AssignsPropertyWithValuesListQuery, AssignsPropertyWithValuesListQueryVariables>) {
        return ApolloReactHooks.useQuery<AssignsPropertyWithValuesListQuery, AssignsPropertyWithValuesListQueryVariables>(AssignsPropertyWithValuesListDocument, baseOptions);
      }
export function useAssignsPropertyWithValuesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AssignsPropertyWithValuesListQuery, AssignsPropertyWithValuesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AssignsPropertyWithValuesListQuery, AssignsPropertyWithValuesListQueryVariables>(AssignsPropertyWithValuesListDocument, baseOptions);
        }
export type AssignsPropertyWithValuesListQueryHookResult = ReturnType<typeof useAssignsPropertyWithValuesListQuery>;
export type AssignsPropertyWithValuesListLazyQueryHookResult = ReturnType<typeof useAssignsPropertyWithValuesListLazyQuery>;
export type AssignsPropertyWithValuesListQueryResult = ApolloReactCommon.QueryResult<AssignsPropertyWithValuesListQuery, AssignsPropertyWithValuesListQueryVariables>;
export const AssignsPropertyWithValuesDocument = gql`
    query AssignsPropertyWithValues($id: ID!) {
  node(id: $id) {
    ...AssignsPropertyWithValuesDetails
  }
}
    ${AssignsPropertyWithValuesDetailsFragmentDoc}`;

/**
 * __useAssignsPropertyWithValuesQuery__
 *
 * To run a query within a React component, call `useAssignsPropertyWithValuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssignsPropertyWithValuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssignsPropertyWithValuesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAssignsPropertyWithValuesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AssignsPropertyWithValuesQuery, AssignsPropertyWithValuesQueryVariables>) {
        return ApolloReactHooks.useQuery<AssignsPropertyWithValuesQuery, AssignsPropertyWithValuesQueryVariables>(AssignsPropertyWithValuesDocument, baseOptions);
      }
export function useAssignsPropertyWithValuesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AssignsPropertyWithValuesQuery, AssignsPropertyWithValuesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AssignsPropertyWithValuesQuery, AssignsPropertyWithValuesQueryVariables>(AssignsPropertyWithValuesDocument, baseOptions);
        }
export type AssignsPropertyWithValuesQueryHookResult = ReturnType<typeof useAssignsPropertyWithValuesQuery>;
export type AssignsPropertyWithValuesLazyQueryHookResult = ReturnType<typeof useAssignsPropertyWithValuesLazyQuery>;
export type AssignsPropertyWithValuesQueryResult = ApolloReactCommon.QueryResult<AssignsPropertyWithValuesQuery, AssignsPropertyWithValuesQueryVariables>;
export const CreateBagDocument = gql`
    mutation CreateBag($input: RootInput!) {
  createBag(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateBagMutationFn = ApolloReactCommon.MutationFunction<CreateBagMutation, CreateBagMutationVariables>;

/**
 * __useCreateBagMutation__
 *
 * To run a mutation, you first call `useCreateBagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBagMutation, { data, loading, error }] = useCreateBagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateBagMutation, CreateBagMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateBagMutation, CreateBagMutationVariables>(CreateBagDocument, baseOptions);
      }
export type CreateBagMutationHookResult = ReturnType<typeof useCreateBagMutation>;
export type CreateBagMutationResult = ApolloReactCommon.MutationResult<CreateBagMutation>;
export type CreateBagMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateBagMutation, CreateBagMutationVariables>;
export const UpdateBagDocument = gql`
    mutation UpdateBag($input: RootUpdateInput!) {
  updateBag(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateBagMutationFn = ApolloReactCommon.MutationFunction<UpdateBagMutation, UpdateBagMutationVariables>;

/**
 * __useUpdateBagMutation__
 *
 * To run a mutation, you first call `useUpdateBagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBagMutation, { data, loading, error }] = useUpdateBagMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateBagMutation, UpdateBagMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateBagMutation, UpdateBagMutationVariables>(UpdateBagDocument, baseOptions);
      }
export type UpdateBagMutationHookResult = ReturnType<typeof useUpdateBagMutation>;
export type UpdateBagMutationResult = ApolloReactCommon.MutationResult<UpdateBagMutation>;
export type UpdateBagMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateBagMutation, UpdateBagMutationVariables>;
export const DeleteBagDocument = gql`
    mutation DeleteBag($id: ID!) {
  deleteBag(id: $id) {
    id
  }
}
    `;
export type DeleteBagMutationFn = ApolloReactCommon.MutationFunction<DeleteBagMutation, DeleteBagMutationVariables>;

/**
 * __useDeleteBagMutation__
 *
 * To run a mutation, you first call `useDeleteBagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBagMutation, { data, loading, error }] = useDeleteBagMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBagMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteBagMutation, DeleteBagMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteBagMutation, DeleteBagMutationVariables>(DeleteBagDocument, baseOptions);
      }
export type DeleteBagMutationHookResult = ReturnType<typeof useDeleteBagMutation>;
export type DeleteBagMutationResult = ApolloReactCommon.MutationResult<DeleteBagMutation>;
export type DeleteBagMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteBagMutation, DeleteBagMutationVariables>;
export const BagListDocument = gql`
    query BagList($input: FilterInput) {
  bags(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useBagListQuery__
 *
 * To run a query within a React component, call `useBagListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBagListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBagListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBagListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BagListQuery, BagListQueryVariables>) {
        return ApolloReactHooks.useQuery<BagListQuery, BagListQueryVariables>(BagListDocument, baseOptions);
      }
export function useBagListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BagListQuery, BagListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BagListQuery, BagListQueryVariables>(BagListDocument, baseOptions);
        }
export type BagListQueryHookResult = ReturnType<typeof useBagListQuery>;
export type BagListLazyQueryHookResult = ReturnType<typeof useBagListLazyQuery>;
export type BagListQueryResult = ApolloReactCommon.QueryResult<BagListQuery, BagListQueryVariables>;
export const BagDocument = gql`
    query Bag($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __useBagQuery__
 *
 * To run a query within a React component, call `useBagQuery` and pass it any options that fit your needs.
 * When your component renders, `useBagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBagQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBagQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BagQuery, BagQueryVariables>) {
        return ApolloReactHooks.useQuery<BagQuery, BagQueryVariables>(BagDocument, baseOptions);
      }
export function useBagLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BagQuery, BagQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BagQuery, BagQueryVariables>(BagDocument, baseOptions);
        }
export type BagQueryHookResult = ReturnType<typeof useBagQuery>;
export type BagLazyQueryHookResult = ReturnType<typeof useBagLazyQuery>;
export type BagQueryResult = ApolloReactCommon.QueryResult<BagQuery, BagQueryVariables>;
export const LoginFormDocument = gql`
    mutation LoginForm($credentials: LoginInput!) {
  login(input: $credentials) {
    ...UserSession
  }
}
    ${UserSessionFragmentDoc}`;
export type LoginFormMutationFn = ApolloReactCommon.MutationFunction<LoginFormMutation, LoginFormMutationVariables>;

/**
 * __useLoginFormMutation__
 *
 * To run a mutation, you first call `useLoginFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginFormMutation, { data, loading, error }] = useLoginFormMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useLoginFormMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginFormMutation, LoginFormMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginFormMutation, LoginFormMutationVariables>(LoginFormDocument, baseOptions);
      }
export type LoginFormMutationHookResult = ReturnType<typeof useLoginFormMutation>;
export type LoginFormMutationResult = ApolloReactCommon.MutationResult<LoginFormMutation>;
export type LoginFormMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginFormMutation, LoginFormMutationVariables>;
export const SignupFormDocument = gql`
    mutation SignupForm($profile: SignupInput!) {
  signup(input: $profile) {
    token
    user {
      ...UserProfile
    }
  }
}
    ${UserProfileFragmentDoc}`;
export type SignupFormMutationFn = ApolloReactCommon.MutationFunction<SignupFormMutation, SignupFormMutationVariables>;

/**
 * __useSignupFormMutation__
 *
 * To run a mutation, you first call `useSignupFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupFormMutation, { data, loading, error }] = useSignupFormMutation({
 *   variables: {
 *      profile: // value for 'profile'
 *   },
 * });
 */
export function useSignupFormMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignupFormMutation, SignupFormMutationVariables>) {
        return ApolloReactHooks.useMutation<SignupFormMutation, SignupFormMutationVariables>(SignupFormDocument, baseOptions);
      }
export type SignupFormMutationHookResult = ReturnType<typeof useSignupFormMutation>;
export type SignupFormMutationResult = ApolloReactCommon.MutationResult<SignupFormMutation>;
export type SignupFormMutationOptions = ApolloReactCommon.BaseMutationOptions<SignupFormMutation, SignupFormMutationVariables>;
export const CatalogStatisticsDocument = gql`
    query CatalogStatistics {
  statistics {
    items {
      ...CatalogItemStatistics
    }
  }
}
    ${CatalogItemStatisticsFragmentDoc}`;

/**
 * __useCatalogStatisticsQuery__
 *
 * To run a query within a React component, call `useCatalogStatisticsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogStatisticsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogStatisticsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCatalogStatisticsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CatalogStatisticsQuery, CatalogStatisticsQueryVariables>) {
        return ApolloReactHooks.useQuery<CatalogStatisticsQuery, CatalogStatisticsQueryVariables>(CatalogStatisticsDocument, baseOptions);
      }
export function useCatalogStatisticsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CatalogStatisticsQuery, CatalogStatisticsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CatalogStatisticsQuery, CatalogStatisticsQueryVariables>(CatalogStatisticsDocument, baseOptions);
        }
export type CatalogStatisticsQueryHookResult = ReturnType<typeof useCatalogStatisticsQuery>;
export type CatalogStatisticsLazyQueryHookResult = ReturnType<typeof useCatalogStatisticsLazyQuery>;
export type CatalogStatisticsQueryResult = ApolloReactCommon.QueryResult<CatalogStatisticsQuery, CatalogStatisticsQueryVariables>;
export const CreateClassificationDocument = gql`
    mutation CreateClassification($input: RootInput!) {
  createClassification(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateClassificationMutationFn = ApolloReactCommon.MutationFunction<CreateClassificationMutation, CreateClassificationMutationVariables>;

/**
 * __useCreateClassificationMutation__
 *
 * To run a mutation, you first call `useCreateClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClassificationMutation, { data, loading, error }] = useCreateClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateClassificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateClassificationMutation, CreateClassificationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateClassificationMutation, CreateClassificationMutationVariables>(CreateClassificationDocument, baseOptions);
      }
export type CreateClassificationMutationHookResult = ReturnType<typeof useCreateClassificationMutation>;
export type CreateClassificationMutationResult = ApolloReactCommon.MutationResult<CreateClassificationMutation>;
export type CreateClassificationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateClassificationMutation, CreateClassificationMutationVariables>;
export const UpdateClassificationDocument = gql`
    mutation UpdateClassification($input: RootUpdateInput!) {
  updateClassification(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateClassificationMutationFn = ApolloReactCommon.MutationFunction<UpdateClassificationMutation, UpdateClassificationMutationVariables>;

/**
 * __useUpdateClassificationMutation__
 *
 * To run a mutation, you first call `useUpdateClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClassificationMutation, { data, loading, error }] = useUpdateClassificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateClassificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateClassificationMutation, UpdateClassificationMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateClassificationMutation, UpdateClassificationMutationVariables>(UpdateClassificationDocument, baseOptions);
      }
export type UpdateClassificationMutationHookResult = ReturnType<typeof useUpdateClassificationMutation>;
export type UpdateClassificationMutationResult = ApolloReactCommon.MutationResult<UpdateClassificationMutation>;
export type UpdateClassificationMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateClassificationMutation, UpdateClassificationMutationVariables>;
export const DeleteClassificationDocument = gql`
    mutation DeleteClassification($id: ID!) {
  deleteClassification(id: $id) {
    id
  }
}
    `;
export type DeleteClassificationMutationFn = ApolloReactCommon.MutationFunction<DeleteClassificationMutation, DeleteClassificationMutationVariables>;

/**
 * __useDeleteClassificationMutation__
 *
 * To run a mutation, you first call `useDeleteClassificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClassificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClassificationMutation, { data, loading, error }] = useDeleteClassificationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteClassificationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteClassificationMutation, DeleteClassificationMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteClassificationMutation, DeleteClassificationMutationVariables>(DeleteClassificationDocument, baseOptions);
      }
export type DeleteClassificationMutationHookResult = ReturnType<typeof useDeleteClassificationMutation>;
export type DeleteClassificationMutationResult = ApolloReactCommon.MutationResult<DeleteClassificationMutation>;
export type DeleteClassificationMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteClassificationMutation, DeleteClassificationMutationVariables>;
export const ClassificationListDocument = gql`
    query ClassificationList($input: FilterInput) {
  classifications(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useClassificationListQuery__
 *
 * To run a query within a React component, call `useClassificationListQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassificationListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassificationListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useClassificationListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClassificationListQuery, ClassificationListQueryVariables>) {
        return ApolloReactHooks.useQuery<ClassificationListQuery, ClassificationListQueryVariables>(ClassificationListDocument, baseOptions);
      }
export function useClassificationListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClassificationListQuery, ClassificationListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClassificationListQuery, ClassificationListQueryVariables>(ClassificationListDocument, baseOptions);
        }
export type ClassificationListQueryHookResult = ReturnType<typeof useClassificationListQuery>;
export type ClassificationListLazyQueryHookResult = ReturnType<typeof useClassificationListLazyQuery>;
export type ClassificationListQueryResult = ApolloReactCommon.QueryResult<ClassificationListQuery, ClassificationListQueryVariables>;
export const ClassificationDocument = gql`
    query Classification($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __useClassificationQuery__
 *
 * To run a query within a React component, call `useClassificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassificationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useClassificationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClassificationQuery, ClassificationQueryVariables>) {
        return ApolloReactHooks.useQuery<ClassificationQuery, ClassificationQueryVariables>(ClassificationDocument, baseOptions);
      }
export function useClassificationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClassificationQuery, ClassificationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClassificationQuery, ClassificationQueryVariables>(ClassificationDocument, baseOptions);
        }
export type ClassificationQueryHookResult = ReturnType<typeof useClassificationQuery>;
export type ClassificationLazyQueryHookResult = ReturnType<typeof useClassificationLazyQuery>;
export type ClassificationQueryResult = ApolloReactCommon.QueryResult<ClassificationQuery, ClassificationQueryVariables>;
export const CreateCollectsDocument = gql`
    mutation CreateCollects($input: CollectsInput!) {
  createCollectsRelation(input: $input) {
    ...CollectsDetails
  }
}
    ${CollectsDetailsFragmentDoc}`;
export type CreateCollectsMutationFn = ApolloReactCommon.MutationFunction<CreateCollectsMutation, CreateCollectsMutationVariables>;

/**
 * __useCreateCollectsMutation__
 *
 * To run a mutation, you first call `useCreateCollectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectsMutation, { data, loading, error }] = useCreateCollectsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCollectsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCollectsMutation, CreateCollectsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCollectsMutation, CreateCollectsMutationVariables>(CreateCollectsDocument, baseOptions);
      }
export type CreateCollectsMutationHookResult = ReturnType<typeof useCreateCollectsMutation>;
export type CreateCollectsMutationResult = ApolloReactCommon.MutationResult<CreateCollectsMutation>;
export type CreateCollectsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCollectsMutation, CreateCollectsMutationVariables>;
export const UpdateCollectsDocument = gql`
    mutation UpdateCollects($input: CollectsUpdateInput!) {
  updateCollectsRelation(input: $input) {
    ...CollectsDetails
  }
}
    ${CollectsDetailsFragmentDoc}`;
export type UpdateCollectsMutationFn = ApolloReactCommon.MutationFunction<UpdateCollectsMutation, UpdateCollectsMutationVariables>;

/**
 * __useUpdateCollectsMutation__
 *
 * To run a mutation, you first call `useUpdateCollectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCollectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCollectsMutation, { data, loading, error }] = useUpdateCollectsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCollectsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateCollectsMutation, UpdateCollectsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateCollectsMutation, UpdateCollectsMutationVariables>(UpdateCollectsDocument, baseOptions);
      }
export type UpdateCollectsMutationHookResult = ReturnType<typeof useUpdateCollectsMutation>;
export type UpdateCollectsMutationResult = ApolloReactCommon.MutationResult<UpdateCollectsMutation>;
export type UpdateCollectsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateCollectsMutation, UpdateCollectsMutationVariables>;
export const DeleteCollectsDocument = gql`
    mutation DeleteCollects($id: ID!) {
  deleteCollectsRelation(id: $id) {
    id
  }
}
    `;
export type DeleteCollectsMutationFn = ApolloReactCommon.MutationFunction<DeleteCollectsMutation, DeleteCollectsMutationVariables>;

/**
 * __useDeleteCollectsMutation__
 *
 * To run a mutation, you first call `useDeleteCollectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCollectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCollectsMutation, { data, loading, error }] = useDeleteCollectsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCollectsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCollectsMutation, DeleteCollectsMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteCollectsMutation, DeleteCollectsMutationVariables>(DeleteCollectsDocument, baseOptions);
      }
export type DeleteCollectsMutationHookResult = ReturnType<typeof useDeleteCollectsMutation>;
export type DeleteCollectsMutationResult = ApolloReactCommon.MutationResult<DeleteCollectsMutation>;
export type DeleteCollectsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCollectsMutation, DeleteCollectsMutationVariables>;
export const CollectsListDocument = gql`
    query CollectsList($input: FilterInput) {
  collectsRelations(input: $input) {
    nodes {
      ...Collects
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${CollectsFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useCollectsListQuery__
 *
 * To run a query within a React component, call `useCollectsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCollectsListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectsListQuery, CollectsListQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectsListQuery, CollectsListQueryVariables>(CollectsListDocument, baseOptions);
      }
export function useCollectsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectsListQuery, CollectsListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectsListQuery, CollectsListQueryVariables>(CollectsListDocument, baseOptions);
        }
export type CollectsListQueryHookResult = ReturnType<typeof useCollectsListQuery>;
export type CollectsListLazyQueryHookResult = ReturnType<typeof useCollectsListLazyQuery>;
export type CollectsListQueryResult = ApolloReactCommon.QueryResult<CollectsListQuery, CollectsListQueryVariables>;
export const CollectsDocument = gql`
    query Collects($id: ID!) {
  node(id: $id) {
    ...CollectsDetails
  }
}
    ${CollectsDetailsFragmentDoc}`;

/**
 * __useCollectsQuery__
 *
 * To run a query within a React component, call `useCollectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CollectsQuery, CollectsQueryVariables>) {
        return ApolloReactHooks.useQuery<CollectsQuery, CollectsQueryVariables>(CollectsDocument, baseOptions);
      }
export function useCollectsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CollectsQuery, CollectsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CollectsQuery, CollectsQueryVariables>(CollectsDocument, baseOptions);
        }
export type CollectsQueryHookResult = ReturnType<typeof useCollectsQuery>;
export type CollectsLazyQueryHookResult = ReturnType<typeof useCollectsLazyQuery>;
export type CollectsQueryResult = ApolloReactCommon.QueryResult<CollectsQuery, CollectsQueryVariables>;
export const CreateDocumentsDocument = gql`
    mutation CreateDocuments($input: DocumentsInput!) {
  createDocumentsRelation(input: $input) {
    ...DocumentsDetails
  }
}
    ${DocumentsDetailsFragmentDoc}`;
export type CreateDocumentsMutationFn = ApolloReactCommon.MutationFunction<CreateDocumentsMutation, CreateDocumentsMutationVariables>;

/**
 * __useCreateDocumentsMutation__
 *
 * To run a mutation, you first call `useCreateDocumentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocumentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocumentsMutation, { data, loading, error }] = useCreateDocumentsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDocumentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDocumentsMutation, CreateDocumentsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDocumentsMutation, CreateDocumentsMutationVariables>(CreateDocumentsDocument, baseOptions);
      }
export type CreateDocumentsMutationHookResult = ReturnType<typeof useCreateDocumentsMutation>;
export type CreateDocumentsMutationResult = ApolloReactCommon.MutationResult<CreateDocumentsMutation>;
export type CreateDocumentsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDocumentsMutation, CreateDocumentsMutationVariables>;
export const UpdateDocumentsDocument = gql`
    mutation UpdateDocuments($input: DocumentsUpdateInput!) {
  updateDocumentsRelation(input: $input) {
    ...DocumentsDetails
  }
}
    ${DocumentsDetailsFragmentDoc}`;
export type UpdateDocumentsMutationFn = ApolloReactCommon.MutationFunction<UpdateDocumentsMutation, UpdateDocumentsMutationVariables>;

/**
 * __useUpdateDocumentsMutation__
 *
 * To run a mutation, you first call `useUpdateDocumentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDocumentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDocumentsMutation, { data, loading, error }] = useUpdateDocumentsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDocumentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateDocumentsMutation, UpdateDocumentsMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateDocumentsMutation, UpdateDocumentsMutationVariables>(UpdateDocumentsDocument, baseOptions);
      }
export type UpdateDocumentsMutationHookResult = ReturnType<typeof useUpdateDocumentsMutation>;
export type UpdateDocumentsMutationResult = ApolloReactCommon.MutationResult<UpdateDocumentsMutation>;
export type UpdateDocumentsMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateDocumentsMutation, UpdateDocumentsMutationVariables>;
export const DeleteDocumentsDocument = gql`
    mutation DeleteDocuments($id: ID!) {
  deleteDocumentsRelation(id: $id) {
    id
  }
}
    `;
export type DeleteDocumentsMutationFn = ApolloReactCommon.MutationFunction<DeleteDocumentsMutation, DeleteDocumentsMutationVariables>;

/**
 * __useDeleteDocumentsMutation__
 *
 * To run a mutation, you first call `useDeleteDocumentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocumentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocumentsMutation, { data, loading, error }] = useDeleteDocumentsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDocumentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteDocumentsMutation, DeleteDocumentsMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteDocumentsMutation, DeleteDocumentsMutationVariables>(DeleteDocumentsDocument, baseOptions);
      }
export type DeleteDocumentsMutationHookResult = ReturnType<typeof useDeleteDocumentsMutation>;
export type DeleteDocumentsMutationResult = ApolloReactCommon.MutationResult<DeleteDocumentsMutation>;
export type DeleteDocumentsMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteDocumentsMutation, DeleteDocumentsMutationVariables>;
export const DocumentsListDocument = gql`
    query DocumentsList($input: FilterInput) {
  documentsRelations(input: $input) {
    nodes {
      ...Documents
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${DocumentsFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useDocumentsListQuery__
 *
 * To run a query within a React component, call `useDocumentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDocumentsListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DocumentsListQuery, DocumentsListQueryVariables>) {
        return ApolloReactHooks.useQuery<DocumentsListQuery, DocumentsListQueryVariables>(DocumentsListDocument, baseOptions);
      }
export function useDocumentsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DocumentsListQuery, DocumentsListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DocumentsListQuery, DocumentsListQueryVariables>(DocumentsListDocument, baseOptions);
        }
export type DocumentsListQueryHookResult = ReturnType<typeof useDocumentsListQuery>;
export type DocumentsListLazyQueryHookResult = ReturnType<typeof useDocumentsListLazyQuery>;
export type DocumentsListQueryResult = ApolloReactCommon.QueryResult<DocumentsListQuery, DocumentsListQueryVariables>;
export const DocumentsDocument = gql`
    query Documents($id: ID!) {
  node(id: $id) {
    ...DocumentsDetails
  }
}
    ${DocumentsDetailsFragmentDoc}`;

/**
 * __useDocumentsQuery__
 *
 * To run a query within a React component, call `useDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDocumentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDocumentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DocumentsQuery, DocumentsQueryVariables>) {
        return ApolloReactHooks.useQuery<DocumentsQuery, DocumentsQueryVariables>(DocumentsDocument, baseOptions);
      }
export function useDocumentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DocumentsQuery, DocumentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<DocumentsQuery, DocumentsQueryVariables>(DocumentsDocument, baseOptions);
        }
export type DocumentsQueryHookResult = ReturnType<typeof useDocumentsQuery>;
export type DocumentsLazyQueryHookResult = ReturnType<typeof useDocumentsLazyQuery>;
export type DocumentsQueryResult = ApolloReactCommon.QueryResult<DocumentsQuery, DocumentsQueryVariables>;
export const CreateExternalDocumentDocument = gql`
    mutation CreateExternalDocument($input: EntityInput!) {
  createExternalDocument(input: $input) {
    ...ExternalDocumentDetails
  }
}
    ${ExternalDocumentDetailsFragmentDoc}`;
export type CreateExternalDocumentMutationFn = ApolloReactCommon.MutationFunction<CreateExternalDocumentMutation, CreateExternalDocumentMutationVariables>;

/**
 * __useCreateExternalDocumentMutation__
 *
 * To run a mutation, you first call `useCreateExternalDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExternalDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExternalDocumentMutation, { data, loading, error }] = useCreateExternalDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExternalDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateExternalDocumentMutation, CreateExternalDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateExternalDocumentMutation, CreateExternalDocumentMutationVariables>(CreateExternalDocumentDocument, baseOptions);
      }
export type CreateExternalDocumentMutationHookResult = ReturnType<typeof useCreateExternalDocumentMutation>;
export type CreateExternalDocumentMutationResult = ApolloReactCommon.MutationResult<CreateExternalDocumentMutation>;
export type CreateExternalDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateExternalDocumentMutation, CreateExternalDocumentMutationVariables>;
export const UpdateExternalDocumentDocument = gql`
    mutation UpdateExternalDocument($input: EntityUpdateInput!) {
  updateExternalDocument(input: $input) {
    ...ExternalDocumentDetails
  }
}
    ${ExternalDocumentDetailsFragmentDoc}`;
export type UpdateExternalDocumentMutationFn = ApolloReactCommon.MutationFunction<UpdateExternalDocumentMutation, UpdateExternalDocumentMutationVariables>;

/**
 * __useUpdateExternalDocumentMutation__
 *
 * To run a mutation, you first call `useUpdateExternalDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExternalDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExternalDocumentMutation, { data, loading, error }] = useUpdateExternalDocumentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateExternalDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateExternalDocumentMutation, UpdateExternalDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateExternalDocumentMutation, UpdateExternalDocumentMutationVariables>(UpdateExternalDocumentDocument, baseOptions);
      }
export type UpdateExternalDocumentMutationHookResult = ReturnType<typeof useUpdateExternalDocumentMutation>;
export type UpdateExternalDocumentMutationResult = ApolloReactCommon.MutationResult<UpdateExternalDocumentMutation>;
export type UpdateExternalDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateExternalDocumentMutation, UpdateExternalDocumentMutationVariables>;
export const DeleteExternalDocumentDocument = gql`
    mutation DeleteExternalDocument($id: ID!) {
  deleteExternalDocument(id: $id) {
    id
  }
}
    `;
export type DeleteExternalDocumentMutationFn = ApolloReactCommon.MutationFunction<DeleteExternalDocumentMutation, DeleteExternalDocumentMutationVariables>;

/**
 * __useDeleteExternalDocumentMutation__
 *
 * To run a mutation, you first call `useDeleteExternalDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteExternalDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteExternalDocumentMutation, { data, loading, error }] = useDeleteExternalDocumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteExternalDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteExternalDocumentMutation, DeleteExternalDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteExternalDocumentMutation, DeleteExternalDocumentMutationVariables>(DeleteExternalDocumentDocument, baseOptions);
      }
export type DeleteExternalDocumentMutationHookResult = ReturnType<typeof useDeleteExternalDocumentMutation>;
export type DeleteExternalDocumentMutationResult = ApolloReactCommon.MutationResult<DeleteExternalDocumentMutation>;
export type DeleteExternalDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteExternalDocumentMutation, DeleteExternalDocumentMutationVariables>;
export const ExternalDocumentListDocument = gql`
    query ExternalDocumentList($input: FilterInput) {
  externalDocuments(input: $input) {
    nodes {
      ...ExternalDocument
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${ExternalDocumentFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useExternalDocumentListQuery__
 *
 * To run a query within a React component, call `useExternalDocumentListQuery` and pass it any options that fit your needs.
 * When your component renders, `useExternalDocumentListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExternalDocumentListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExternalDocumentListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExternalDocumentListQuery, ExternalDocumentListQueryVariables>) {
        return ApolloReactHooks.useQuery<ExternalDocumentListQuery, ExternalDocumentListQueryVariables>(ExternalDocumentListDocument, baseOptions);
      }
export function useExternalDocumentListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExternalDocumentListQuery, ExternalDocumentListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExternalDocumentListQuery, ExternalDocumentListQueryVariables>(ExternalDocumentListDocument, baseOptions);
        }
export type ExternalDocumentListQueryHookResult = ReturnType<typeof useExternalDocumentListQuery>;
export type ExternalDocumentListLazyQueryHookResult = ReturnType<typeof useExternalDocumentListLazyQuery>;
export type ExternalDocumentListQueryResult = ApolloReactCommon.QueryResult<ExternalDocumentListQuery, ExternalDocumentListQueryVariables>;
export const ExternalDocumentDocument = gql`
    query ExternalDocument($id: ID!) {
  node(id: $id) {
    ...ExternalDocumentDetails
  }
}
    ${ExternalDocumentDetailsFragmentDoc}`;

/**
 * __useExternalDocumentQuery__
 *
 * To run a query within a React component, call `useExternalDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useExternalDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExternalDocumentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useExternalDocumentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExternalDocumentQuery, ExternalDocumentQueryVariables>) {
        return ApolloReactHooks.useQuery<ExternalDocumentQuery, ExternalDocumentQueryVariables>(ExternalDocumentDocument, baseOptions);
      }
export function useExternalDocumentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExternalDocumentQuery, ExternalDocumentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExternalDocumentQuery, ExternalDocumentQueryVariables>(ExternalDocumentDocument, baseOptions);
        }
export type ExternalDocumentQueryHookResult = ReturnType<typeof useExternalDocumentQuery>;
export type ExternalDocumentLazyQueryHookResult = ReturnType<typeof useExternalDocumentLazyQuery>;
export type ExternalDocumentQueryResult = ApolloReactCommon.QueryResult<ExternalDocumentQuery, ExternalDocumentQueryVariables>;
export const CreateMeasureDocument = gql`
    mutation CreateMeasure($input: MeasureInput!) {
  createMeasure(input: $input) {
    ...MeasureDetails
  }
}
    ${MeasureDetailsFragmentDoc}`;
export type CreateMeasureMutationFn = ApolloReactCommon.MutationFunction<CreateMeasureMutation, CreateMeasureMutationVariables>;

/**
 * __useCreateMeasureMutation__
 *
 * To run a mutation, you first call `useCreateMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeasureMutation, { data, loading, error }] = useCreateMeasureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateMeasureMutation, CreateMeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateMeasureMutation, CreateMeasureMutationVariables>(CreateMeasureDocument, baseOptions);
      }
export type CreateMeasureMutationHookResult = ReturnType<typeof useCreateMeasureMutation>;
export type CreateMeasureMutationResult = ApolloReactCommon.MutationResult<CreateMeasureMutation>;
export type CreateMeasureMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateMeasureMutation, CreateMeasureMutationVariables>;
export const UpdateMeasureDocument = gql`
    mutation UpdateMeasure($input: MeasureUpdateInput!) {
  updateMeasure(input: $input) {
    ...MeasureDetails
  }
}
    ${MeasureDetailsFragmentDoc}`;
export type UpdateMeasureMutationFn = ApolloReactCommon.MutationFunction<UpdateMeasureMutation, UpdateMeasureMutationVariables>;

/**
 * __useUpdateMeasureMutation__
 *
 * To run a mutation, you first call `useUpdateMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeasureMutation, { data, loading, error }] = useUpdateMeasureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMeasureMutation, UpdateMeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMeasureMutation, UpdateMeasureMutationVariables>(UpdateMeasureDocument, baseOptions);
      }
export type UpdateMeasureMutationHookResult = ReturnType<typeof useUpdateMeasureMutation>;
export type UpdateMeasureMutationResult = ApolloReactCommon.MutationResult<UpdateMeasureMutation>;
export type UpdateMeasureMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMeasureMutation, UpdateMeasureMutationVariables>;
export const DeleteMeasureDocument = gql`
    mutation DeleteMeasure($id: ID!) {
  deleteMeasure(id: $id) {
    id
  }
}
    `;
export type DeleteMeasureMutationFn = ApolloReactCommon.MutationFunction<DeleteMeasureMutation, DeleteMeasureMutationVariables>;

/**
 * __useDeleteMeasureMutation__
 *
 * To run a mutation, you first call `useDeleteMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMeasureMutation, { data, loading, error }] = useDeleteMeasureMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMeasureMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteMeasureMutation, DeleteMeasureMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteMeasureMutation, DeleteMeasureMutationVariables>(DeleteMeasureDocument, baseOptions);
      }
export type DeleteMeasureMutationHookResult = ReturnType<typeof useDeleteMeasureMutation>;
export type DeleteMeasureMutationResult = ApolloReactCommon.MutationResult<DeleteMeasureMutation>;
export type DeleteMeasureMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteMeasureMutation, DeleteMeasureMutationVariables>;
export const MeasureListDocument = gql`
    query MeasureList($input: FilterInput) {
  measures(input: $input) {
    nodes {
      ...Measure
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${MeasureFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useMeasureListQuery__
 *
 * To run a query within a React component, call `useMeasureListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeasureListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeasureListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMeasureListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeasureListQuery, MeasureListQueryVariables>) {
        return ApolloReactHooks.useQuery<MeasureListQuery, MeasureListQueryVariables>(MeasureListDocument, baseOptions);
      }
export function useMeasureListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeasureListQuery, MeasureListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeasureListQuery, MeasureListQueryVariables>(MeasureListDocument, baseOptions);
        }
export type MeasureListQueryHookResult = ReturnType<typeof useMeasureListQuery>;
export type MeasureListLazyQueryHookResult = ReturnType<typeof useMeasureListLazyQuery>;
export type MeasureListQueryResult = ApolloReactCommon.QueryResult<MeasureListQuery, MeasureListQueryVariables>;
export const MeasureDocument = gql`
    query Measure($id: ID!) {
  node(id: $id) {
    ...MeasureDetails
  }
}
    ${MeasureDetailsFragmentDoc}`;

/**
 * __useMeasureQuery__
 *
 * To run a query within a React component, call `useMeasureQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeasureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeasureQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeasureQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeasureQuery, MeasureQueryVariables>) {
        return ApolloReactHooks.useQuery<MeasureQuery, MeasureQueryVariables>(MeasureDocument, baseOptions);
      }
export function useMeasureLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeasureQuery, MeasureQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeasureQuery, MeasureQueryVariables>(MeasureDocument, baseOptions);
        }
export type MeasureQueryHookResult = ReturnType<typeof useMeasureQuery>;
export type MeasureLazyQueryHookResult = ReturnType<typeof useMeasureLazyQuery>;
export type MeasureQueryResult = ApolloReactCommon.QueryResult<MeasureQuery, MeasureQueryVariables>;
export const CreateNestDocument = gql`
    mutation CreateNest($input: RootInput!) {
  createNest(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateNestMutationFn = ApolloReactCommon.MutationFunction<CreateNestMutation, CreateNestMutationVariables>;

/**
 * __useCreateNestMutation__
 *
 * To run a mutation, you first call `useCreateNestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNestMutation, { data, loading, error }] = useCreateNestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateNestMutation, CreateNestMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateNestMutation, CreateNestMutationVariables>(CreateNestDocument, baseOptions);
      }
export type CreateNestMutationHookResult = ReturnType<typeof useCreateNestMutation>;
export type CreateNestMutationResult = ApolloReactCommon.MutationResult<CreateNestMutation>;
export type CreateNestMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateNestMutation, CreateNestMutationVariables>;
export const UpdateNestDocument = gql`
    mutation UpdateNest($input: RootUpdateInput!) {
  updateNest(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateNestMutationFn = ApolloReactCommon.MutationFunction<UpdateNestMutation, UpdateNestMutationVariables>;

/**
 * __useUpdateNestMutation__
 *
 * To run a mutation, you first call `useUpdateNestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNestMutation, { data, loading, error }] = useUpdateNestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateNestMutation, UpdateNestMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateNestMutation, UpdateNestMutationVariables>(UpdateNestDocument, baseOptions);
      }
export type UpdateNestMutationHookResult = ReturnType<typeof useUpdateNestMutation>;
export type UpdateNestMutationResult = ApolloReactCommon.MutationResult<UpdateNestMutation>;
export type UpdateNestMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateNestMutation, UpdateNestMutationVariables>;
export const DeleteNestDocument = gql`
    mutation DeleteNest($id: ID!) {
  deleteNest(id: $id) {
    id
  }
}
    `;
export type DeleteNestMutationFn = ApolloReactCommon.MutationFunction<DeleteNestMutation, DeleteNestMutationVariables>;

/**
 * __useDeleteNestMutation__
 *
 * To run a mutation, you first call `useDeleteNestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNestMutation, { data, loading, error }] = useDeleteNestMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteNestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteNestMutation, DeleteNestMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteNestMutation, DeleteNestMutationVariables>(DeleteNestDocument, baseOptions);
      }
export type DeleteNestMutationHookResult = ReturnType<typeof useDeleteNestMutation>;
export type DeleteNestMutationResult = ApolloReactCommon.MutationResult<DeleteNestMutation>;
export type DeleteNestMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteNestMutation, DeleteNestMutationVariables>;
export const NestListDocument = gql`
    query NestList($input: FilterInput) {
  nests(input: $input) {
    nodes {
      ...Nest
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${NestFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useNestListQuery__
 *
 * To run a query within a React component, call `useNestListQuery` and pass it any options that fit your needs.
 * When your component renders, `useNestListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNestListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useNestListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NestListQuery, NestListQueryVariables>) {
        return ApolloReactHooks.useQuery<NestListQuery, NestListQueryVariables>(NestListDocument, baseOptions);
      }
export function useNestListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NestListQuery, NestListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NestListQuery, NestListQueryVariables>(NestListDocument, baseOptions);
        }
export type NestListQueryHookResult = ReturnType<typeof useNestListQuery>;
export type NestListLazyQueryHookResult = ReturnType<typeof useNestListLazyQuery>;
export type NestListQueryResult = ApolloReactCommon.QueryResult<NestListQuery, NestListQueryVariables>;
export const NestDocument = gql`
    query Nest($id: ID!) {
  node(id: $id) {
    ...NestDetails
  }
}
    ${NestDetailsFragmentDoc}`;

/**
 * __useNestQuery__
 *
 * To run a query within a React component, call `useNestQuery` and pass it any options that fit your needs.
 * When your component renders, `useNestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNestQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useNestQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NestQuery, NestQueryVariables>) {
        return ApolloReactHooks.useQuery<NestQuery, NestQueryVariables>(NestDocument, baseOptions);
      }
export function useNestLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NestQuery, NestQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NestQuery, NestQueryVariables>(NestDocument, baseOptions);
        }
export type NestQueryHookResult = ReturnType<typeof useNestQuery>;
export type NestLazyQueryHookResult = ReturnType<typeof useNestLazyQuery>;
export type NestQueryResult = ApolloReactCommon.QueryResult<NestQuery, NestQueryVariables>;
export const CreatePropertyDocument = gql`
    mutation CreateProperty($input: RootInput!) {
  createProperty(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreatePropertyMutationFn = ApolloReactCommon.MutationFunction<CreatePropertyMutation, CreatePropertyMutationVariables>;

/**
 * __useCreatePropertyMutation__
 *
 * To run a mutation, you first call `useCreatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPropertyMutation, { data, loading, error }] = useCreatePropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePropertyMutation, CreatePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePropertyMutation, CreatePropertyMutationVariables>(CreatePropertyDocument, baseOptions);
      }
export type CreatePropertyMutationHookResult = ReturnType<typeof useCreatePropertyMutation>;
export type CreatePropertyMutationResult = ApolloReactCommon.MutationResult<CreatePropertyMutation>;
export type CreatePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePropertyMutation, CreatePropertyMutationVariables>;
export const UpdatePropertyDocument = gql`
    mutation UpdateProperty($input: RootUpdateInput!) {
  updateProperty(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdatePropertyMutationFn = ApolloReactCommon.MutationFunction<UpdatePropertyMutation, UpdatePropertyMutationVariables>;

/**
 * __useUpdatePropertyMutation__
 *
 * To run a mutation, you first call `useUpdatePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePropertyMutation, { data, loading, error }] = useUpdatePropertyMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdatePropertyMutation, UpdatePropertyMutationVariables>(UpdatePropertyDocument, baseOptions);
      }
export type UpdatePropertyMutationHookResult = ReturnType<typeof useUpdatePropertyMutation>;
export type UpdatePropertyMutationResult = ApolloReactCommon.MutationResult<UpdatePropertyMutation>;
export type UpdatePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdatePropertyMutation, UpdatePropertyMutationVariables>;
export const DeletePropertyDocument = gql`
    mutation DeleteProperty($id: ID!) {
  deleteProperty(id: $id) {
    id
  }
}
    `;
export type DeletePropertyMutationFn = ApolloReactCommon.MutationFunction<DeletePropertyMutation, DeletePropertyMutationVariables>;

/**
 * __useDeletePropertyMutation__
 *
 * To run a mutation, you first call `useDeletePropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePropertyMutation, { data, loading, error }] = useDeletePropertyMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePropertyMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeletePropertyMutation, DeletePropertyMutationVariables>) {
        return ApolloReactHooks.useMutation<DeletePropertyMutation, DeletePropertyMutationVariables>(DeletePropertyDocument, baseOptions);
      }
export type DeletePropertyMutationHookResult = ReturnType<typeof useDeletePropertyMutation>;
export type DeletePropertyMutationResult = ApolloReactCommon.MutationResult<DeletePropertyMutation>;
export type DeletePropertyMutationOptions = ApolloReactCommon.BaseMutationOptions<DeletePropertyMutation, DeletePropertyMutationVariables>;
export const PropertyListDocument = gql`
    query PropertyList($input: FilterInput) {
  properties(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __usePropertyListQuery__
 *
 * To run a query within a React component, call `usePropertyListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePropertyListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertyListQuery, PropertyListQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertyListQuery, PropertyListQueryVariables>(PropertyListDocument, baseOptions);
      }
export function usePropertyListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertyListQuery, PropertyListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertyListQuery, PropertyListQueryVariables>(PropertyListDocument, baseOptions);
        }
export type PropertyListQueryHookResult = ReturnType<typeof usePropertyListQuery>;
export type PropertyListLazyQueryHookResult = ReturnType<typeof usePropertyListLazyQuery>;
export type PropertyListQueryResult = ApolloReactCommon.QueryResult<PropertyListQuery, PropertyListQueryVariables>;
export const PropertyDocument = gql`
    query Property($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __usePropertyQuery__
 *
 * To run a query within a React component, call `usePropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `usePropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePropertyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePropertyQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
        return ApolloReactHooks.useQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, baseOptions);
      }
export function usePropertyLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PropertyQuery, PropertyQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PropertyQuery, PropertyQueryVariables>(PropertyDocument, baseOptions);
        }
export type PropertyQueryHookResult = ReturnType<typeof usePropertyQuery>;
export type PropertyLazyQueryHookResult = ReturnType<typeof usePropertyLazyQuery>;
export type PropertyQueryResult = ApolloReactCommon.QueryResult<PropertyQuery, PropertyQueryVariables>;
export const SearchViewDocument = gql`
    query SearchView($input: SearchInput) {
  search(input: $input) {
    nodes {
      ...CatalogItem
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${CatalogItemFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useSearchViewQuery__
 *
 * To run a query within a React component, call `useSearchViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchViewQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchViewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SearchViewQuery, SearchViewQueryVariables>) {
        return ApolloReactHooks.useQuery<SearchViewQuery, SearchViewQueryVariables>(SearchViewDocument, baseOptions);
      }
export function useSearchViewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SearchViewQuery, SearchViewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SearchViewQuery, SearchViewQueryVariables>(SearchViewDocument, baseOptions);
        }
export type SearchViewQueryHookResult = ReturnType<typeof useSearchViewQuery>;
export type SearchViewLazyQueryHookResult = ReturnType<typeof useSearchViewLazyQuery>;
export type SearchViewQueryResult = ApolloReactCommon.QueryResult<SearchViewQuery, SearchViewQueryVariables>;
export const CreateSubjectDocument = gql`
    mutation CreateSubject($input: RootInput!) {
  createSubject(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateSubjectMutationFn = ApolloReactCommon.MutationFunction<CreateSubjectMutation, CreateSubjectMutationVariables>;

/**
 * __useCreateSubjectMutation__
 *
 * To run a mutation, you first call `useCreateSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubjectMutation, { data, loading, error }] = useCreateSubjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSubjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSubjectMutation, CreateSubjectMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSubjectMutation, CreateSubjectMutationVariables>(CreateSubjectDocument, baseOptions);
      }
export type CreateSubjectMutationHookResult = ReturnType<typeof useCreateSubjectMutation>;
export type CreateSubjectMutationResult = ApolloReactCommon.MutationResult<CreateSubjectMutation>;
export type CreateSubjectMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSubjectMutation, CreateSubjectMutationVariables>;
export const UpdateSubjectDocument = gql`
    mutation UpdateSubject($input: RootUpdateInput!) {
  updateSubject(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateSubjectMutationFn = ApolloReactCommon.MutationFunction<UpdateSubjectMutation, UpdateSubjectMutationVariables>;

/**
 * __useUpdateSubjectMutation__
 *
 * To run a mutation, you first call `useUpdateSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSubjectMutation, { data, loading, error }] = useUpdateSubjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSubjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSubjectMutation, UpdateSubjectMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSubjectMutation, UpdateSubjectMutationVariables>(UpdateSubjectDocument, baseOptions);
      }
export type UpdateSubjectMutationHookResult = ReturnType<typeof useUpdateSubjectMutation>;
export type UpdateSubjectMutationResult = ApolloReactCommon.MutationResult<UpdateSubjectMutation>;
export type UpdateSubjectMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSubjectMutation, UpdateSubjectMutationVariables>;
export const DeleteSubjectDocument = gql`
    mutation DeleteSubject($id: ID!) {
  deleteSubject(id: $id) {
    id
  }
}
    `;
export type DeleteSubjectMutationFn = ApolloReactCommon.MutationFunction<DeleteSubjectMutation, DeleteSubjectMutationVariables>;

/**
 * __useDeleteSubjectMutation__
 *
 * To run a mutation, you first call `useDeleteSubjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubjectMutation, { data, loading, error }] = useDeleteSubjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSubjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteSubjectMutation, DeleteSubjectMutationVariables>(DeleteSubjectDocument, baseOptions);
      }
export type DeleteSubjectMutationHookResult = ReturnType<typeof useDeleteSubjectMutation>;
export type DeleteSubjectMutationResult = ApolloReactCommon.MutationResult<DeleteSubjectMutation>;
export type DeleteSubjectMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteSubjectMutation, DeleteSubjectMutationVariables>;
export const SubjectListDocument = gql`
    query SubjectList($input: FilterInput) {
  subjects(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useSubjectListQuery__
 *
 * To run a query within a React component, call `useSubjectListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubjectListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubjectListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubjectListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SubjectListQuery, SubjectListQueryVariables>) {
        return ApolloReactHooks.useQuery<SubjectListQuery, SubjectListQueryVariables>(SubjectListDocument, baseOptions);
      }
export function useSubjectListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SubjectListQuery, SubjectListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SubjectListQuery, SubjectListQueryVariables>(SubjectListDocument, baseOptions);
        }
export type SubjectListQueryHookResult = ReturnType<typeof useSubjectListQuery>;
export type SubjectListLazyQueryHookResult = ReturnType<typeof useSubjectListLazyQuery>;
export type SubjectListQueryResult = ApolloReactCommon.QueryResult<SubjectListQuery, SubjectListQueryVariables>;
export const SubjectDocument = gql`
    query Subject($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __useSubjectQuery__
 *
 * To run a query within a React component, call `useSubjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubjectQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubjectQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SubjectQuery, SubjectQueryVariables>) {
        return ApolloReactHooks.useQuery<SubjectQuery, SubjectQueryVariables>(SubjectDocument, baseOptions);
      }
export function useSubjectLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SubjectQuery, SubjectQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SubjectQuery, SubjectQueryVariables>(SubjectDocument, baseOptions);
        }
export type SubjectQueryHookResult = ReturnType<typeof useSubjectQuery>;
export type SubjectLazyQueryHookResult = ReturnType<typeof useSubjectLazyQuery>;
export type SubjectQueryResult = ApolloReactCommon.QueryResult<SubjectQuery, SubjectQueryVariables>;
export const CreateUnitDocument = gql`
    mutation CreateUnit($input: RootInput!) {
  createUnit(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type CreateUnitMutationFn = ApolloReactCommon.MutationFunction<CreateUnitMutation, CreateUnitMutationVariables>;

/**
 * __useCreateUnitMutation__
 *
 * To run a mutation, you first call `useCreateUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUnitMutation, { data, loading, error }] = useCreateUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUnitMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUnitMutation, CreateUnitMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUnitMutation, CreateUnitMutationVariables>(CreateUnitDocument, baseOptions);
      }
export type CreateUnitMutationHookResult = ReturnType<typeof useCreateUnitMutation>;
export type CreateUnitMutationResult = ApolloReactCommon.MutationResult<CreateUnitMutation>;
export type CreateUnitMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUnitMutation, CreateUnitMutationVariables>;
export const UpdateUnitDocument = gql`
    mutation UpdateUnit($input: RootUpdateInput!) {
  updateUnit(input: $input) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;
export type UpdateUnitMutationFn = ApolloReactCommon.MutationFunction<UpdateUnitMutation, UpdateUnitMutationVariables>;

/**
 * __useUpdateUnitMutation__
 *
 * To run a mutation, you first call `useUpdateUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUnitMutation, { data, loading, error }] = useUpdateUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUnitMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUnitMutation, UpdateUnitMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUnitMutation, UpdateUnitMutationVariables>(UpdateUnitDocument, baseOptions);
      }
export type UpdateUnitMutationHookResult = ReturnType<typeof useUpdateUnitMutation>;
export type UpdateUnitMutationResult = ApolloReactCommon.MutationResult<UpdateUnitMutation>;
export type UpdateUnitMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUnitMutation, UpdateUnitMutationVariables>;
export const DeleteUnitDocument = gql`
    mutation DeleteUnit($id: ID!) {
  deleteUnit(id: $id) {
    id
  }
}
    `;
export type DeleteUnitMutationFn = ApolloReactCommon.MutationFunction<DeleteUnitMutation, DeleteUnitMutationVariables>;

/**
 * __useDeleteUnitMutation__
 *
 * To run a mutation, you first call `useDeleteUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUnitMutation, { data, loading, error }] = useDeleteUnitMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUnitMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUnitMutation, DeleteUnitMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteUnitMutation, DeleteUnitMutationVariables>(DeleteUnitDocument, baseOptions);
      }
export type DeleteUnitMutationHookResult = ReturnType<typeof useDeleteUnitMutation>;
export type DeleteUnitMutationResult = ApolloReactCommon.MutationResult<DeleteUnitMutation>;
export type DeleteUnitMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUnitMutation, DeleteUnitMutationVariables>;
export const UnitListDocument = gql`
    query UnitList($input: FilterInput) {
  units(input: $input) {
    nodes {
      ...Root
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${RootFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useUnitListQuery__
 *
 * To run a query within a React component, call `useUnitListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnitListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnitListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUnitListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UnitListQuery, UnitListQueryVariables>) {
        return ApolloReactHooks.useQuery<UnitListQuery, UnitListQueryVariables>(UnitListDocument, baseOptions);
      }
export function useUnitListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UnitListQuery, UnitListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UnitListQuery, UnitListQueryVariables>(UnitListDocument, baseOptions);
        }
export type UnitListQueryHookResult = ReturnType<typeof useUnitListQuery>;
export type UnitListLazyQueryHookResult = ReturnType<typeof useUnitListLazyQuery>;
export type UnitListQueryResult = ApolloReactCommon.QueryResult<UnitListQuery, UnitListQueryVariables>;
export const UnitDocument = gql`
    query Unit($id: ID!) {
  node(id: $id) {
    ...RootDetails
  }
}
    ${RootDetailsFragmentDoc}`;

/**
 * __useUnitQuery__
 *
 * To run a query within a React component, call `useUnitQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnitQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnitQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UnitQuery, UnitQueryVariables>) {
        return ApolloReactHooks.useQuery<UnitQuery, UnitQueryVariables>(UnitDocument, baseOptions);
      }
export function useUnitLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UnitQuery, UnitQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UnitQuery, UnitQueryVariables>(UnitDocument, baseOptions);
        }
export type UnitQueryHookResult = ReturnType<typeof useUnitQuery>;
export type UnitLazyQueryHookResult = ReturnType<typeof useUnitLazyQuery>;
export type UnitQueryResult = ApolloReactCommon.QueryResult<UnitQuery, UnitQueryVariables>;
export const CreateValueDocument = gql`
    mutation CreateValue($input: ValueInput!) {
  createValue(input: $input) {
    ...ValueDetails
  }
}
    ${ValueDetailsFragmentDoc}`;
export type CreateValueMutationFn = ApolloReactCommon.MutationFunction<CreateValueMutation, CreateValueMutationVariables>;

/**
 * __useCreateValueMutation__
 *
 * To run a mutation, you first call `useCreateValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createValueMutation, { data, loading, error }] = useCreateValueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateValueMutation, CreateValueMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateValueMutation, CreateValueMutationVariables>(CreateValueDocument, baseOptions);
      }
export type CreateValueMutationHookResult = ReturnType<typeof useCreateValueMutation>;
export type CreateValueMutationResult = ApolloReactCommon.MutationResult<CreateValueMutation>;
export type CreateValueMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateValueMutation, CreateValueMutationVariables>;
export const UpdateValueDocument = gql`
    mutation UpdateValue($input: ValueUpdateInput!) {
  updateValue(input: $input) {
    ...ValueDetails
  }
}
    ${ValueDetailsFragmentDoc}`;
export type UpdateValueMutationFn = ApolloReactCommon.MutationFunction<UpdateValueMutation, UpdateValueMutationVariables>;

/**
 * __useUpdateValueMutation__
 *
 * To run a mutation, you first call `useUpdateValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateValueMutation, { data, loading, error }] = useUpdateValueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateValueMutation, UpdateValueMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateValueMutation, UpdateValueMutationVariables>(UpdateValueDocument, baseOptions);
      }
export type UpdateValueMutationHookResult = ReturnType<typeof useUpdateValueMutation>;
export type UpdateValueMutationResult = ApolloReactCommon.MutationResult<UpdateValueMutation>;
export type UpdateValueMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateValueMutation, UpdateValueMutationVariables>;
export const DeleteValueDocument = gql`
    mutation DeleteValue($id: ID!) {
  deleteValue(id: $id) {
    id
  }
}
    `;
export type DeleteValueMutationFn = ApolloReactCommon.MutationFunction<DeleteValueMutation, DeleteValueMutationVariables>;

/**
 * __useDeleteValueMutation__
 *
 * To run a mutation, you first call `useDeleteValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteValueMutation, { data, loading, error }] = useDeleteValueMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteValueMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteValueMutation, DeleteValueMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteValueMutation, DeleteValueMutationVariables>(DeleteValueDocument, baseOptions);
      }
export type DeleteValueMutationHookResult = ReturnType<typeof useDeleteValueMutation>;
export type DeleteValueMutationResult = ApolloReactCommon.MutationResult<DeleteValueMutation>;
export type DeleteValueMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteValueMutation, DeleteValueMutationVariables>;
export const ValueListDocument = gql`
    query ValueList($input: FilterInput) {
  values(input: $input) {
    nodes {
      ...Value
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${ValueFragmentDoc}
${PageInfoFragmentDoc}`;

/**
 * __useValueListQuery__
 *
 * To run a query within a React component, call `useValueListQuery` and pass it any options that fit your needs.
 * When your component renders, `useValueListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValueListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useValueListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ValueListQuery, ValueListQueryVariables>) {
        return ApolloReactHooks.useQuery<ValueListQuery, ValueListQueryVariables>(ValueListDocument, baseOptions);
      }
export function useValueListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ValueListQuery, ValueListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ValueListQuery, ValueListQueryVariables>(ValueListDocument, baseOptions);
        }
export type ValueListQueryHookResult = ReturnType<typeof useValueListQuery>;
export type ValueListLazyQueryHookResult = ReturnType<typeof useValueListLazyQuery>;
export type ValueListQueryResult = ApolloReactCommon.QueryResult<ValueListQuery, ValueListQueryVariables>;
export const ValueDocument = gql`
    query Value($id: ID!) {
  node(id: $id) {
    ...ValueDetails
  }
}
    ${ValueDetailsFragmentDoc}`;

/**
 * __useValueQuery__
 *
 * To run a query within a React component, call `useValueQuery` and pass it any options that fit your needs.
 * When your component renders, `useValueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useValueQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useValueQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ValueQuery, ValueQueryVariables>) {
        return ApolloReactHooks.useQuery<ValueQuery, ValueQueryVariables>(ValueDocument, baseOptions);
      }
export function useValueLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ValueQuery, ValueQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ValueQuery, ValueQueryVariables>(ValueDocument, baseOptions);
        }
export type ValueQueryHookResult = ReturnType<typeof useValueQuery>;
export type ValueLazyQueryHookResult = ReturnType<typeof useValueLazyQuery>;
export type ValueQueryResult = ApolloReactCommon.QueryResult<ValueQuery, ValueQueryVariables>;
