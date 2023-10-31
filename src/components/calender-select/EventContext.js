import React, { createContext, useState } from 'react'

const EventContext = createContext()

const initialState = {}

const EventContextProvider = ({ children }) => {
    const [events, setEvents] = useState(initialState)

    const addEvent = (date, data) => {
        const size = Object.keys(events).length
        setEvents((prev) => {
            const updated = {
                ...prev,
                [date]: {
                    ...prev[date],
                    [size]: {
                        title: data.title,
                        location: data.location,
                        isAllDay: data.isAllDay,
                        startTime: data.startTime,
                        endTime: data.endTime,
                    },
                }
            }
            console.log('updated', updated)
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