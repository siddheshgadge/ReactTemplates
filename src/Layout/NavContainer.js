import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SideNav from '../Components/SideNav';
import { ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export default function NavContainer() {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: '100vh' }}>
        <SideNav/>
        </Box>
      </Container>
      </ThemeProvider>
    </Fragment>
  );
}
