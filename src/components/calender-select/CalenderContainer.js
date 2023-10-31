import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import generateFullCalender, { DAY_LABELS, MONTH_MAP } from './helpers';
import { Calender } from './Calender';
import useCalender from './useCalender';
import AddIcon from '@mui/icons-material/Add';
import EventModal from './EventModal';
import useEvents from './useEvents';
import { useEffect, useState } from 'react';

export function CalenderContainer(props) {
    const [eventList, setEventList] = useState([])
    const {calender} = useCalender()
    const {events} = useEvents()

    const trigger = (onClick) => {
      return (
          <IconButton sx={{ '&:hover': { backgroundColor: 'lightgray' }, borderRadius: '50%', mt: 1 }} onClick={onClick} disabled={!calender.selected}>
            <AddIcon />
          </IconButton>
      )
    }

    const getEventsByDate = () => {
      if(calender.selected===''){
        return ;
      }
      const selection = `${DAY_LABELS[calender.selected.getDay()].label}, ${MONTH_MAP[calender.selected.getMonth()+1]} ${calender.selected.getDate()},${calender.selected.getFullYear()}`
      if(events[selection]){
        let temp = Object.keys(events[selection]).map((obj) => {
          return {
            key: `key-${obj}`,
            ...events[selection][obj]
          }
        })
        console.log('TEMP: ',temp)
        setEventList(temp)
      } else {
        setEventList([])
      }
    }

    useEffect(() => {
      getEventsByDate()
    }, [events, calender.selected])
    

    return (
        <>
        <Calender />
        <Box sx={{ width: 275, height: 540, backgroundColor: 'white', zIndex: 999, 
          display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column' 
        }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            {calender.selected==='' ?
            <Typography sx={{ fontSize: 17, mt: 1 }}>{`
              Select a Date
            `}</Typography>
            : <Typography sx={{ fontSize: 17, mt: 1 }}>{`
              ${DAY_LABELS[calender.selected.getDay()].label}, 
              ${MONTH_MAP[calender.selected.getMonth()+1]} 
              ${calender.selected.getDate()},
              ${calender.selected.getFullYear()}
            `}</Typography>
            }
            <Divider />
          </Box>
          <Stack direction={'column'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '4px' }}>
            {eventList.map((event) => (
              <Box sx={{ width: '90%', height: '100%', backgroundColor: 'lightgreen', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', mt: 1 }}>
                <Typography sx={{ fontSize: 16, color: 'black' }}>{`${event.title}`}</Typography>  
                <Typography sx={{ fontSize: 14, color: 'gray' }}>{`${event.location}`}</Typography>  
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, color: 'black' }}>{`${event.startTime}`}</Typography>
                  <Typography sx={{ fontSize: 13, color: 'black', ml: 1, mr: 1 }}>{` - `}</Typography>
                  <Typography sx={{ fontSize: 14, color: 'black' }}>{`${event.endTime}`}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
          <EventModal trigger={trigger} />
          
        </Box>
        </>
    )
}
