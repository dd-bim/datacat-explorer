import {EntityInput, EntityUpdateInput, RootInput, RootUpdateInput, TextInput} from "../../generated/types";
import {TranslationFormValues} from "./TextInputGridItems";
import {CatalogItemFormValues} from "./CatalogItemFormSet";
import {RootFormValues} from "./RootFormSet";

function isValidId(id?: string | null) {
    return id && id.trim();
}

const isValidTranslation = (text: TextInput) => {
    return (text.languageCode && text.languageCode.trim())
        && (text.value && text.value.trim());
};

export const toTextInput = (formValues: TranslationFormValues): TextInput => {
    const {id, languageCode, value} = formValues;
    return {
        id: isValidId(id) ? id : undefined,
        languageCode,
        value
    };
};

export const toEntityInput = (formValues: CatalogItemFormValues): EntityInput => {
    const {id, names} = formValues;
    return {
        id: isValidId(id) ? id : undefined,
        names: names.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
    };
};

export const toEntityUpdateInput = (formValues: CatalogItemFormValues): EntityUpdateInput => {
    const {id, names} = formValues;
    return {
        id,
        names: names.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
    };
}

export const toRootInput = (formValues: RootFormValues): RootInput => {
    const {versionId, versionDate, descriptions} = formValues;
    return {
        ...toEntityInput(formValues),
        versionId,
        versionDate,
        descriptions: descriptions.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
    }
}

export const toRootUpdateInput = (formValues: RootFormValues): RootUpdateInput => {
    const {versionId, versionDate, descriptions} = formValues;
    return {
        ...toEntityUpdateInput(formValues),
        versionId,
        versionDate,
        descriptions: descriptions.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
    }
};
