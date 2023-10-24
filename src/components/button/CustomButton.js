import styled from '@emotion/styled'

const CustomButton = styled.button`
    padding: 18px;
    background-color: #ba9ede;
    font-size: 16px;
    border-radius: 4px;
    color: black;
    &:hover {
        color: white;
        cursor: pointer;
    }
`

const StyledButton = ({ text, onClick }) => {
    return (
        <CustomButton onClick={onClick}>{text || 'Custom Button'}</CustomButton>
    )
}

export default StyledButton