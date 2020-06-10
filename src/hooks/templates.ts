import {
    CatalogItemFragment,
    EntityUpdateInput,
    RootFragment,
    RootUpdateInput,
    TextFragment,
    TextInput
} from "../generated/types";
import {languages} from "../lang";

/**
 * Hooks are used to generate input templates to allow runtime customization
 * of the default required languages from remote sources at a later time.
 */

export const useTextInputTemplate = (): () => TextInput[] => (
    () => Object
        .keys(languages)
        .map(languageCode => ({
            id: '',
            languageCode,
            value: ''
        }))
);

const mapTextFragmentToTextInput = (textFragments: TextFragment[], textInputs: TextInput[]): TextInput[] => {
    return textInputs.map(text => {
        const sameLanguagePredicate = (x: TextFragment) => x.language.id === text.languageCode;
        const hit = textFragments.find(sameLanguagePredicate);
        if (hit) {
            text.id = hit.id;
            text.value = hit.value;
        }
        return text;
    });
};

export const useEntityInputTemplate = (): (item?: CatalogItemFragment) => EntityUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                names: textInputTemplate()
            };
        } else {
            return {
                id: item.id,
                names: mapTextFragmentToTextInput(item.names, textInputTemplate())
            };
        }
    };
};

export const useRootInputTemplate = (): (item?: RootFragment) => RootUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                versionId: '',
                versionDate: '',
                names: textInputTemplate(),
                descriptions: textInputTemplate()
            };
        } else {
            return {
                id: item.id,
                versionId: item.versionId,
                versionDate: item.versionDate,
                names: mapTextFragmentToTextInput(item.names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(item.descriptions, textInputTemplate())
            };
        }
    };
};
