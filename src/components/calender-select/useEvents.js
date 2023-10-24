import React, { useContext } from 'react'
import { EventContext } from './EventContext'

const useEvents = () => {
    return useContext(EventContext)
}

export default useEvents


