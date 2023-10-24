import { Box, Divider, IconButton, Typography } from '@mui/material';
import generateFullCalender, { DAY_LABELS, MONTH_MAP } from './helpers';
import { Calender } from './Calender';
import useCalender from './useCalender';
import AddIcon from '@mui/icons-material/Add';
import EventModal from './EventModal';

export function CalenderContainer(props) {
    const {calender} = useCalender()

    const trigger = (onClick) => {
      return (
          <IconButton sx={{ '&:hover': { backgroundColor: 'lightgray' }, borderRadius: '50%', mt: 1 }} onClick={onClick}>
            <AddIcon />
          </IconButton>
      )
    }

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
          <EventModal trigger={trigger} />
          
        </Box>
        </>
    )
}
