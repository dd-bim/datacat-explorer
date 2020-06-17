import {CatalogItemFragment} from "../../generated/types";

export enum SelectionState {
    NEW,
    PERSISTENT,
    REMOVED
}

export type SelectionItem<T extends CatalogItemFragment> = {
    state: SelectionState
} & T;
