import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import BookIcon from '@mui/icons-material/Book';
import ForumIcon from '@mui/icons-material/Forum';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HelpIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
  return (
    <Box className="sidebar">
      <Box className="logo-container">
        <Box
          component="img"
          src="/logo.svg"
          alt="ManoMitra Logo"
          className="logo-image"
        />
        <Box>
          <Typography variant="h6" className="logo-text">ManoMitra</Typography>
          <Typography variant="caption" color="textSecondary">
            Your mental wellness companion
          </Typography>
        </Box>
      </Box>

      <List>
        <ListItem 
          button 
          component={NavLink} 
          to="/" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem 
          button 
          component={NavLink} 
          to="/chat" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary="AI Friend" />
        </ListItem>

        <ListItem 
          button 
          component={NavLink} 
          to="/diary" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="My Diary" />
        </ListItem>

        <ListItem 
          button 
          component={NavLink} 
          to="/forum" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <ForumIcon />
          </ListItemIcon>
          <ListItemText primary="Peer Forum" />
        </ListItem>

        <ListItem 
          button 
          component={NavLink} 
          to="/resources" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Relaxation" />
        </ListItem>

        <ListItem 
          button 
          component={NavLink} 
          to="/self-help" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Self-Help" />
        </ListItem>

        <ListItem 
          button 
          component={NavLink} 
          to="/booking" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary="Booking" />
        </ListItem>
      </List>

      <Box sx={{ mt: 'auto', p: 2 }}>
        <ListItem 
          button 
          component={NavLink} 
          to="/profile" 
          className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
        >
          <ListItemIcon className="nav-icon">
            <PersonIcon />
          </ListItemIcon>
          <ListItemText 
            primary="My Profile" 
            secondary="Settings & Preferences" 
          />
        </ListItem>
      </Box>
    </Box>
  );
};

export default Sidebar;