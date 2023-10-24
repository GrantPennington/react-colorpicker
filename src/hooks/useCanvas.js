import { useContext } from 'react'
import { CanvasContext } from '../components/colorpicker/CanvasContext'

const useCanvas = () => {
    return useContext(CanvasContext)
}

export default useCanvas