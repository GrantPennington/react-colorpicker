import React, { createContext, useEffect, useState } from 'react'

const CanvasContext = createContext()

const CanvasContextProvider = ({ children }) => {
    const [canvas, setCanvas] = useState({
        context: '',
        width: '',
        height: '',
        color: '',
        relative_coords: { x: 211, y: 25 },
        absolute_coords: { x: 211, y: 25 },
        base_color: 'rgba(255,0,0,1)',
    })

    const initCanvas = (ref, w, h) => {
        /* Create color context from canvas */
        const ColorCtx = ref.getContext('2d')
        setCanvas((prev) => { 
            const updated = { 
                ...prev,
                context: ColorCtx, 
                base_color: 'rgba(255,0,0,1)',
                width: w, 
                height: h, 
                relative_coords: { x: 211, y: 25 },
                absolute_coords: { x: 211, y: 25 },
            }
            return updated 
        })
    }

    const setBaseColor = (newColor) => {
        setCanvas((prev) => {
            const updated = {
                ...prev,
                base_color: newColor,
            }
            return updated
        })
    }
    const setColor = (newColor) => {
        setCanvas((prev) => {
            const updated = {
                ...prev,
                color: newColor,
            }
            return updated
        })
    }

    const fillCanvas = () => {
        if(canvas.context===''){
            return ;
        }
        /* Create horizontal white -> base_color gradient */
        const ctxt = canvas.context
        let gradientH = ctxt.createLinearGradient(0,0,ctxt.canvas.width,0)
        gradientH.addColorStop(0, '#fff')
        gradientH.addColorStop(1, canvas.base_color)
        ctxt.fillStyle = gradientH
        ctxt.fillRect(0,0,ctxt.canvas.width, ctxt.canvas.height)

        /* Create vertical black -> white gradient */
        let gradientV = ctxt.createLinearGradient(0,0,0,300)
        gradientV.addColorStop(0, 'rgba(0,0,0,0)')
        gradientV.addColorStop(1, '#000')
        ctxt.fillStyle = gradientV
        ctxt.fillRect(0,0,ctxt.canvas.width, ctxt.canvas.height)

        ctxt.createImageData(ctxt.canvas.width, ctxt.canvas.height)
        getColorFromCoordinates() // get color from current pointer coordinates
    }

    const handleColorSelect = (e) => {
        /* Handles clicking/selecting a color from the canvas */
        let coords = e.target.getBoundingClientRect()
        // subtract clientX, clientY from the relative x, y to get accurate coordinates
        let abs_x = e.clientX - coords.x
        let abs_y = e.clientY - coords.y
        let rel_x = e.clientX - coords.x
        let rel_y = e.clientY - coords.y

        /* Get color pixels at x,y coordinates */
        canvas.context.createImageData(canvas.width, canvas.height)
        const pixel = canvas.context.getImageData(rel_x,rel_y,1,1)['data']
        const rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`
        /* setting canvas state  */
        setCanvas((prev) => {
            return {
                ...prev, 
                color: rgb,
                relative_coords: { x: parseInt(rel_x), y: parseInt(rel_y) },
                absolute_coords: { x: parseInt(abs_x), y: parseInt(abs_y) },
            }
        })
    }
    /* 
        The main purpose of this function is to auto select the color at the current x,y coordinates of the pointer,
        when the slider changes the base_color
    */
    const getColorFromCoordinates = () => {
        if(canvas.context===''){ // return nothing if context doesn't exist
            return ;
        }
        /* return the color at the current coordinates */
        canvas.context.createImageData(canvas.width, canvas.height)
        const pixel = canvas.context.getImageData(canvas.absolute_coords.x,canvas.absolute_coords.y,1,1)['data']
        const rgb = `rgb(${pixel[0]},${pixel[1]},${pixel[2]})`
        setColor(rgb)
    }

    useEffect(() => {
        /* re-fill canvas everytime base_color changes */
        if(canvas.context!==''){
            fillCanvas()
        }
    }, [canvas.base_color])

    return (
        <CanvasContext.Provider value={{ canvas, setCanvas, initCanvas, fillCanvas, handleColorSelect, setColor, setBaseColor, getColorFromCoordinates }}>
            {children}
        </CanvasContext.Provider>
    )
}

export { CanvasContext, CanvasContextProvider }