import './App.css';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { ColorPicker } from './components/colorpicker/ColorPicker';
import useCanvas from './hooks/useCanvas';
import Button from './components/button/Button';
import StyledButton from './components/button/CustomButton';
import { Dragzone } from './components/dnd/Dragzone';
import { Dropzone } from './components/dnd/Dropzone';
import { Draggable } from './components/dnd/Draggable';
import generateFullCalender, { DAY_LABELS, MONTH_MAP } from './components/calender-select/helpers';
import { Calender } from './components/calender-select/Calender';
import useCalender from './components/calender-select/useCalender';
import AddIcon from '@mui/icons-material/Add';
import { CalenderContainer } from './components/calender-select/CalenderContainer';

function App() {
  const {canvas} = useCanvas()
  const {calender} = useCalender()
  return (
    <Box sx={{ maxWidth: '100vw', width: '100vw', height: '100vh', backgroundColor: (canvas.color!=='') && canvas.color }}>
      <ColorPicker />
      <Box sx={{ width: '90%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 2, flexDirection: 'row' }}>
        <CalenderContainer />
      </Box>
    </Box>
  );
}

export default App;
