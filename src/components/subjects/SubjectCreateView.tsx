import React from 'react';
import {gql, useMutation} from '@apollo/client';
import XtdObjectForm from '../form/XtdObjectForm';
import {XtdSubject} from "../../types";
import {FieldValues, OnSubmit} from "react-hook-form";
import {SUBJECTS_VIEW_QUERY} from "./SubjectsView";

export const SUBJECT_ADD_MUTATION = gql`
    mutation SubjectFormAdd($input: RootInput!) {
        createSubject(input: $input) {
            id
            created
            lastModified
            versionId
            versionDate
            names {
                id
                created
                lastModified
                languageName { id }
                value
            }
            descriptions {
                id
                created
                lastModified
                languageName { id }
                value
            }
        }
    }
`;

interface SubjectCreateViewProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export default function SubjectCreateView(props: SubjectCreateViewProps) {
    const {
      onSubmit,
      onCancel
    } = props;
    const [executeCreate] = useMutation(SUBJECT_ADD_MUTATION);

    const handleSubmit: OnSubmit<FieldValues> = async (data, e) => {
        await executeCreate({
          variables: { input: data },
          refetchQueries: [ { query: SUBJECTS_VIEW_QUERY }],
          awaitRefetchQueries: true
        });
        onSubmit();
    };

    return <XtdObjectForm<XtdSubject>
      title="Add subject"
      onSubmit={handleSubmit}
      onCancel={onCancel}
    />;
}
