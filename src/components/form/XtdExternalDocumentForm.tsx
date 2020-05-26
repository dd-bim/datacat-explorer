import React from 'react';
import {sanitizeEntityInput} from '../../utils';
import {FieldValues, FormContext, OnSubmit, useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import {XtdExternalDocument} from "../../types";
import useAuthContext from "../../hooks/useAuthContext";
import XtdEntityFormset from "./XtdEntityFormset";

interface XtdExternalDocumentFormProps {
  title: string;
  defaultValues?: XtdExternalDocument;
  onSubmit: OnSubmit<FieldValues>
  onCancel: () => void;
}

export default function XtdExternalDocumentForm(props: XtdExternalDocumentFormProps) {
  const { title, defaultValues, onSubmit, onCancel } = props;
  const { hasRole } = useAuthContext();
  const formMethods = useForm({ defaultValues });
  const { handleSubmit } = formMethods;

  const handleValidSubmit: OnSubmit<FieldValues> = (data, e) => {
    sanitizeEntityInput(data);
    onSubmit(data, e);
  };

  return (
    <FormContext {...formMethods}>
      <form onSubmit={handleSubmit(handleValidSubmit)} noValidate autoComplete="off">
        <Typography variant="h4">{title}</Typography>
        <XtdEntityFormset variant="filled" />

        <ButtonGroup>
          <Button type="button" variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
          <Button disabled={!hasRole('USER')} type="submit" variant="contained" color="primary">Submit</Button>
        </ButtonGroup>
      </form>
    </FormContext>
  );
}

XtdExternalDocumentForm.defaultProps = {
  defaultValues: {
    id: '',
    names: [{
      id: '',
      languageCode: 'de',
      value: '',
    }],
  },
};

