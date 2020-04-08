import {gql, useMutation, useQuery} from '@apollo/client';
import React from 'react';
import {useParams} from 'react-router-dom';
import XtdObjectForm from '../form/XtdObjectForm';
import {FieldValues, OnSubmit} from "react-hook-form";
import {XtdSubject} from "../../types";

export const SUBJECT_FORM_UPDATE_QUERY = gql`
  query SubjectForm($id: ID!) {
    subject(id: $id) {
      id
      label
      created
      lastModified
      versionId
      versionDate
      names {
        id
        created
        lastModified
        languageCode
        value
      }
      descriptions {
        id
        created
        lastModified
        languageCode
        value
      }
    }
  }
`;

export const SUBJECT_FORM_UPDATE_MUTATION = gql`
  mutation SubjectFormUpdate($input: RootUpdateInput!) {
    updateSubject(input: $input) {
      id
      label
      created
      lastModified
      versionId
      versionDate
      names {
        id
        created
        lastModified
        languageCode
        value
      }
      descriptions {
        id
        created
        lastModified
        languageCode
        value
      }
    }
  }
`;

interface SubjectUpdateViewProps {
  queryKey: string;
  onSubmit: () => void;
  onCancel: () => void;
}


interface QueryData<T> {
  [name: string]: T
}

export default function SubjectUpdateView(props: SubjectUpdateViewProps) {
  const {queryKey, onSubmit, onCancel} = props;
  const {id} = useParams();
  const {loading, error, data} = useQuery<QueryData<XtdSubject>>(SUBJECT_FORM_UPDATE_QUERY, {variables: {id}});
  const [executeUpdate] = useMutation(SUBJECT_FORM_UPDATE_MUTATION);

  const handleSubmit: OnSubmit<FieldValues> = async data => {
    await executeUpdate({variables: {input: data}});
    onSubmit();
  };

  if (loading) return (
    <p>Loading...</p>
  );

  if (error) return (
    <p>Error...</p>
  );


  return data ? (
    <XtdObjectForm<XtdSubject>
      title={`Update ${data[queryKey].label}`}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      defaultValues={data[queryKey]}
    />)
    : <div />;
}
