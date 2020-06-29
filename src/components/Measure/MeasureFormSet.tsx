import React from "react";
import TextInputGridItems, {useFormValues as useTranslationFormValues} from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {EntityTypes, MeasureFragment, RootFragment} from "../../generated/types";
import useItemSelection from "../Selection/useItemSelection";
import SelectionCard from "../Selection/SelectionCard";
import EmptySelectionCard from "../Selection/EmptySelectionCard";
import SearchListView from "../Search/SearchListView";
import useItemsSelection from "../Selection/useItemsSelection";
import SelectionFieldList from "../Selection/SelectionFieldList";
import {RootFormValues} from "../form/RootFormSet";

export type MeasureFormValues = RootFormValues & {
    unitComponent: string,
    valueDomain: string
}

export const useFormValues = (): (item?: MeasureFragment) => MeasureFormValues => {
    const tmpl = useTranslationFormValues();
    return (item) => ({
        id: item?.id ?? '',
        versionId: item?.versionId ?? '',
        versionDate: item?.versionDate ?? '',
        names: tmpl(item?.names),
        descriptions: tmpl(item?.descriptions),
        unitComponent: item?.unitComponent?.id ?? '',
        valueDomain: item?.valueDomain.map(value => value.id).join(",") ?? ''
    });
}

export type MeasureFormSetProps = {
    measure?: MeasureFragment
} & CatalogItemFormSetProps;

export default function MeasureFormSet(props: MeasureFormSetProps) {
    const {measure, isUpdate} = props;
    const {register} = useFormContext();
    const {
        selection: unitComponent,
        setSelection: setRelatingObject
    } = useItemSelection<RootFragment>({
        name: 'unitComponent',
        defaultValue: measure?.unitComponent ?? null
    });
    const {
        selection: valueDomain,
        add: addValue,
        remove: removeValue
    } = useItemsSelection<RootFragment>({
        name: 'valueDomain',
        defaultValues: measure?.valueDomain ?? []
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
                <FormCaption>Unit</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    {unitComponent ? (
                        <SelectionCard item={unitComponent}/>
                    ) : (
                        <EmptySelectionCard/>
                    )}
                </Grid>

                <Grid item xs={6}>
                    <SearchListView<RootFragment>
                        onSelect={setRelatingObject}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdUnit],
                            idNotIn: unitComponent ? [unitComponent.id] : []
                        }}
                        SearchFieldProps={{
                            label: 'Search for units'
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Value domain</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center">
                <Grid item xs={6}>
                    <SelectionFieldList
                        items={valueDomain}
                        onClear={removeValue}
                    />
                </Grid>
                <Grid item xs={6}>
                    <SearchListView
                        onSelect={addValue}
                        filter={{
                            entityTypeIn: [EntityTypes.XtdCollection],
                            idNotIn: valueDomain.map(x => x.id)
                        }}
                        SearchFieldProps={{
                            label: 'Search for values'
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
