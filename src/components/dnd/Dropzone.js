import { Box, css } from '@mui/material'
import React from 'react'

export function Dropzone(props) {

    const handleDrop = (e) => {
        e.preventDefault()
        console.log('Dropping!')
    }

    const handleOnDragEnter = (e) => {
        e.preventDefault()
        console.log('Entering Drag Zone!')
    }

    const allowDrop = (e) => {
        e.preventDefault()
    }

    return (
        <Box sx={css`
            width: 300px;
            height: 200px;
            background-color: pink;
            display: flex;
            justify-content: center;
            align-items: center;
        `}
            onDragEnter={handleOnDragEnter}
            onDragOver={allowDrop}
            onDrop={handleDrop}
        >
            Dropzone
        </Box>
    )
}
