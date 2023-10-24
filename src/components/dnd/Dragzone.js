import React from 'react'
import { css } from '@emotion/react'
import { Box } from '@mui/material'

export function Dragzone(props) {
    return (
        <Box sx={css`
            width: 300px;
            height: 200px;
            background-color: pink;
            display: flex;
            justify-content: center;
            align-items: center;
        `}>
            Dragzone
        </Box>
    )
}
