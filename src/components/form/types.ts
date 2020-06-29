import {RootFormValues} from "./RootFormSet";

export type BinaryRelationshipFormValues = RootFormValues & {
    relating: string,
    related: string
}
