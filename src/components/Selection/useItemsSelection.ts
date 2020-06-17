import {CatalogItemFragment} from "../../generated/types";
import React, {useState} from "react";
import {useFormContext} from "react-hook-form";
import {SelectionItem, SelectionState} from "./types";

export default<T extends CatalogItemFragment> ({name, defaultValues}: {name: string, defaultValues: T[]}) => {
    const {register, unregister, setValue} = useFormContext();
    const initialState: SelectionItem<T>[] = (defaultValues || []).map(value => ({ state: SelectionState.PERSISTENT, ...value }));
    const [selection, setSelection] = useState(initialState);

    React.useEffect(() => {
        // Register potentially empty default array for submission
        register(name);
    }, [name, register]);

    React.useEffect(() => {
        const payload = selection.filter(item => item.state !== SelectionState.REMOVED);
        payload.forEach((item, idx) => {
            const fieldName = `${name}[${idx}]`;
            register(fieldName);
            setValue(fieldName, item.id);
        });
        return () => payload.forEach((item, idx) => {
            const fieldName = `${name}[${idx}]`;
            unregister(fieldName);
        });
    }, [name, register, selection]);

    const handleOnAdd = (item: T) => {
        setSelection([...selection, {state: SelectionState.NEW, ...item}]);
    };

    const handleOnRemove = ({id, state}: {id: string, state: SelectionState}) => {
        let newState;
        switch (state) {
            case SelectionState.NEW:
                newState = selection.filter(item => item.id !== id);
                break;
            case SelectionState.PERSISTENT:
                newState = selection.map(item => item.id === id ? ({ ...item, state: SelectionState.REMOVED }) : item);
                break;
            case SelectionState.REMOVED:
                newState = selection.map(item => item.id === id ? ({ ...item, state: SelectionState.PERSISTENT }) : item);
                break;
        }
        setSelection(newState);
    }

    return { selection, add: handleOnAdd, remove: handleOnRemove }
}
