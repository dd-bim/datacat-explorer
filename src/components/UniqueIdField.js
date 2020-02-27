import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {Lock as LockIcon, LockOpen as LockOpenIcon} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import get from 'lodash.get';

export default function UniqueIdField(props) {
    const {name, ...otherProps} = props;
    const {register, errors, setValue} = useFormContext();
    const error = get(errors, name);
    const [overrideUniqueId, setOverrideUniqueId] = useState(false);

    const handleUniqueIdOverrideClick = () => {
        if (overrideUniqueId) {
            setValue(name, '', true);
        }
        setOverrideUniqueId(!overrideUniqueId);
    };

    return (
        <TextField
            name={name}
            {...otherProps}
            inputRef={register({required: overrideUniqueId})}
            disabled={!overrideUniqueId}
            error={!!(overrideUniqueId && error)}
            helperText={overrideUniqueId && error ? 'This field is required if auto-generation is deselected.' : 'Auto-generated after saving.'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle unique id override"
                            onClick={handleUniqueIdOverrideClick}
                        >
                            {overrideUniqueId ? <LockOpenIcon/> : <LockIcon/>}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}
