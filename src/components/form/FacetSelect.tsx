import {Autocomplete} from "@material-ui/lab";
import {FacetFragment, useFacetListQuery} from "../../generated/types";
import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useFormContext} from "react-hook-form";
import TextFieldOptions from "./TextFieldOptions";

export default function FacetSelect({name}: { name: string }) {
    const { register, unregister, getValues, setValue } = useFormContext();
    const values: FacetFragment[] = getValues(name);
    const [defaultValue] = useState(values);
    const [options, setOptions] = useState(values);
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const {loading} = useFacetListQuery({
        skip: !open,
        variables: {
            input: {
                query: `${query}*`,
                idNotIn: values.map(x => x.id),
                pageSize: 5
            }
        },
        onCompleted: data => {
            data && setOptions([...values, ...data.facets.nodes]);
        }
    });
    const handleChange = (event: object, value: FacetFragment[]) => {
        setValue(name, value);
    }

    useEffect(() => {
        register(name, {required: true});
        return () => unregister(name);
    }, [register, unregister, name]);


    return (
        <Autocomplete
            id="facets"
            multiple
            size="small"
            defaultValue={defaultValue}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onInputChange={(event, newInputValue) => {
                setQuery(newInputValue);
            }}
            onChange={handleChange}
            getOptionSelected={(option, value) => option.id === value.id}
            getOptionLabel={(option) => option.label}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Facets"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                    {...TextFieldOptions}
                />
            )}
        />
    );
}
