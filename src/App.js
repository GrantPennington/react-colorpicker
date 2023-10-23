import './App.css';
import { Box } from '@mui/material';
import { ColorPicker } from './components/ColorPicker';
import useCanvas from './hooks/useCanvas';

function App() {
  const {canvas} = useCanvas()
  return (
    <Box sx={{ maxWidth: '100vw', width: '100vw', height: '100vh', backgroundColor: (canvas.color!=='') && canvas.color }}>
      <ColorPicker />
    </Box>
  );
}

export default App;
