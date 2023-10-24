import React, { useContext } from 'react'
import { CalenderContext } from './CalenderContext'

const useCalender = () => {
    return useContext(CalenderContext)
}

export default useCalender
