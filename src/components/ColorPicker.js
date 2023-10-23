import React from 'react'
import { ColorGradient } from './ColorGradient'
import { Paper } from '@mui/material'
import { ColorSlider } from './ColorSlider'

export function ColorPicker(props) {
    /* main color picker component */
    return (
        <Paper sx={{
                width: 400, position: 'absolute', top: '30%', left: '40%', 
                display: 'flex', flexDirection: 'column', backgroundColor: '#f7f3f2', 
                padding: '4px',
            }}
            elevation={4}
        >
            <ColorGradient />
            <ColorSlider w={400} />
        </Paper>
    )
}
