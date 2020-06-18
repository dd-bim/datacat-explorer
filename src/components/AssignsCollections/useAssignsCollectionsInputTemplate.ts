import {
    AssignsCollectionsDetailsFragment,
    AssignsCollectionsInput,
    AssignsCollectionsUpdateInput,
} from "../../generated/types";
import {mapTextFragmentToTextInput, useTextInputTemplate} from "../../hooks/templates";

export default (): (item?: AssignsCollectionsDetailsFragment) => AssignsCollectionsInput | AssignsCollectionsUpdateInput => {
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
                relatedCollections: []
            }
        } else {
            const {id, versionId, versionDate, names, descriptions, relatingObject, relatedCollections, ...otherProps} = item;
            return {
                id, versionId, versionDate,
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                relatingObject: relatingObject.id,
                relatedCollections: relatedCollections.map(thing => thing.id)
            };
        }
    };
}
