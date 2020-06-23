import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {DocumentsDetailsFragment, EntityTypes, ExternalDocumentFragment, RootFragment} from "../../generated/types";
import useItemsSelection from "../Selection/useItemsSelection";
import useItemSelection from "../Selection/useItemSelection";
import SelectionFieldList from "../Selection/SelectionFieldList";
import SearchListView from "../Search/SearchListView";
import SelectionCard from "../Selection/SelectionCard";
import {SelectionItem} from "../Selection/types";
import EmptySelectionCard from "../Selection/EmptySelectionCard";

export type CollectsFormSetProps = {
    documents?: DocumentsDetailsFragment
} & CatalogItemFormSetProps;

export default function DocumentsFormSet(props: CollectsFormSetProps) {
    const {documents, isUpdate} = props;
    const {register} = useFormContext();
    const {
        selection: relatingDocument,
        setSelection: setRelatingDocument
    } = useItemSelection<ExternalDocumentFragment>({
        name: 'relatingDocument',
        defaultValue: documents?.relatingDocument ?? null
    });
    const {
        selection: relatedThings,
        add: addRelatedThing,
        remove: removeRelatedThing
    } = useItemsSelection<RootFragment>({
        name: 'relatedThings',
        defaultValues: documents?.relatedThings ?? []
    });

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <FormCaption>Name</FormCaption>
            </Grid>
            <TextInputGridItems
                name="names"
                required
            />

            <Grid item xs={12}>
                <FormCaption>Description</FormCaption>
            </Grid>
            <TextInputGridItems
                name="descriptions"
                multiline
                rows={3}
            />

            <Grid item xs={12}>
                <FormCaption>Relating document</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    {relatingDocument ? (
                        <SelectionCard item={relatingDocument}/>
                    ) : (
                        <EmptySelectionCard/>
                    )}
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={(item) => setRelatingDocument(item as SelectionItem<ExternalDocumentFragment>)}
                        filter={{
                            idNotIn: relatingDocument ? [relatingDocument.id] : []
                        }}
                        SearchFieldProps={{
                            label: 'Search for external documents'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Related things</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    <SelectionFieldList
                        items={relatedThings}
                        onClear={removeRelatedThing}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={addRelatedThing}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdRoot],
                            idNotIn: relatedThings.map(x => x.id)
                        }}
                        SearchFieldProps={{
                            label: 'Search for things'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Meta information</FormCaption>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    disabled={isUpdate}
                    helperText={"Well known unique identifier of the described concept."}
                    inputRef={register({required: isUpdate})}
                    label="Universal ID"
                    name="id"
                    {...TextFieldOptions}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register({required: true})}
                    label="Version ID"
                    name="versionId"
                    required
                    {...TextFieldOptions}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    inputRef={register({required: true})}
                    label={"Version date"}
                    name="versionDate"
                    required
                    {...TextFieldOptions}
                />
            </Grid>
        </React.Fragment>
    );
}
