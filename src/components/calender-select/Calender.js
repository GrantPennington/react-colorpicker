import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Square } from './Square'
import generateFullCalender, { DAY_LABELS, MONTH_MAP, generateMonths, generateYears } from './helpers'
import useCalender from './useCalender'
import YearDropdown from './YearDropdown'
import MonthDropdown from './MonthDropdown'

export function Calender({ w, h }) {
    const {calender, updateCalender} = useCalender()

    const getBufferSize = (currentData) => {
        let dayOfFirst = currentData[0].getDay()
        return dayOfFirst
    }

    const fillCalender = () => {
        const currentData = calender?.fullCalender[calender.year][calender.month]
        const start_buffer = getBufferSize(currentData)
        if(calender.month>1 && calender.month<12){
            let temp = calender?.fullCalender[calender.year][calender.month-1]
            const newPayload = temp.slice((temp.length-start_buffer),temp.length)
            let final = [ ...newPayload, ...currentData ]
            if(final.length < 42){
                let remainder = 42-final.length
                let t = calender?.fullCalender[calender.year][calender.month+1]
                const tPayload = t.slice(0, remainder)
                updateCalender('current', [...newPayload, ...currentData, ...tPayload ])
            } else {
                updateCalender('current', [...newPayload, ...currentData ])
            }
        } else if(calender.month===1) {
            let temp = calender?.fullCalender[calender.year-1][12]
            const newPayload = temp.slice((temp.length-start_buffer),temp.length)
            let final = [ ...newPayload, ...currentData ]
            if(final.length < 42){
                let remainder = 42-final.length
                let t = calender?.fullCalender[calender.year][calender.month+1]
                const tPayload = t.slice(0, remainder)
                updateCalender('current', [...newPayload, ...currentData, ...tPayload ])
            } else {
                updateCalender('current', [...newPayload, ...currentData ])
            }
        } else if(calender.month===12) {
            let temp = calender?.fullCalender[calender.year][calender.month-1]
            const newPayload = temp.slice((temp.length-start_buffer),temp.length)
            let final = [ ...newPayload, ...currentData ]
            if(final.length < 42){
                let remainder = 42-final.length
                let t = calender?.fullCalender[calender.year+1][1]
                const tPayload = t.slice(0, remainder)
                updateCalender('current', [...newPayload, ...currentData, ...tPayload ])
            } else {
                updateCalender('current', [...newPayload, ...currentData ])
            }
        }
    }

    useEffect(() => {
        fillCalender()
    }, [calender.year, calender.month])

    return (
        <Paper sx={{ width: w || 575, height: h || 540, zIndex: 999 }}>
            <Box
                sx={{ width: '100%', height: 55, backgroundColor: 'lightgray', display: 'flex', 
                    flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', 
                    borderTopLeftRadius: '4px', borderTopRightRadius: '4px' 
                }}
            >
                <MonthDropdown 
                    id={'month-select'}
                    label={'Month'}
                    options={generateMonths()}
                />
                <YearDropdown 
                    id={'year-select'} 
                    label={'Year'} 
                    options={generateYears(parseInt(2000),parseInt(new Date().getFullYear()+4))} 
                />
            </Box>
            <Grid container sx={{ width: '100%', height: 25, backgroundColor: 'orange', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {DAY_LABELS.map((day) => (
                    <Grid item key={day.label} sx={{ width: '14.25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography fontSize={12}>{day.abr}</Typography>
                    </Grid>
                ))}
            </Grid>
            <Grid container sx={{ width: '100%', backgroundColor: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {(calender.current!=='') && calender.current.map((day, index) => (
                    <Grid item key={day} sx={{ width: '14.25%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Square label={day} />
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}
