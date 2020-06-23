import React, {useState} from "react";
import {CatalogItemFragment} from "../../generated/types";
import {useFormContext, ValidationOptions} from "react-hook-form";
import {SelectionItem, SelectionState} from "./types";
import get from "lodash.get";

type UseItemSelectionOptions<T extends CatalogItemFragment> = {
    name: string,
    defaultValue: T | null,
    validationOptions?: ValidationOptions
};

export default <T extends CatalogItemFragment>(options: UseItemSelectionOptions<T>) => {
    const {name, defaultValue, validationOptions} = options;
    const {register, errors, setValue} = useFormContext();
    const initialSelection: SelectionItem<T> | null = defaultValue
        ? {...defaultValue, state: SelectionState.PERSISTENT}
        : null;
    const [selection, setSelection] = useState(initialSelection);
    const error = get(errors, name);

    const handleSetSelection = (newSelection: T | null) => {
        setSelection(newSelection ? {...newSelection, state: SelectionState.NEW} : null);
        setValue(name, newSelection?.id ?? '', !!newSelection);
    }

    React.useEffect(() => {
        register(name, validationOptions)
    }, [name, register, validationOptions]);

    return {error, selection, setSelection: handleSetSelection};
}
