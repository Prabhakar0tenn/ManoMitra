import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  IconButton,
  Slider,
  Paper
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Relaxation = () => {
  const [tabValue, setTabValue] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [volume, setVolume] = useState(70);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePlayPause = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      setPlaying(!playing);
    } else {
      setCurrentTrack(track);
      setPlaying(true);
      
      // If track has YouTube link, open it in a new tab
      if (track.youtubeLink) {
        window.open(track.youtubeLink, '_blank');
      }
    }
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  // Sample data for different categories
  const categories = [
    {
      id: 'meditation',
      title: 'Guided Meditation',
      items: [
        {
          id: 'med1',
          title: 'Mindful Breathing',
          duration: '10 min',
          image: 'https://source.unsplash.com/random/300x200/?meditation',
          description: 'A gentle meditation focusing on breath awareness to calm the mind.'
        },
        {
          id: 'med2',
          title: 'Body Scan Relaxation',
          duration: '15 min',
          image: 'https://source.unsplash.com/random/300x200/?relaxation',
          description: 'Progressive relaxation technique to release tension throughout the body.'
        },
        {
          id: 'med3',
          title: 'Loving-Kindness Meditation',
          duration: '12 min',
          image: 'https://source.unsplash.com/random/300x200/?kindness',
          description: 'Cultivate compassion and positive feelings toward yourself and others.'
        },
        {
          id: 'med4',
          title: 'Stress Relief Meditation',
          duration: '8 min',
          image: 'https://source.unsplash.com/random/300x200/?calm',
          description: 'Quick meditation designed to reduce stress and anxiety.'
        }
      ]
    },
    {
      id: 'music',
      title: 'Calming Music',
      items: [
        {
          id: 'mus1',
          title: 'White Noise',
          duration: '8 hours',
          image: 'https://source.unsplash.com/random/300x200/?white',
          description: 'White noise for better focus and sleep.',
          youtubeLink: 'https://www.youtube.com/watch?v=IWG7_iJZP1Y'
        },
        {
          id: 'mus2',
          title: 'Brown Noise',
          duration: '8 hours',
          image: 'https://source.unsplash.com/random/300x200/?brown',
          description: 'Brown noise for deep relaxation and sleep.',
          youtubeLink: 'https://www.youtube.com/watch?v=RqzGzwTY-6w'
        },
        {
          id: 'mus3',
          title: 'Rain Music',
          duration: '3 hours',
          image: 'https://source.unsplash.com/random/300x200/?rain',
          description: 'Calming rain sounds for relaxation and sleep.',
          youtubeLink: 'https://www.youtube.com/watch?v=8lNJQFRf_NA'
        },
        {
          id: 'mus4',
          title: 'Sleep Melody',
          duration: '6:30',
          image: 'https://source.unsplash.com/random/300x200/?sleep',
          description: 'Gentle tunes to help you fall asleep peacefully.'
        }
      ]
    },
    {
      id: 'breathing',
      title: 'Breathing Exercises',
      items: [
        {
          id: 'bre1',
          title: '4-7-8 Breathing Technique',
          duration: '5 min',
          image: 'https://source.unsplash.com/random/300x200/?breathing',
          description: 'Inhale for 4 counts, hold for 7, exhale for 8. Reduces anxiety and helps with sleep.'
        },
        {
          id: 'bre2',
          title: 'Box Breathing',
          duration: '7 min',
          image: 'https://source.unsplash.com/random/300x200/?square',
          description: 'Equal duration for inhale, hold, exhale, and hold. Great for stress management.'
        },
        {
          id: 'bre3',
          title: 'Diaphragmatic Breathing',
          duration: '8 min',
          image: 'https://source.unsplash.com/random/300x200/?deep',
          description: 'Deep belly breathing to activate the parasympathetic nervous system.'
        },
        {
          id: 'bre4',
          title: 'Alternate Nostril Breathing',
          duration: '10 min',
          image: 'https://source.unsplash.com/random/300x200/?yoga',
          description: 'Traditional yogic breathing technique to balance energy and calm the mind.'
        }
      ]
    },
    {
      id: 'yoga',
      title: 'Gentle Yoga',
      items: [
        {
          id: 'yog1',
          title: 'Morning Stretch Routine',
          duration: '15 min',
          image: 'https://source.unsplash.com/random/300x200/?stretch',
          description: 'Gentle stretches to start your day with energy and focus.'
        },
        {
          id: 'yog2',
          title: 'Bedtime Yoga',
          duration: '12 min',
          image: 'https://source.unsplash.com/random/300x200/?night',
          description: 'Calming poses to prepare your body and mind for sleep.'
        },
        {
          id: 'yog3',
          title: 'Desk Yoga Breaks',
          duration: '8 min',
          image: 'https://source.unsplash.com/random/300x200/?office',
          description: 'Quick stretches you can do at your desk to relieve tension.'
        },
        {
          id: 'yog4',
          title: 'Anxiety Relief Yoga',
          duration: '20 min',
          image: 'https://source.unsplash.com/random/300x200/?relief',
          description: 'Poses specifically designed to reduce anxiety and promote calm.'
        }
      ]
    }
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Relaxation Library
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Explore our collection of guided meditations, calming music, breathing exercises, and gentle yoga practices to help you relax and find peace.
      </Typography>

      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        className="category-tabs"
        sx={{ mb: 3 }}
      >
        {categories.map((category) => (
          <Tab key={category.id} label={category.title} />
        ))}
      </Tabs>

      {categories.map((category, index) => (
        <Box key={category.id} role="tabpanel" hidden={tabValue !== index}>
          {tabValue === index && (
            <Grid container spacing={3}>
              {category.items.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <Card>
                    <CardActionArea onClick={() => handlePlayPause(item)}>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt={item.title}
                      />
                      <CardContent>
                        <Typography variant="h6" component="div" noWrap>
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          {item.duration}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      ))}

      {/* Player controls */}
      {currentTrack && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'background.paper',
            boxShadow: 3,
            zIndex: 1000,
            ml: '250px' // Adjust based on sidebar width
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Box sx={{ mr: 2, width: 50, height: 50, overflow: 'hidden', borderRadius: 1 }}>
              <img 
                src={currentTrack.image} 
                alt={currentTrack.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </Box>
            
            <Box sx={{ flexGrow: 1, mr: 2 }}>
              <Typography variant="subtitle1" noWrap>
                {currentTrack.title}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {currentTrack.duration}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton size="small">
                <SkipPreviousIcon />
              </IconButton>
              
              <IconButton 
                onClick={() => setPlaying(!playing)} 
                sx={{ mx: 1 }}
              >
                {playing ? <PauseIcon /> : <PlayArrowIcon />}
              </IconButton>
              
              <IconButton size="small">
                <SkipNextIcon />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', width: 200, ml: 2 }}>
              <VolumeUpIcon sx={{ mr: 1, fontSize: 20 }} />
              <Slider
                size="small"
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Volume"
              />
            </Box>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default Relaxation;