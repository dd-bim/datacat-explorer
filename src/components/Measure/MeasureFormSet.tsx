import React, {useState} from "react";
import TextInputGridItems from "../form/TextInputGridItems";
import {CatalogItemFormSetProps} from "../form/CatalogItemFormSet";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {useFormContext} from "react-hook-form";
import FormCaption from "../form/FormCaption";
import TextFieldOptions from "../form/TextFieldOptions";
import {CatalogItemFragment, MeasureFragment} from "../../generated/types";
import ValueSearchListView from "../Value/ValueSearchListView";
import SelectionList, {SelectionListItem, SelectionListItemState} from "../Search/SelectionList";
import UnitSearchListView from "../Unit/UnitSearchListView";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ClearIcon from "@material-ui/icons/Clear";

export type MeasureFormSetProps = {
    measure?: MeasureFragment
} & CatalogItemFormSetProps;

export default function MeasureFormSet(props: MeasureFormSetProps) {
    const { measure, isUpdate } = props;
    const { register, unregister, setValue } = useFormContext();

    const [unitComponent, setUnitComponent] = useState<CatalogItemFragment | null>(measure?.unitComponent || null);

    React.useEffect(() => {
        register('unitComponent');
        register('valueDomain');
    }, [register]);

    const handleOnSetUnitComponent = (newUnitComponent: CatalogItemFragment | null) => {
        setUnitComponent(newUnitComponent);
        setValue('unitComponent', newUnitComponent ? newUnitComponent.id : '');
    }

    const [valueDomainQuery, setValueDomainQuery] = useState('');
    const valueDomainState = (measure?.valueDomain || []).map(value => ({ state: SelectionListItemState.PERSISTENT, ...value }));
    const [valueDomain, setValueDomain] = useState<SelectionListItem[]>(valueDomainState);
    const filteredValueDomain = valueDomain.filter(value => {
        const searchStr = valueDomainQuery.toLocaleLowerCase();
        return (searchStr === ""
            || value.id.toLocaleLowerCase().includes(searchStr)
            || value.label.toLocaleLowerCase().includes(searchStr)
        );
    });

    React.useEffect(() => {
        const filteredList = valueDomain.filter(item => item.state !== SelectionListItemState.REMOVED);
        filteredList.forEach((item, idx) => {
            const name = `valueDomain[${idx}]`;
            register(name);
            setValue(name, item.id);
        });
        return () => filteredList.forEach((item, idx) => {
            unregister(`valueDomain[${idx}]`);
        });
    }, [register, valueDomain]);

    const handleOnAddDomainValue = (item: CatalogItemFragment) => {
        setValueDomain([...valueDomain, {state: SelectionListItemState.NEW, ...item}]);
    }

    const handleOnRemoveDomainValue = ({id, state}: SelectionListItem) => {
        let newState;
        switch (state) {
            case SelectionListItemState.NEW:
                newState = valueDomain.filter(value => value.id !== id);
                break;
            case SelectionListItemState.PERSISTENT:
                newState = valueDomain.map(value => value.id === id ? ({ ...value, state: SelectionListItemState.REMOVED }) : value);
                break;
            case SelectionListItemState.REMOVED:
                newState = valueDomain.map(value => value.id === id ? ({ ...value, state: SelectionListItemState.PERSISTENT }) : value);
                break;
        }
        setValueDomain(newState);
    }

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

            <Grid container spacing={3} item xs={12} justify="center" alignItems="center">

                <Grid item xs={6}>
                    <List>
                        <ListItem>
                        {unitComponent ? (
                            <React.Fragment>
                                <ListItemText primary={unitComponent.label} secondary={unitComponent.id}/>
                                <ListItemSecondaryAction>
                                    <IconButton
                                        edge="end"
                                        aria-label="remove unit"
                                        onClick={() => handleOnSetUnitComponent(null)}
                                    >
                                        <ClearIcon/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </React.Fragment>
                        ) : (
                            <ListItemText primary="No unit selected."/>
                        )}
                        </ListItem>

                    </List>
                </Grid>

                <Grid item xs={6}>
                    <UnitSearchListView
                        onSelect={handleOnSetUnitComponent}
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
                    <SelectionList
                        items={filteredValueDomain}
                        onSelect={handleOnRemoveDomainValue}
                        SearchFieldProps={{
                            label: 'Filter current value domain',
                            helperText: 'Filtered values are only hidden temporarily.',
                            value: valueDomainQuery,
                            onChange: e => setValueDomainQuery(e.target.value)
                        }}
                    />
                </Grid>

                <Grid item xs={6}>
                    <ValueSearchListView
                        onSelect={handleOnAddDomainValue}
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
