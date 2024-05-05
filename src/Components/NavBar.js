import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import subMenu from '../Data/subMenu';
import mainMenu from '../Data/mainMenu';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 180;

const MenuButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '0.8rem',
  fontWeight: '900',
  margin: '0',
  '&:hover': {
    textDecoration: 'underline',
    fontWeight: '1000',
    textDecorationThickness: '2px',
    textUnderlineOffset: '3px'
  },
  '&:active': {
    textDecoration: 'underline',
    fontWeight: '1000',
    textDecorationThickness: '2px',
    textUnderlineOffset: '3px'  
    },
  '&:focus': {
    textDecoration: 'underline',
    fontWeight: '1000',
    textDecorationThickness: '2px',
    textUnderlineOffset: '3px'
  },
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(4)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(5)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  height:'40px',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  height: '40px',
  justifyContent:'center',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function NavBar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

const mobileMenuId = 'primary-search-account-menu-mobile';
  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{bgcolor: '#000000'}}>
        <Toolbar variant='dense' disableGutters='true'>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(open && { display: 'none' }),
              color: '#13749a'
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 15,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Data Integrity Gateway
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {mainMenu.map((page) => (
              <MenuButton
                size='small'
                key={page}
                sx={{ color: '#13749a', display: 'block' }}
              >
                {page}
              </MenuButton>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle /> 
              <Typography
            noWrap
            sx={{
              mx: '2px',
              display: { xs: 'none', md: 'flex' },
              fontWeight: 100,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            USER
          </Typography>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>  
      </AppBar>
      {renderMenu}
      <Drawer variant="permanent" open={open} PaperProps={{sx: {backgroundColor:'#000000', color: '#13749a', fontSize:'0.5rem'}}}>
        <DrawerHeader sx={{ bgcolor: '#000000', alignItems:'center', height: '40px'}}>
          <IconButton onClick={handleDrawerClose} sx={{color: '#13749a'}}>
            {open ? <ChevronLeftIcon /> : null}
          </IconButton>
        </DrawerHeader>
        
        <Divider sx={{borderColor: '#454545'}} />
        <List sx={{ bgcolor: '#000000', m:0, p:0}}>
          {subMenu[0].map((navItem, index) => (
            <ListItem key={navItem.label} disablePadding sx={{ fontSize:'0.5rem', display: 'block' }} onClick={()=>{
                navigate(navItem.path)
            }}>
              <ListItemButton
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    color: '#13749a',
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon fontSize='small' /> : <MailIcon  fontSize='small' />}
                </ListItemIcon>
                <ListItemText primary={navItem.label} disableTypography  sx={{ opacity: open ? 1 : 0, fontSize:'0.8rem', fontWeight:'900' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
