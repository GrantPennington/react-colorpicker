import React, { useEffect, useRef, useState } from 'react'
import useCanvas from '../hooks/useCanvas'
import { Box, Paper, Typography } from '@mui/material'
import { convertRGBtoHex } from './helpers'
import { Pointer } from './Pointer'

export function ColorGradient(props) {
    const {canvas, initCanvas, handleColorSelect } = useCanvas()
    const canvasRef = useRef()

    useEffect(() => {
        initCanvas(canvasRef.current, 255, 255) // initialize canvas OnMount
    }, [])

    return (
        <Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                <canvas id={'color_canvas'} ref={canvasRef} width={canvas.width} height={canvas.height} style={{ position: 'relative', }} onClick={(e) => handleColorSelect(e)}>
                </canvas>
                <Pointer w={15} h={15} />
                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ width: '100%', height: 150, backgroundColor: canvas.color }} />
                    <Box sx={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 4 }}>
                        <Typography>{canvas.color || 'rgb(0,0,0)'}</Typography>
                        <Typography>{`hex: ${(canvas.color!=='') ? convertRGBtoHex(canvas.color) : convertRGBtoHex('rgb(0,0,0)')}`}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
