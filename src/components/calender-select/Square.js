import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useCalender from './useCalender'

export function Square({ w, h, label }) {
    const [isThisMonth, setIsThisMonth] = useState(true)
    const [bg, setBG] = useState('lightgray')
    const {calender, updateCalender} = useCalender()

    const handleSelect = () => {
        updateCalender('selected', label)
    }

    const handleHighlight = () => {
        if(calender.selected===label){
            setBG('#4fc734')
        }
        else if(label.getDate()===calender.day && label.getFullYear()===new Date().getFullYear()){
            setBG('#e5a527')
        }
        else if(!isThisMonth){
            setBG('lightgray')
        } else if(isThisMonth) {
            setBG('white')
        }
    }

    useEffect(() => {
        handleHighlight()
    }, [isThisMonth, calender.selected, calender.day])

    useEffect(() => {
        if(label.getMonth()+1 === calender.month){
            setIsThisMonth(true)
        } else {
            setIsThisMonth(false)
        }
    }, [calender.month, calender.year])

    return (
        <Box onClick={handleSelect}
        sx={{ width: w || '100%', height: h || 70, 
            backgroundColor: bg,
            display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', p: '2px', '&:hover': { cursor: 'pointer', backgroundColor: 'gray' },
            border: '1px dotted gray',
        }}>
            <Typography sx={{ fontSize: 16, ml: 1, mt: 1 }}>{label.getDate()}</Typography>
        </Box>
    )
}
