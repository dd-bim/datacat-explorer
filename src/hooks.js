import React, {useCallback, useReducer} from 'react';
import {initialState, rootReducer} from './reducers/root';

export function useAction(actionCreator) {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return useCallback(actionCreator(dispatch), [actionCreator]);
}
