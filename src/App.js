import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { ColorGradient } from './components/ColorGradient';
import { CanvasContainer } from './components/CanvasContainer';
import useCanvas from './hooks/useCanvas';

function App() {
  const {canvas} = useCanvas()
  return (
    <Box sx={{ maxWidth: '100vw', width: '100vw', height: '100vh', backgroundColor: (canvas.color!=='') && canvas.color }}>
      <CanvasContainer />
    </Box>
  );
}

export default App;
