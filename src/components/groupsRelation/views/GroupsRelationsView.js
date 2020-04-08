import {gql} from '@apollo/client';
import * as React from 'react';
import XtdTableView from '../../table/XtdTableView';

// TODO: Possible bug in Apollo client does forbid usage of fragments...
//       Fragments are retrieved from server but not unpacked into data.
export const GROUPS_QUERY = gql`
  query Subjects($term: String, $options: PagingOptions) {
    groupsRelations(term: $term, options: $options) {
      nodes {
        id
        created
        lastModified
        label
        descriptions { id value }
        versionId
        versionDate
        groups(options: { pageSize: 100 }) {
          nodes { id label }
          page {
            totalElements
          }
        }
        groupedBy(options: { pageSize: 100 }) {
          nodes { id label }
          page {
            totalElements
          }
        }
      }
      page {
        totalElements
        pageSize
        pageNumber
      }
    }
  }
`;

export const GROUPS_DELETE_MUTATION = gql`
  mutation SubjectsViewDelete($id: ID!) {
    deleteGroupsRelation(id: $id) {
      id
    }
  }
`;

export default function SubjectsView() {
  return (
    <XtdTableView
      title='Groups relationships'
      queryKey="groupsRelations"
      findAllQuery={GROUPS_QUERY}
      deleteQuery={GROUPS_DELETE_MUTATION}
    />
  );
};
