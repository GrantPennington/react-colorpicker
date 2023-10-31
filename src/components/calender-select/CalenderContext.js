import React, { createContext, useEffect, useState } from 'react'
import generateFullCalender from './helpers'

const CalenderContext = createContext()

const initialState = {
    year: new Date().getFullYear(),
    month: new Date().getMonth()+1,
    day: new Date().getDate(),
    today: new Date(),
    fullCalender: generateFullCalender(),
    current: '',
    selected: new Date(),
}

const CalenderContextProvider = ({ children }) => {
    const [calender, setCalender] = useState(initialState)

    const updateCalender = (field, value) => {
        setCalender((prev) => {
            const updated = {
                ...prev,
                [field]: value,
            }
            return updated
        })
    }

    const handleYearChange = (newYear) => {
        setCalender((prev) => {
            const updated = {
                ...prev,
                year: newYear
            }
            return updated
        })
    }
    const handleMonthChange = (newMonth) => {
        setCalender((prev) => {
            const updated = {
                ...prev,
                month: newMonth
            }
            return updated
        })
    }

    const getFullCalender = () => {
        setCalender((prev) => {
            const updated = {
                ...prev,
                fullCalender: generateFullCalender(),
            }
            return updated
        })
    }

    return (
        <CalenderContext.Provider value={{ calender, setCalender, handleYearChange, handleMonthChange, updateCalender }}>
            {children}
        </CalenderContext.Provider>
    )
}

export { CalenderContext, CalenderContextProvider }