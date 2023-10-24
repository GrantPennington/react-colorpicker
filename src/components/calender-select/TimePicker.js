import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';

export function TimePicker({ id, type }) {
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState('')
    const [hour, setHour] = React.useState('3')
    const [minute, setMinute] = React.useState('00')
    const [frame, setFrame] = React.useState('AM')

    const hours = Array.from({ length: 12 }, (_, index) => index + 1)
    const minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55']
    const timeFrame = ['AM', 'PM']

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleHourChange = (e) => {
        setHour(e.target.value)
    }
    const handleMinuteChange = (e) => {
        setMinute(e.target.value)
    }
    const handleFrameChange = (e) => {
        setFrame(e.target.value)
    }

    return (
        <>
            <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Hour</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={hour}
                    onChange={handleHourChange}
                    input={<OutlinedInput label="Hour" />}
                >
                    {hours.map((hour) => (
                        <MenuItem key={`${hour}-key`} value={hour}>{hour}</MenuItem>
                    ))}
                </Select>
                </FormControl>
                <Typography sx={{ fontSize: 40, fontWeight: 'bold', mt: '2px' }}>{':'}</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Minutes</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={minute}
                    onChange={handleMinuteChange}
                    input={<OutlinedInput label="Minutes" />}
                >
                    {minutes.map((minute) => (
                        <MenuItem key={`${minute}-key`} value={minute}>{minute}</MenuItem>
                    ))}
                </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">AM/PM</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={frame}
                    onChange={handleFrameChange}
                    input={<OutlinedInput label="AM/PM" />}
                >
                    {timeFrame.map((time) => (
                        <MenuItem key={`${time}-key`} value={time}>{time}</MenuItem>
                    ))}
                </Select>
                </FormControl>
            </Box>

        </>
    )
}
