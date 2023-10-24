import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useCalender from './useCalender';
import { generateYears } from './helpers';

export default function YearDropdown({ id, label, options }) {
    const {calender, handleYearChange} = useCalender()

    const handleChange = (event) => {
        //setAge(event.target.value);
        handleYearChange(event.target.value)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth variant={'standard'}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={`${label}-${id}`}
                id="demo-simple-select"
                value={calender.year}
                label={label}
                onChange={handleChange}
            >
            {options.map((item) => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
            ))}
            </Select>
        </FormControl>
        </Box>
    );
}