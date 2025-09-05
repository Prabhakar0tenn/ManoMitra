import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button,
  Avatar
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import BookIcon from '@mui/icons-material/Book';
import ForumIcon from '@mui/icons-material/Forum';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EventIcon from '@mui/icons-material/Event';
import HelpIcon from '@mui/icons-material/Help';

const Home = () => {
  const features = [
    {
      title: 'AI Virtual Friend',
      description: 'Chat with ManoMitra, your empathetic AI companion who understands mental health concerns.',
      icon: <ChatIcon fontSize="large" color="primary" />,
      link: '/chat'
    },
    {
      title: 'Private Diary',
      description: 'Record your thoughts, feelings, and experiences in a secure, private digital journal.',
      icon: <BookIcon fontSize="large" color="primary" />,
      link: '/diary'
    },
    {
      title: 'Peer Support Forum',
      description: 'Connect with others, share experiences, and find support in a moderated community.',
      icon: <ForumIcon fontSize="large" color="primary" />,
      link: '/forum'
    },
    {
      title: 'Relaxation Library',
      description: 'Access guided meditations, calming music, and relaxation exercises.',
      icon: <MusicNoteIcon fontSize="large" color="primary" />,
      link: '/resources'
    },
    {
      title: 'Professional Support',
      description: 'Book sessions with licensed counselors and mental health professionals.',
      icon: <EventIcon fontSize="large" color="primary" />,
      link: '/booking'
    },
    {
      title: 'Self-Help Resources',
      description: 'Explore articles, exercises, and tools for managing various mental health concerns.',
      icon: <HelpIcon fontSize="large" color="primary" />,
      link: '/self-help'
    }
  ];

  return (
    <Box>
      <Box className="welcome-header">
        <Typography variant="h4" gutterBottom>
          Your Mental Wellness Journey
        </Typography>
        <Typography variant="body1" color="textSecondary">
          ManoMitra is here to support you every step of the way. Explore our features designed to help you maintain and improve your mental wellbeing.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="feature-card">
              <CardContent>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#e3f2fd', mr: 2 }}>
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" component="h2">
                    {feature.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  component={Link} 
                  to={feature.link} 
                  size="small" 
                  color="primary"
                >
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, p: 3, bgcolor: '#e3f2fd', borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          How are you feeling today?
        </Typography>
        <Typography variant="body2" paragraph>
          Remember, it's okay to not be okay. ManoMitra is here to support you.
        </Typography>
        <Button 
          component={Link} 
          to="/chat" 
          variant="contained" 
          color="primary"
        >
          Chat with ManoMitra
        </Button>
      </Box>
    </Box>
  );
};

export default Home;