import React, { useState } from 'react'
import { CanvasContextProvider } from './CanvasContext'
import { ColorGradient } from './ColorGradient'
import { Paper } from '@mui/material'
import { useTheme } from '@emotion/react'
import { ColorSlider } from './ColorSlider'

export function CanvasContainer(props) {
    const [selected, setSelected] = useState('')
    const theme = useTheme()
    return (
        <Paper sx={{ 
                width: 400, position: 'absolute', top: '30%', left: '40%', 
                display: 'flex', flexDirection: 'column', backgroundColor: '#f7f3f2', 
                padding: '4px'
            }}
            elevation={4}
        >
            <ColorGradient />
            <ColorSlider w={400} />
        </Paper>
    )
}
