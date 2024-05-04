import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import { Box, createTheme } from '@mui/material';
import NavBar from './Components/NavBar';

const darkTheme = createTheme({
  palette : {
    mode: 'dark'
  }
})

function App() {
  return (<>
    <BrowserRouter>
    <Box sx={{ display: 'flex' }}>
      <NavBar/>
    <Box component="main" sx={{ flexGrow: 1,px:1 , py: 3}}> 
    
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
    </Routes>
    </Box>
    </Box>
    </BrowserRouter>
  </>
  );
}

export default App;
