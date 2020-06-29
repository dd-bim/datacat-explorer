import {CatalogItemFragment} from "../../generated/types";
import React, {useState} from "react";
import {useFormContext, ValidationOptions} from "react-hook-form";
import {SelectionItem, SelectionState} from "./types";

export default <T extends CatalogItemFragment>({name, defaultValues, validationOptions}: { name: string, defaultValues: T[], validationOptions?: ValidationOptions }) => {
    const {register, unregister, getValues, setValue} = useFormContext();
    const initialState: SelectionItem<T>[] = (defaultValues || []).map(value => ({state: SelectionState.PERSISTENT, ...value}));
    const [selection, setSelection] = useState(initialState);

    React.useEffect(() => {
        register(name, validationOptions);
        return () => unregister(name);
    }, [register, name, validationOptions]);

    const setFormValue = (selection: SelectionItem<T>[]) => {
        const value = selection.filter(x => x.state !== SelectionState.REMOVED).map(x => x.id).join(",");
        setValue(name, value);
    }

    const handleOnAdd = (item: T) => {
        const newState = [...selection, {state: SelectionState.NEW, ...item}];
        setSelection(newState);
        setFormValue(newState);
    };

    const handleOnRemove = ({id, state}: { id: string, state: SelectionState }) => {
        let newState;
        switch (state) {
            case SelectionState.NEW:
                newState = selection.filter(item => item.id !== id);
                break;
            case SelectionState.PERSISTENT:
                newState = selection.map(item => item.id === id ? ({...item, state: SelectionState.REMOVED}) : item);
                break;
            case SelectionState.REMOVED:
                newState = selection.map(item => item.id === id ? ({...item, state: SelectionState.PERSISTENT}) : item);
                break;
        }
        setSelection(newState);
        setFormValue(newState);
    }

    console.log(getValues());

    return {selection, add: handleOnAdd, remove: handleOnRemove}
}
