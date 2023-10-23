import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import useCanvas from '../hooks/useCanvas'

export function ColorSlider({ w }) {
    const [slider, setSlider] = useState({
        context: '',
        width: '',
        height: '',
        color: '',
        relative_coords: { x: 8, y: 25 },
        absolute_coords: { x: 211, y: 25 },
    })

    const sliderRef = useRef()
    const {setBaseColor} = useCanvas()

    const initCanvas = (ref, w, h) => {
        /* Create color context from canvas */
        const ColorCtx = ref.getContext('2d')
        setSlider((prev) => { 
            const updated = { 
                ...prev,
                context: ColorCtx, 
                width: w, 
                height: h, 
            }
            return updated 
        })
    }

    const fillCanvas = (selectedColor) => {
        if(slider.context===''){
            return ;
        }
        const ctxt = slider.context

        const colorList = [
            'rgba(255,0,0,1)',
            'rgba(255,0,255,1)', 'rgba(149, 0, 255)', 'rgba(25,0,255,1)',
            'rgba(0,225,255,1)', 'rgba(0,255,38,1)', 
            'rgba(229,225,0,1)', 'rgba(255,145,0,1)', 
            'rgba(255,0,0,1)'
        ]
        ctxt.createImageData(w, ctxt.canvas.height)

        const colorStopIncrement = 1/(colorList.length-1)
        let inc = 0
        let gradient1 = ctxt.createLinearGradient(0,0,ctxt.canvas.width, 0)
        for(let i = 0; i<=colorList.length-1; i++){
            gradient1.addColorStop(inc, colorList[i])
            inc = inc + colorStopIncrement
        }

        ctxt.fillStyle = gradient1
        ctxt.fillRect(0,0,ctxt.canvas.width, ctxt.canvas.height)

        const pixel = slider.context.getImageData(slider.relative_coords.x,slider.relative_coords.y,1,1)['data']
        const rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`
        setBaseColor(rgb)
    }

    const handleColorSelect = (e) => {
        /* Create color context from canvas */
        if(slider.context==='') {
            return ;
        }
        let coords = e.target.getBoundingClientRect()
        let abs_x = e.clientX - coords.x
        let abs_y = e.clientY - coords.y
        let rel_x = parseInt(e.clientX - coords.x)
        let rel_y = parseInt(e.clientY - coords.y)
        
        slider.context.createImageData(slider.context.canvas.width, slider.context.canvas.height)
        const pixel = slider.context.getImageData(rel_x,rel_y,1,1)['data']
        const rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`
        setSlider((prev) => {
            return {
                ...prev, 
                color: rgb,
                relative_coords: { x: parseInt(rel_x), y: parseInt(rel_y) },
                absolute_coords: { x: parseInt(abs_x), y: parseInt(abs_y) },
            }
        })
        setBaseColor(rgb)
    }

    useEffect(() => {
        initCanvas(sliderRef.current, w, 60)
    }, [])

    useEffect(() => {
        if(slider.context!==''){
            fillCanvas()
        }
    }, [slider])
    
    return (
        <Box sx={{ width: '100%', height: 60, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <canvas id={'slider_canvas'} ref={sliderRef} width={w} height={60} style={{ position: 'relative' }} onClick={(e) => handleColorSelect(e)}>
            </canvas>
            <Box sx={{ width: 10, height: 50, backgroundColor: 'white', position: 'absolute', left: slider.relative_coords.x }}/>
        </Box>
    )
}
