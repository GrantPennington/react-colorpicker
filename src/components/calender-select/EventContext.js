import React, { createContext, useState } from 'react'

const EventContext = createContext()

const initialState = {}

const EventContextProvider = ({ children }) => {
    const [events, setEvents] = useState(initialState)

    const addEvent = ({ date, data }) => {
        setEvents((prev) => {
            const updated = {
                ...prev,
                [date]: {
                    title: data.title,
                    location: data.location,
                    isAllDay: data.isAllDay,
                    startTime: data.startTime,
                    endTime: data.endTime,
                }
            }
            return updated
        })
    }

    return (
        <EventContext.Provider value={{ events, setEvents, addEvent }}>
            {children}
        </EventContext.Provider>
    )
}

export { EventContext, EventContextProvider }