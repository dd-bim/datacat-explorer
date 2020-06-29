import {Autocomplete} from "@material-ui/lab";
import {EntityTypes} from "../../generated/types";
import React from "react";
import {TextField} from "@material-ui/core";
import TextFieldOptions from "../form/TextFieldOptions";
import {useFormContext} from "react-hook-form";
import {FacetFormValues} from "./FacetFormSet";

const options: string[] = [];

for (let key in EntityTypes) {
    options.push(key);
}

console.log(options);

export default function EntityTypeSelect({name}: {name: string}) {
    const {register, unregister, getValues, setValue} = useFormContext<FacetFormValues>();
    const value: string = getValues(name);
    const [defaultValue] = React.useState(value.split(','));
    const handleChange = (event: object, value: string[]) => {
        setValue(name, value.join(","));
    }

    React.useEffect(() => {
        register(name, {required: true});
        return () => unregister(name);
    }, [register, name]);

    return (
        <Autocomplete
            multiple
            defaultValue={defaultValue}
            options={options}
            onChange={handleChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    name={name}
                    label="Targets"
                    placeholder="Targets"
                    {...TextFieldOptions}
                />
            )}
        />
    );
}
