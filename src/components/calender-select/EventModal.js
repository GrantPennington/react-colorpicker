import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, FormControl, Input, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from '@mui/material';
import { TimePicker } from './TimePicker';
import useEvents from './useEvents';
import useCalender from './useCalender';
import { DAY_LABELS, MONTH_MAP } from './helpers';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EventModal({ trigger }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('')
  const [location, setLocation] = React.useState('')

  const [startTime, setStartTime] = React.useState('')
  const [endTime, setEndTime] = React.useState('')

  const {addEvent} = useEvents()
  const {calender} = useCalender()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleStartTime = (hour,minute,time) => {
    setStartTime(`${hour}:${minute} ${time}`)
  }
  const handleEndTime = (hour,minute,time) => {
    setEndTime(`${hour}:${minute} ${time}`)
  }

  const handleSave = () => {
    const date = `${DAY_LABELS[calender.selected.getDay()].label}, ${MONTH_MAP[calender.selected.getMonth()+1]} ${calender.selected.getDate()},${calender.selected.getFullYear()}`
    addEvent(date, {
        // add the data
        title: title,
        location: location,
        isAllDay: false,
        startTime: startTime,
        endTime: endTime,
    })
    handleClose()
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleLocation = (e) => {
    setLocation(e.target.value)
  }

  return (
    <div>
        {trigger(handleClickOpen)}
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"New Calender Event"}</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                    <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                    <TextField
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        placeholder={'Title'}
                        value={title}
                        onChange={handleChange}
                        fullWidth
                    />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120, width: '100%' }}>
                    <TextField
                        labelId="demo-dialog-select-label"
                        id="demo-dialog-select"
                        placeholder={'Location or Video Call'}
                        value={location}
                        onChange={handleLocation}
                        fullWidth
                    />
                    </FormControl>
                </Box>
                <Box>
                    <Typography sx={{ ml: 2 }}>Start Time</Typography>
                    <TimePicker id={'start-time'} type={'start'} handler={handleStartTime}/>
                    <Typography sx={{ ml: 2 }} >End Time</Typography>
                    <TimePicker id={'end-time'} type={'end'} handler={handleEndTime}/>
                </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    </div>
  );
}

/*
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Input placeholder={'Title'} sx={{ mb: 2 }}/>
                <Input placeholder={'Location'} sx={{ mb: 2 }}/>
            </Box>

*/
