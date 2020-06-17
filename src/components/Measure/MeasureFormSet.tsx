import React from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {MeasureFragment} from "../../generated/types";
import ValueSearchListView from "../Value/ValueSearchListView";
import SelectionFieldList from "../Selection/SelectionFieldList";
import UnitSearchListView from "../Unit/UnitSearchListView";
import SelectionField from "../Selection/SelectionField";
import useItemsSelection from "../Selection/useItemsSelection";
import useItemSelection from "../Selection/useItemSelection";

export type MeasureFormSetProps = {
    measure?: MeasureFragment
} & CatalogItemFormSetProps;

export default function MeasureFormSet(props: MeasureFormSetProps) {
    const {measure, isUpdate} = props;
    const {register} = useFormContext();
    const {selection: unitComponent, setSelection: setUnitComponent} = useItemSelection({
        name: 'unitComponent',
        defaultValue: measure?.unitComponent ?? null
    });
    const {selection: valueDomain, add, remove} = useItemsSelection({
        name: 'valueDomain',
        defaultValues: measure?.valueDomain || []
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
                    <SelectionField item={unitComponent} onClear={() => setUnitComponent(null)}/>
                </Grid>

                <Grid item xs={6}>
                    <UnitSearchListView
                        onSelect={setUnitComponent}
                        filter={{
                            idNotIn: unitComponent ? [unitComponent.id] : []
                        }}
                        SearchFieldProps={{
                            label: 'Search all units in the catalog',
                        }}
                    />
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormCaption>Value domain</FormCaption>
            </Grid>

            <Grid container spacing={3} item xs={12} justify="center" alignItems="center">

                <Grid item xs={6}>
                    <SelectionFieldList
                        items={valueDomain}
                        onSelect={remove}
                    />
                </Grid>

                <Grid item xs={6}>
                    <ValueSearchListView
                        onSelect={add}
                        filter={{
                            idNotIn: valueDomain.map(value => value.id)
                        }}
                        SearchFieldProps={{
                            label: 'Search all values in the catalog',
                            helperText: 'Add more values by selecting them from the result list.'
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
