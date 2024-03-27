import React from 'react'
import './Home.css'
import img from './Images/ezgif.com-video.gif'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Avatar from '@mui/material/Avatar';
import { Paper } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

const Home = () => {
  
  const navigate = useNavigate();
  
  
  const handlecheck=()=>{
    navigate("/Checkout")
  }
  const handlecat=()=>{
    navigate("/Frontpage")
  }
  const handlesign=()=>{
    navigate("/Signin")
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlecon=()=>{
    navigate("/Contact")
  }

  
  return (
    <div>
    <div className='head'>
    <table>
    <tr> 
    <Stack spacing={5} direction="row">
    
    <MenuItem onClick={handlecat}>Category</MenuItem>
    
    <MenuItem onClick={handlecheck}>Checkout</MenuItem>
    <input
        type="text"
        
        placeholder='search'
      />
    </Stack>
    <td className='space'><MenuItem onClick={handlesign}>SignIn</MenuItem></td>
    
    
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}><MenuItem onClick={handlecon}>Contact</MenuItem></Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handlesign}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handlesign}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
    </tr>
    
    </table>
    </div>
    <div className='Luxe'>
    <img src={img} width={1469} height={500}></img>
    </div>
    <marquee direction='up' height='250'>
    <div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 800,
          height: 128,
        },
      }}
      >
      <Paper elevation={3}>
 
      <table>
      <tbody>
      <tr>
      <td>
      <Avatar className='img'
    alt="Remy Sharp"
    src="https://static.thenounproject.com/png/337564-200.png"
    sx={{ width: 60, height: 60 }}
  />
      </td>
     
      <td><h3 className='txt'>
      Black Friday Sale starts in 12 hours!! Grab your bags rightnow!!<br/>
      <MenuItem onClick={handlecat}>Explore Now</MenuItem>
      </h3></td>
      </tr>
      </tbody>
      </table>
      </Paper>
      </Box>
      </div>
    </marquee>
    
    </div>
  )
}

export default Home