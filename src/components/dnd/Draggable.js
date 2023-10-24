import { Box, Paper, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

export function Draggable(props) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const dragRef = useRef()

    const handleDragStart = (e) => {
        e.preventDefault()
        console.log('Starting drag!')
        const offsetX = e.clientX - e.target.getBoundingClientRect().left
        const offsetY = e.clientY - e.target.getBoundingClientRect().top
        setPosition({ x: offsetX, y: offsetY })
    }

    const handleDragEnd = (e) => {
        e.preventDefault()
        console.log('Dropping')
        const offsetX = e.clientX - e.target.getBoundingClientRect().left
        const offsetY = e.clientY - e.target.getBoundingClientRect().top
        setPosition({ x: offsetX, y: offsetY })
    }

    const handleDrag = (e) => {
        e.preventDefault()
        const newX = e.clientX - position.x
        const newY = e.clientY - position.y

        // dragRef.current.style.left = newX+'px'
        // dragRef.current.style.top = newY+'px'
        e.target.style.left = newX+'px'
        e.target.style.top = newY+'px'
    }

    return (
        <Paper id={'draggable-paper'} draggable={'true'} 
            onDrag={handleDrag} onDragEnd={handleDragEnd}
            sx={{ width: 100, height: 50, backgroundColor: 'lightgray', 
                display: 'flex', justifyContent: 'center', alignItems: 'center', 
                position: 'absolute', left: `${position.y}px`, top: `${position.x}`, zIndex: 999,
            }}
        >
        </Paper>
    )
}

/*onDragStart={handleDragStart} onDrag={handleDrag} onDragEnd={handleDragEnd} */