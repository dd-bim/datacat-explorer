import {
    CatalogItemFragment,
    EntityUpdateInput,
    MeasureFragment,
    MeasureInput,
    MeasureUpdateInput,
    RootFragment,
    RootUpdateInput,
    TextFragment,
    TextInput,
    ValueFragment,
    ValueUpdateInput,
    XtdToleranceTypeEnum,
    XtdValueRoleEnum,
    XtdValueTypeEnum
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

export const mapTextFragmentToTextInput = (textFragments: TextFragment[], textInputs: TextInput[]): TextInput[] => {
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
            const { names, descriptions, ...otherProps } = item;
            return {
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                ...otherProps
            };
        }
    };
};

export const useValueInputTemplate = (): (item?: ValueFragment) => ValueUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                versionId: '',
                versionDate: '',
                names: textInputTemplate(),
                descriptions: textInputTemplate(),
                toleranceType: XtdToleranceTypeEnum.Nil,
                lowerTolerance: '',
                upperTolerance: '',
                valueType: XtdValueTypeEnum.Nil,
                valueRole: XtdValueRoleEnum.Nil,
                nominalValue: ''
            };
        } else {
            const {
                id,
                versionId,
                versionDate,
                names,
                descriptions,
                valueType,
                valueRole,
                nominalValue,
                toleranceType,
                upperTolerance,
                lowerTolerance
            } = item;
            return {
                id,
                versionId,
                versionDate,
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                valueType, valueRole, nominalValue,
                toleranceType, upperTolerance, lowerTolerance

            };
        }
    };
}

export const useMeasureInputTemplate = (): (item?: MeasureFragment) => MeasureInput | MeasureUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                versionId: '',
                versionDate: '',
                names: textInputTemplate(),
                descriptions: textInputTemplate(),
                unitComponent: '',
                valueDomain: []
            }
        } else {
            const {id, versionId, versionDate, names, descriptions, unitComponent, valueDomain, ...otherProps} = item;
            const defaultValueDomain = valueDomain?.map(value => value.id) || [];
            return {
                id, versionId, versionDate,
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                unitComponent: unitComponent?.id || '',
                valueDomain: defaultValueDomain
            };
        }
    };
}
