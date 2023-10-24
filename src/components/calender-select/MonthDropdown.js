import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useCalender from './useCalender';
import { MONTH_MAP } from './helpers';

export default function MonthDropdown({ id, label, options }) {
    const {calender, handleMonthChange} = useCalender()

    const handleChange = (event) => {
        //setAge(event.target.value);
        handleMonthChange(event.target.value)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth variant={'standard'}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={`${label}-${id}`}
                id="demo-simple-select"
                value={calender.month}
                label={label}
                onChange={handleChange}
            >
            {options.map((item) => (
                <MenuItem key={item} value={item}>{MONTH_MAP[item]}</MenuItem>
            ))}
            </Select>
        </FormControl>
        </Box>
    );
}