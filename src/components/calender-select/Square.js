import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useCalender from './useCalender'

export function Square({ w, h, label }) {
    const [isThisMonth, setIsThisMonth] = useState(false)
    const {calender, updateCalender} = useCalender()

    const handleSelect = () => {
        updateCalender('selected', label)
    }

    const hanldeHighlight = () => {
        if(calender.selected===label){
            return '#4fc734'
        }
        else if(label.getDate()===calender.day){
            return '#e5a527'
        } else if(isThisMonth){
            return 'white'
        } else if(!isThisMonth) {
            return 'lightgray'
        }
    }

    useEffect(() => {
        if(label.getMonth()+1 === calender.month){
            setIsThisMonth(true)
        } else {
            setIsThisMonth(false)
        }
    }, [])

    return (
        <Box onClick={handleSelect}
        sx={{ width: w || '100%', height: h || 70, 
            backgroundColor: hanldeHighlight(),
            display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', p: '2px', '&:hover': { cursor: 'pointer', backgroundColor: 'gray' },
            border: '1px dotted gray',
        }}>
            <Typography sx={{ fontSize: 16, ml: 1, mt: 1 }}>{label.getDate()}</Typography>
        </Box>
    )
}
