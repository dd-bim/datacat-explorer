import React, {useState} from "react";
import {CatalogItemFragment} from "../../generated/types";
import {useFormContext} from "react-hook-form";
import {SelectionItem, SelectionState} from "./types";

export default<T extends CatalogItemFragment> ({name, defaultValue}: {name: string, defaultValue: T | null}) => {
    const { register, setValue } = useFormContext();
    const initialSelection: SelectionItem<T> | null = defaultValue ? {...defaultValue, state: SelectionState.PERSISTENT} : null;
    const [selection, setSelection] = useState(initialSelection);

    React.useEffect(() => register(name), [name, register]);

    const handleSetSelection = (newSelection: T | null) => {
        setSelection(newSelection ? {...newSelection, state: SelectionState.NEW} : null);
        setValue(name, newSelection?.id ?? '');
    }

    return {selection, setSelection: handleSetSelection};
}
