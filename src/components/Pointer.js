import { Box } from '@mui/material'
import React from 'react'
import useCanvas from '../hooks/useCanvas'

export function Pointer({ w, h, bg }) {
    const {canvas} = useCanvas()

    return (
        <Box sx={{ 
            width: w || 15, height: h || 15,
            backgroundColor: bg || 'white', borderRadius: '50%',
            position: 'absolute', 
            top: (!!canvas.absolute_coords) ? canvas.absolute_coords.y : 25,
            left: (!!canvas.absolute_coords) ? canvas.absolute_coords.x : 211,
            '&:hover': { cursor: 'pointer' },
        }} />
    )
}

{/* <Box sx={{ width: 15, height: 15, backgroundColor: 'yellow', position: 'absolute', borderRadius: '50%', top: (!!canvas.absolute_coords) ? canvas.absolute_coords.y : 25, left: (!!canvas.absolute_coords) ? canvas.absolute_coords.x : 211 }} /> */}
