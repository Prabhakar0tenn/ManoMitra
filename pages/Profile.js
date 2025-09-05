import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  TextField,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 9876543210',
    avatar: 'https://source.unsplash.com/random/150x150/?portrait'
  });

  const [formData, setFormData] = useState({
    ...userData
  });

  const handleEditToggle = () => {
    if (editMode) {
      // Save changes
      setUserData({...formData});
    }
    setEditMode(!editMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        My Profile
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Avatar
              src={userData.avatar}
              alt={userData.name}
              sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
            />
            <Typography variant="h6">{userData.name}</Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {userData.email}
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              sx={{ mt: 2 }}
              onClick={handleEditToggle}
            >
              {editMode ? 'Save Profile' : 'Edit Profile'}
            </Button>
          </Paper>

          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Settings
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                <ListItemText primary="Notifications" secondary="Manage your alerts" />
                <Switch defaultChecked />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <SecurityIcon />
                </ListItemIcon>
                <ListItemText primary="Privacy" secondary="Control your data" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Appearance" secondary="Dark mode, font size" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="Help & Support" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={editMode ? formData.name : userData.name}
                  onChange={handleChange}
                  fullWidth
                  disabled={!editMode}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  name="email"
                  value={editMode ? formData.email : userData.email}
                  onChange={handleChange}
                  fullWidth
                  disabled={!editMode}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  value={editMode ? formData.phone : userData.phone}
                  onChange={handleChange}
                  fullWidth
                  disabled={!editMode}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 3, mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Mental Health Journey
            </Typography>
            <Typography variant="body2" paragraph>
              Track your progress and see how far you've come in your mental health journey.
            </Typography>
            
            <Box sx={{ height: 200, bgcolor: '#f5f5f5', borderRadius: 1, p: 2, mb: 2 }}>
              <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', pt: 5 }}>
                Your journey visualization will appear here
              </Typography>
            </Box>
            
            <Button variant="outlined" color="primary">
              View Detailed Progress
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;