import {gql} from '@apollo/client';
import * as React from 'react';
import XtdTableView from "../table/XtdTableView";
import {XtdSubject} from "../../types";

// TODO: Possible bug in Apollo client does forbid usage of fragments...
//       Fragments are retrieved from server but not unpacked into data.
export const SUBJECTS_VIEW_QUERY = gql`
  query Subjects($term: String, $options: PagingOptions) {
    subjects(term: $term, options: $options) {
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
        pageSize
        pageNumber
        totalElements
        totalPages
      }
    }
  }
`;

export const SUBJECTS_VIEW_DELETE_MUTATION = gql`
  mutation SubjectsViewDelete($id: ID!) {
    deleteSubject(id: $id) {
      id
    }
  }
`;

export default function SubjectsView() {
  return (
    <XtdTableView<XtdSubject>
      title="Subjects"
      queryKey="subjects"
      findAllQuery={SUBJECTS_VIEW_QUERY}
      deleteQuery={SUBJECTS_VIEW_DELETE_MUTATION}
    />
  );
};
