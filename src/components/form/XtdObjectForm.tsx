import React from 'react';
import {sanitizeRootInput} from '../../utils';
import {FieldValues, FormContext, OnSubmit, useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RootFormset from '../form/RootFormset';
import dateTime from '../../dateTime';
import Typography from '@material-ui/core/Typography';
import {XtdObject} from "../../types";

const inputOptions = {
  variant: 'filled',
};

interface XtdObjectFormProps<T> {
  title: string;
  defaultValues?: T;
  onSubmit: OnSubmit<FieldValues>
  onCancel: () => void;
}

export default function XtdObjectForm<T extends XtdObject<T>>(props: XtdObjectFormProps<T>) {
  const { title, defaultValues, onSubmit, onCancel } = props;
  const formMethods = useForm({ defaultValues });
  const { handleSubmit } = formMethods;

  const handleValidSubmit: OnSubmit<FieldValues> = (data, e) => {
    sanitizeRootInput(data);
    onSubmit(data, e);
  };

  return (
    <FormContext {...formMethods}>
      <form onSubmit={handleSubmit(handleValidSubmit)} noValidate autoComplete="off">
        <Typography variant="h4">{title}</Typography>
        <RootFormset inputOptions={inputOptions} />

        <ButtonGroup>
          <Button type="button" variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </ButtonGroup>
      </form>
    </FormContext>
  );
}

XtdObjectForm.defaultProps = {
  defaultValues: {
    id: '',
    versionId: '1',
    versionDate: dateTime().format('YYYY-MM-DD'),
    names: [{
      id: '',
      languageCode: 'de',
      value: '',
    }],
    descriptions: []
  },
};

