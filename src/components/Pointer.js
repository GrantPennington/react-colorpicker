import { Box } from '@mui/material'
import React from 'react'
import useCanvas from '../hooks/useCanvas'

export function Pointer({ w, h, bg }) {
    const {canvas} = useCanvas()

    return (
        <Box sx={{ 
            width: w || 15, height: h || 15,
            backgroundColor: 'none',
            border: `2px solid ${bg || 'white'}`, 
            borderRadius: '50%',
            position: 'absolute', 
            top: (!!canvas.absolute_coords) ? canvas.absolute_coords.y : 25,
            left: (!!canvas.absolute_coords) ? canvas.absolute_coords.x : 211,
            '&:hover': { cursor: 'pointer' },
        }} />
    )
}