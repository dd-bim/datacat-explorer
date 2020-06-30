import {EntityInput, EntityUpdateInput, RootInput, RootUpdateInput, TextInput} from "../../generated/types";
import {TranslationFormValues} from "./TextInputGridItems";
import {CatalogItemFormValues} from "./CatalogItemFormSet";
import {RootFormValues} from "./RootFormSet";

export function isValidId(id?: string | null) {
    return id && id.trim();
}

export const isValidTranslation = (text: TextInput) => {
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
    const {id, facets, names} = formValues;
    return {
        id: isValidId(id) ? id : undefined,
        facets: facets.map(x => x.id),
        names: names.map(x => toTextInput(x)).filter(x => isValidTranslation(x)),
    };
};

export const toEntityUpdateInput = (formValues: CatalogItemFormValues): EntityUpdateInput => {
    const {id, facets, names} = formValues;
    return {
        id,
        facets: facets.map(x => x.id),
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
