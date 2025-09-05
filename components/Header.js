import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WarningIcon from '@mui/icons-material/Warning';

const Header = () => {
  const handlePanicClick = () => {
    // Dial emergency helpline number
    window.location.href = 'tel:18008914416';
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      mb: 3
    }}>
      <Typography variant="h5" component="h1">
        Welcome back, User
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton sx={{ mr: 2 }}>
          <NotificationsIcon />
        </IconButton>
        
        <Button 
          variant="contained" 
          color="error" 
          startIcon={<WarningIcon />}
          className="panic-button"
          onClick={handlePanicClick}
        >
          Panic Alert
        </Button>
      </Box>
    </Box>
  );
};

export default Header;