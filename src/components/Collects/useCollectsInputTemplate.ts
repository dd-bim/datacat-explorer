import {CollectsDetailsFragment, CollectsInput, CollectsUpdateInput,} from "../../generated/types";
import {mapTextFragmentToTextInput, useTextInputTemplate} from "../../hooks/templates";

export default (): (item?: CollectsDetailsFragment) => CollectsInput | CollectsUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                versionId: '',
                versionDate: '',
                names: textInputTemplate(),
                descriptions: textInputTemplate(),
                relatingCollection: '',
                relatedThings: []
            }
        } else {
            const {id, versionId, versionDate, names, descriptions, relatingCollection, relatedThings, ...otherProps} = item;
            return {
                id, versionId, versionDate,
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                relatingCollection: relatingCollection.id,
                relatedThings: relatedThings.map(thing => thing.id)
            };
        }
    };
}
