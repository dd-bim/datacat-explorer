import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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
  descriptions?: Maybe<Array<TextInput>>;
  relatingCollection: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};

export type CollectsUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions?: Maybe<Array<TextInput>>;
  relatingCollection: Scalars['ID'];
  relatedThings: Array<Scalars['ID']>;
};


export type EntityInput = {
  id?: Maybe<Scalars['ID']>;
  names: Array<TextInput>;
};

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



export type PagingInput = {
  pageNumber?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
};


/**
 * enum EntityTypes {
 *     XtdActivity
 *     XtdActor
 *     XtdBag
 *     XtdClassification
 *     XtdExternalDocument
 *     XtdMeasureWithUnit
 *     XtdNest
 *     XtdProperty
 *     XtdRelActsUpon
 *     XtdRelAssignsCollections
 *     XtdRelAssignsMeasures
 *     XtdRelAssignsProperties
 *     XtdRelAssignsPropertyWithValues
 *     XtdRelAssignsUnit
 *     XtdRelAssignsValues
 *     XtdRelAssociates
 *     XtdRelClassifies
 *     XtdRelCollects
 *     XtdRelComposes
 *     XtdRelDocuments
 *     XtdRelGroups
 *     XtdRelSequences
 *     XtdRelSpecializes
 *     XtdSubject
 *     XtdUnit
 *     XtdValue
 * }
 * input SearchInput {
 *     query: String
 *     queryScope: QueryScopes
 *     entityTypeIn: [EntityTypes!]
 *     entityTypeNotIn: [EntityTypes!]
 *     idIn: [String!]
 *     idNotIn: [String!]
 *     pageNumber: Int
 *     pageSize: Int
 * }
 *  inputs
 */
export enum QueryScopes {
  All = 'ALL',
  Names = 'NAMES',
  Descriptions = 'DESCRIPTIONS'
}

export type RelDocumentsInput = {
  id?: Maybe<Scalars['ID']>;
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions?: Maybe<Array<TextInput>>;
  relatingDocument: Scalars['ID'];
  relatedObjects: Array<Scalars['ID']>;
};

export type RelDocumentsUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions?: Maybe<Array<TextInput>>;
  relatingDocument: Scalars['ID'];
  relatedObjects: Array<Scalars['ID']>;
};

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
  descriptions?: Maybe<Array<TextInput>>;
  toleranceType?: Maybe<XtdToleranceTypeEnum>;
  lowerTolerance?: Maybe<Scalars['String']>;
  upperTolerance?: Maybe<Scalars['String']>;
  valueRole?: Maybe<XtdValueRoleEnum>;
  valueType?: Maybe<XtdValueTypeEnum>;
  nominalValue?: Maybe<Scalars['String']>;
};

export type ValueUpdateInput = {
  id: Scalars['ID'];
  versionId: Scalars['String'];
  versionDate: Scalars['String'];
  names: Array<TextInput>;
  descriptions: Array<TextInput>;
  toleranceType?: Maybe<XtdToleranceTypeEnum>;
  lowerTolerance?: Maybe<Scalars['String']>;
  upperTolerance?: Maybe<Scalars['String']>;
  valueRole?: Maybe<XtdValueRoleEnum>;
  valueType?: Maybe<XtdValueTypeEnum>;
  nominalValue?: Maybe<Scalars['String']>;
};













































export enum XtdToleranceTypeEnum {
  Realvalue = 'Realvalue',
  Percentage = 'Percentage'
}





export enum XtdValueRoleEnum {
  Nominal = 'Nominal',
  Maximum = 'Maximum',
  Minimum = 'Minimum'
}

export enum XtdValueTypeEnum {
  XtdString = 'XtdString',
  XtdNumber = 'XtdNumber',
  XtdInteger = 'XtdInteger',
  XtdReal = 'XtdReal',
  XtdBoolean = 'XtdBoolean',
  XtdLogical = 'XtdLogical'
}

export type CreateActivityMutationVariables = {
  input: RootInput;
};


export type CreateActivityMutation = { __typename: 'Mutation', createActivity?: Maybe<(
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  )> };

export type UpdateActivityMutationVariables = {
  input: RootUpdateInput;
};


export type UpdateActivityMutation = { __typename: 'Mutation', updateActivity?: Maybe<(
    { __typename: 'XtdActivity' }
    & RootDetails_XtdActivity_Fragment
  )> };

export type DeleteActivityMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteActivityMutation = { __typename: 'Mutation', deleteActivity?: Maybe<{ __typename: 'XtdActivity', id: string }> };

export type ActivityListQueryVariables = {
  input?: Maybe<FilterInput>;
};


