import {DocumentsDetailsFragment, DocumentsInput, DocumentsUpdateInput,} from "../../generated/types";
import {mapTextFragmentToTextInput, useTextInputTemplate} from "../../hooks/templates";

export default (): (item?: DocumentsDetailsFragment) => DocumentsInput | DocumentsUpdateInput => {
    const textInputTemplate = useTextInputTemplate();
    return (item) => {
        if (!item) {
            return {
                id: '',
                versionId: '',
                versionDate: '',
                names: textInputTemplate(),
                descriptions: textInputTemplate(),
                relatingDocument: '',
                relatedThings: []
            }
        } else {
            const {id, versionId, versionDate, names, descriptions, relatingDocument, relatedThings} = item;
            return {
                id, versionId, versionDate,
                names: mapTextFragmentToTextInput(names, textInputTemplate()),
                descriptions: mapTextFragmentToTextInput(descriptions, textInputTemplate()),
                relatingDocument: relatingDocument.id,
                relatedThings: relatedThings.map(thing => thing.id)
            };
        }
    };
}
