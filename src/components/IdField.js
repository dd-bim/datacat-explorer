import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import {Lock as LockIcon, LockOpen as LockOpenIcon} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import {useFormContext} from 'react-hook-form';
import get from 'lodash.get';

export default function IdField(props) {
    const {name, disabled = false, ...otherProps} = props;
    const {register, errors, setValue} = useFormContext();
    const error = get(errors, name);
    const [overrideId, setOverrideId] = useState(false);

    const handleIdOverrideClick = () => {
        if (overrideId) {
            setValue(name, '', true);
        }
        setOverrideId(!overrideId);
    };

    return (
        <TextField
            name={name}
            {...otherProps}
            inputRef={register({required: overrideId})}
            disabled={!overrideId || disabled}
            error={!!(overrideId && error)}
            helperText={overrideId && error ? 'This field is required if auto-generation is deselected.' : 'Auto-generated after saving.'}
            InputProps={{
                endAdornment: (
                    !disabled && <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle unique id override"
                            onClick={handleIdOverrideClick}
                        >
                            {overrideId ? <LockOpenIcon/> : <LockIcon/>}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
}

IdField.props = {
    name: PropTypes.string.isRequired,
};
