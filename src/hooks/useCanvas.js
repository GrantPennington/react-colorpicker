import { useContext } from 'react'
import { CanvasContext } from '../components/CanvasContext'

const useCanvas = () => {
    return useContext(CanvasContext)
}

export default useCanvas