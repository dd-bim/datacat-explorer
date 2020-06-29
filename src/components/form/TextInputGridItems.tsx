import {useFieldArray, useFormContext} from "react-hook-form";
import React from "react";
import TextField, {TextFieldProps} from "@material-ui/core/TextField";
import {Grid} from "@material-ui/core";
import {languages} from "../../lang";
import get from "lodash.get";
import TextFieldOptions from "./TextFieldOptions";
import {TranslationFragment} from "../../generated/types";

export type TranslationFormValues = {
    id: string,
    languageCode: string,
    value: string
};

export const useFormValues = (): (fragments?: TranslationFragment[]) => TranslationFormValues[] => (
    (fragments) => {
        const formValues = Object
            .keys(languages)
            .map(languageCode => ({
                id: '',
                languageCode,
                value: ''
            }));

        if (fragments) {
            return formValues.map(translation => {
                const {languageCode} = translation;
                const sameLanguagePredicate = (x: TranslationFragment) => x.language.id === languageCode;
                const hit = fragments.find(sameLanguagePredicate);
                if (hit) {
                    translation.id = hit.id;
                    translation.value = hit.label;
                }
                return translation;
            });
        }

        return formValues;
    }
);

type NameInputProps = {
    name: string
}

const keyName = '_fieldId';

export default function TextInputGridItems(props: NameInputProps & TextFieldProps) {
    const {name, required, ...otherProps} = props;
    const {register, errors} = useFormContext();
    const {fields} = useFieldArray<TranslationFormValues, '_fieldId'>({keyName, name});

    return (
        <React.Fragment>
            {fields.map((field, index) => {
                const accessor = `${name}[${index}]`;
                const language = languages[field.languageCode as string];
                const idValue = field.id ? field.id : '';
                const error = get(errors, accessor);

                return (
                    <Grid key={field._fieldId} item xs={12}>
                        <input
                            type="hidden"
                            id={`${accessor}.id`}
                            name={`${accessor}.id`}
                            defaultValue={idValue}
                            ref={register()}
                        />
                        <input
                            type="hidden"
                            id={`${accessor}.languageCode`}
                            name={`${accessor}.languageCode`}
                            defaultValue={field.languageCode}
                            ref={register({required})}
                        />
                        <TextField
                            defaultValue={field.value}
                            error={!!error}
                            helperText={error && "This field is required and may not be empty."}
                            id={`${accessor}.value`}
                            inputRef={register({required: required && language.required})}
                            label={`${language.label}`}
                            name={`${accessor}.value`}
                            required={required && language.required}
                            {...TextFieldOptions}
                            {...otherProps}
                        />
                    </Grid>
                );
            })}
        </React.Fragment>
    );
}
