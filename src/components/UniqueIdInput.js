import InputAdornment from '@material-ui/core/InputAdornment';
import {Fingerprint} from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';

export default function (props) {
    const {
        uniqueId,
        disabled,
        onChange,
    } = props;
    const [inputEnabled, setInputEnabled] = useState(false);

    const handleChangeEnabled = e => {
        const checked = e.target.checked;
        if (!checked) {
            onChange('');
        }
        setInputEnabled(checked);
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={10}>
                <TextField
                    variant={'outlined'}
                    label="Unique Id"
                    disabled={!inputEnabled}
                    margin={'normal'}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Fingerprint/>
                            </InputAdornment>
                        ),
                    }}
                    value={uniqueId}
                    helperText={'Universally unique ID generated at creation time.'}
                    onChange={e => onChange(e.target.value)}
                />
            </Grid>
            {disabled ? '' : (
                <Grid item xs={2}>
                    <FormControlLabel
                        label={'Override'}
                        margin={'normal'}
                        control={<Switch checked={inputEnabled} onChange={handleChangeEnabled}/>}
                    />
                </Grid>
            )

            }
        </Grid>
    );
}