export type ActivityListQuery = { __typename: 'Query', activities: { __typename: 'XtdActivityConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdActivity' }
      & Root_XtdActivity_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ActivityQueryVariables = {
  id: Scalars['ID'];
};


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
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  )> };

export type SearchInputQueryVariables = {
  input?: Maybe<FilterInput>;
};


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
      { __typename: 'XtdProperty' }
      & CatalogItem_XtdProperty_Fragment
      & Root_XtdProperty_Fragment
    ) | (
      { __typename: 'XtdSubject' }
      & CatalogItem_XtdSubject_Fragment
      & Root_XtdSubject_Fragment
    ) | (
      { __typename: 'XtdUnit' }
      & CatalogItem_XtdUnit_Fragment
      & Root_XtdUnit_Fragment
    ) | (
      { __typename: 'XtdValue' }
      & CatalogItem_XtdValue_Fragment
      & Root_XtdValue_Fragment
    ) | (
      { __typename: 'XtdBag' }
      & CatalogItem_XtdBag_Fragment
      & Root_XtdBag_Fragment
    ) | (
      { __typename: 'XtdNest' }
      & CatalogItem_XtdNest_Fragment
      & Root_XtdNest_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type LoginFormMutationVariables = {
  credentials: LoginInput;
};


export type LoginFormMutation = { __typename: 'Mutation', login: (
    { __typename: 'UserSession' }
    & UserSessionFragment
  ) };

export type SignupFormMutationVariables = {
  profile: SignupInput;
};


export type SignupFormMutation = { __typename: 'Mutation', signup: { __typename: 'UserSession', token: string, user: (
      { __typename: 'UserProfile' }
      & UserProfileFragment
    ) } };

export type CatalogItemSelectQueryVariables = {
  input?: Maybe<FilterInput>;
};


export type CatalogItemSelectQuery = { __typename: 'Query', search: { __typename: 'SearchResultConnection', totalElements: number, nodes: Array<{ __typename: 'XtdExternalDocument', id: string, label: string } | { __typename: 'XtdRelDocuments', id: string, label: string } | { __typename: 'XtdRelActsUpon', id: string, label: string } | { __typename: 'XtdRelAssociates', id: string, label: string } | { __typename: 'XtdRelCollects', id: string, label: string } | { __typename: 'XtdRelComposes', id: string, label: string } | { __typename: 'XtdRelGroups', id: string, label: string } | { __typename: 'XtdRelSpecializes', id: string, label: string } | { __typename: 'XtdActor', id: string, label: string } | { __typename: 'XtdActivity', id: string, label: string } | { __typename: 'XtdClassification', id: string, label: string } | { __typename: 'XtdMeasureWithUnit', id: string, label: string } | { __typename: 'XtdProperty', id: string, label: string } | { __typename: 'XtdSubject', id: string, label: string } | { __typename: 'XtdUnit', id: string, label: string } | { __typename: 'XtdValue', id: string, label: string } | { __typename: 'XtdBag', id: string, label: string } | { __typename: 'XtdNest', id: string, label: string }>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type CreateExternalDocumentMutationVariables = {
  input: EntityInput;
};


export type CreateExternalDocumentMutation = { __typename: 'Mutation', createExternalDocument?: Maybe<(
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  )> };

export type UpdateExternalDocumentMutationVariables = {
  input: EntityUpdateInput;
};


export type UpdateExternalDocumentMutation = { __typename: 'Mutation', updateExternalDocument?: Maybe<(
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  )> };

export type DeleteExternalDocumentMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteExternalDocumentMutation = { __typename: 'Mutation', deleteExternalDocument?: Maybe<{ __typename: 'XtdExternalDocument', id: string }> };

export type ExternalDocumentListQueryVariables = {
  input?: Maybe<FilterInput>;
};


export type ExternalDocumentListQuery = { __typename: 'Query', externalDocuments: { __typename: 'XtdExternalDocumentConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdExternalDocument' }
      & ExternalDocumentFragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type ExternalDocumentQueryVariables = {
  id: Scalars['ID'];
};


export type ExternalDocumentQuery = { __typename: 'Query', node?: Maybe<{ __typename: 'XtdName' } | (
    { __typename: 'XtdExternalDocument' }
    & ExternalDocumentDetailsFragment
  ) | { __typename: 'XtdRelDocuments' } | { __typename: 'XtdDescription' } | { __typename: 'XtdRelActsUpon' } | { __typename: 'XtdRelAssociates' } | { __typename: 'XtdRelCollects' } | { __typename: 'XtdRelComposes' } | { __typename: 'XtdRelGroups' } | { __typename: 'XtdRelSpecializes' } | { __typename: 'XtdActor' } | { __typename: 'XtdActivity' } | { __typename: 'XtdClassification' } | { __typename: 'XtdMeasureWithUnit' } | { __typename: 'XtdProperty' } | { __typename: 'XtdSubject' } | { __typename: 'XtdUnit' } | { __typename: 'XtdValue' } | { __typename: 'XtdBag' } | { __typename: 'XtdNest' }> };

export type SearchViewQueryVariables = {
  input?: Maybe<FilterInput>;
};


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
      { __typename: 'XtdProperty' }
      & CatalogItem_XtdProperty_Fragment
    ) | (
      { __typename: 'XtdSubject' }
      & CatalogItem_XtdSubject_Fragment
    ) | (
      { __typename: 'XtdUnit' }
      & CatalogItem_XtdUnit_Fragment
    ) | (
      { __typename: 'XtdValue' }
      & CatalogItem_XtdValue_Fragment
    ) | (
      { __typename: 'XtdBag' }
      & CatalogItem_XtdBag_Fragment
    ) | (
      { __typename: 'XtdNest' }
      & CatalogItem_XtdNest_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type CreateSubjectMutationVariables = {
  input: RootInput;
};


export type CreateSubjectMutation = { __typename: 'Mutation', createSubject?: Maybe<(
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  )> };

export type UpdateSubjectMutationVariables = {
  input: RootUpdateInput;
};


export type UpdateSubjectMutation = { __typename: 'Mutation', updateSubject?: Maybe<(
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  )> };

export type DeleteSubjectMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteSubjectMutation = { __typename: 'Mutation', deleteSubject?: Maybe<{ __typename: 'XtdSubject', id: string }> };

export type SubjectListQueryVariables = {
  input?: Maybe<FilterInput>;
};


export type SubjectListQuery = { __typename: 'Query', subjects: { __typename: 'XtdSubjectConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdSubject' }
      & Root_XtdSubject_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } };

export type SubjectQueryVariables = {
  id: Scalars['ID'];
};


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
    { __typename: 'XtdProperty' }
    & RootDetails_XtdProperty_Fragment
  ) | (
    { __typename: 'XtdSubject' }
    & RootDetails_XtdSubject_Fragment
  ) | (
    { __typename: 'XtdUnit' }
    & RootDetails_XtdUnit_Fragment
  ) | (
    { __typename: 'XtdValue' }
    & RootDetails_XtdValue_Fragment
  ) | (
    { __typename: 'XtdBag' }
    & RootDetails_XtdBag_Fragment
  ) | (
    { __typename: 'XtdNest' }
    & RootDetails_XtdNest_Fragment
  )> };

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

type CatalogItem_XtdProperty_Fragment = { __typename: 'XtdProperty', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdSubject_Fragment = { __typename: 'XtdSubject', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
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

type CatalogItem_XtdBag_Fragment = { __typename: 'XtdBag', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

type CatalogItem_XtdNest_Fragment = { __typename: 'XtdNest', id: string, label: string, created: string, createdBy: string, lastModified: string, lastModifiedBy: string, names: Array<(
    { __typename: 'XtdName' }
    & Text_XtdName_Fragment
  )> };

export type CatalogItemFragment = CatalogItem_XtdExternalDocument_Fragment | CatalogItem_XtdRelDocuments_Fragment | CatalogItem_XtdRelActsUpon_Fragment | CatalogItem_XtdRelAssociates_Fragment | CatalogItem_XtdRelCollects_Fragment | CatalogItem_XtdRelComposes_Fragment | CatalogItem_XtdRelGroups_Fragment | CatalogItem_XtdRelSpecializes_Fragment | CatalogItem_XtdActor_Fragment | CatalogItem_XtdActivity_Fragment | CatalogItem_XtdClassification_Fragment | CatalogItem_XtdMeasureWithUnit_Fragment | CatalogItem_XtdProperty_Fragment | CatalogItem_XtdSubject_Fragment | CatalogItem_XtdUnit_Fragment | CatalogItem_XtdValue_Fragment | CatalogItem_XtdBag_Fragment | CatalogItem_XtdNest_Fragment;

export type ExternalDocumentFragment = (
  { __typename: 'XtdExternalDocument', documents: { __typename: 'XtdRelDocumentsConnection', totalElements: number } }
  & CatalogItem_XtdExternalDocument_Fragment
);

export type ExternalDocumentDetailsFragment = (
  { __typename: 'XtdExternalDocument', documents: { __typename: 'XtdRelDocumentsConnection', totalElements: number, nodes: Array<(
      { __typename: 'XtdRelDocuments', relatedObjects: { __typename: 'XtdObjectConnection', totalElements: number, nodes: Array<(
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
          { __typename: 'XtdProperty' }
          & CatalogItem_XtdProperty_Fragment
        ) | (
          { __typename: 'XtdSubject' }
          & CatalogItem_XtdSubject_Fragment
        ) | (
          { __typename: 'XtdUnit' }
          & CatalogItem_XtdUnit_Fragment
        ) | (
          { __typename: 'XtdValue' }
          & CatalogItem_XtdValue_Fragment
        )>, pageInfo: (
          { __typename: 'PageInfo' }
          & PageInfoFragment
        ) } }
      & CatalogItem_XtdRelDocuments_Fragment
    )>, pageInfo: (
      { __typename: 'PageInfo' }
      & PageInfoFragment
    ) } }
  & CatalogItem_XtdExternalDocument_Fragment
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

export type RootFragment = Root_XtdRelDocuments_Fragment | Root_XtdRelActsUpon_Fragment | Root_XtdRelAssociates_Fragment | Root_XtdRelCollects_Fragment | Root_XtdRelComposes_Fragment | Root_XtdRelGroups_Fragment | Root_XtdRelSpecializes_Fragment | Root_XtdActor_Fragment | Root_XtdActivity_Fragment | Root_XtdClassification_Fragment | Root_XtdMeasureWithUnit_Fragment | Root_XtdProperty_Fragment | Root_XtdSubject_Fragment | Root_XtdUnit_Fragment | Root_XtdValue_Fragment | Root_XtdBag_Fragment | Root_XtdNest_Fragment;

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

export type RootDetailsFragment = RootDetails_XtdRelDocuments_Fragment | RootDetails_XtdRelActsUpon_Fragment | RootDetails_XtdRelAssociates_Fragment | RootDetails_XtdRelCollects_Fragment | RootDetails_XtdRelComposes_Fragment | RootDetails_XtdRelGroups_Fragment | RootDetails_XtdRelSpecializes_Fragment | RootDetails_XtdActor_Fragment | RootDetails_XtdActivity_Fragment | RootDetails_XtdClassification_Fragment | RootDetails_XtdMeasureWithUnit_Fragment | RootDetails_XtdProperty_Fragment | RootDetails_XtdSubject_Fragment | RootDetails_XtdUnit_Fragment | RootDetails_XtdValue_Fragment | RootDetails_XtdBag_Fragment | RootDetails_XtdNest_Fragment;

type Text_XtdName_Fragment = { __typename: 'XtdName', id: string, value: string, language: { __typename: 'XtdLanguage', id: string, languageNameInEnglish: string, languageNameInSelf: string } };

type Text_XtdDescription_Fragment = { __typename: 'XtdDescription', id: string, value: string, language: { __typename: 'XtdLanguage', id: string, languageNameInEnglish: string, languageNameInSelf: string } };

export type TextFragment = Text_XtdName_Fragment | Text_XtdDescription_Fragment;

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
export const ExternalDocumentFragmentDoc = gql`
    fragment ExternalDocument on XtdExternalDocument {
  ...CatalogItem
  documents {
    totalElements
  }
}
    ${CatalogItemFragmentDoc}`;
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
      ...CatalogItem
      relatedObjects {
        nodes {
          ...CatalogItem
        }
        pageInfo {
          ...PageInfo
        }
        totalElements
      }
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${CatalogItemFragmentDoc}
${PageInfoFragmentDoc}`;
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
export const SearchInputDocument = gql`
    query SearchInput($input: FilterInput) {
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
export const CatalogItemSelectDocument = gql`
    query CatalogItemSelect($input: FilterInput) {
  search(input: $input) {
    nodes {
      id
      label
    }
    pageInfo {
      ...PageInfo
    }
    totalElements
  }
}
    ${PageInfoFragmentDoc}`;

/**
 * __useCatalogItemSelectQuery__
 *
 * To run a query within a React component, call `useCatalogItemSelectQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogItemSelectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogItemSelectQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCatalogItemSelectQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CatalogItemSelectQuery, CatalogItemSelectQueryVariables>) {
        return ApolloReactHooks.useQuery<CatalogItemSelectQuery, CatalogItemSelectQueryVariables>(CatalogItemSelectDocument, baseOptions);
      }
export function useCatalogItemSelectLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CatalogItemSelectQuery, CatalogItemSelectQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CatalogItemSelectQuery, CatalogItemSelectQueryVariables>(CatalogItemSelectDocument, baseOptions);
        }
export type CatalogItemSelectQueryHookResult = ReturnType<typeof useCatalogItemSelectQuery>;
export type CatalogItemSelectLazyQueryHookResult = ReturnType<typeof useCatalogItemSelectLazyQuery>;
export type CatalogItemSelectQueryResult = ApolloReactCommon.QueryResult<CatalogItemSelectQuery, CatalogItemSelectQueryVariables>;
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
export const SearchViewDocument = gql`
    query SearchView($input: FilterInput) {
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
