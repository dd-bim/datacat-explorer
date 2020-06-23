import {
    AssignsPropertyWithValuesDetailsFragment,
    AssignsPropertyWithValuesInput,
    AssignsPropertyWithValuesUpdateInput,
} from "../../generated/types";
import {mapTextFragmentToTextInput, useTextInputTemplate} from "../../hooks/templates";

export default (): (item?: AssignsPropertyWithValuesDetailsFragment) => AssignsPropertyWithValuesInput | AssignsPropertyWithValuesUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                versionId: '',
                versionDate: '',
                names: textInputTemplate(),
                descriptions: textInputTemplate(),
                relatingObject: '',
                relatedProperty: '',
                relatedValues: []
            }
        } else {
            const {id, versionId, versionDate, names, descriptions, relatingObject, relatedProperty, relatedValues} = item;
            return {
                id, versionId, versionDate,
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                relatingObject: relatingObject.id,
                relatedProperty: relatedProperty.id,
                relatedValues: relatedValues.map(value => value.id)
            };
        }
    };
}
