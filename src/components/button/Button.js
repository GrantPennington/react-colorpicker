import { css } from '@emotion/react'
import React from 'react'

const Button = ({ text, onClick }) => {

    const buttonStyle = css`
        width: 200px;
        height: 75px;
        background-color: hotpink;
        color: black;
    `
    return (
        <button 
            onClick={onClick}
            className={buttonStyle}
        >
            {text}    
        </button>
    )
}

export default Button
