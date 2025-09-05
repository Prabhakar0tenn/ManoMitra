import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import CreateIcon from '@mui/icons-material/Create';
import SpaIcon from '@mui/icons-material/Spa';

const SelfHelp = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Content sections
  const sections = [
    {
      id: 'breathing',
      title: '🧘 Breathing Exercises',
      content: (
        <Box>
          <Typography variant="body1" paragraph>
            Breathing exercises are powerful tools to reduce stress and anxiety. When we focus on our breath, we activate our parasympathetic nervous system, which helps calm our body and mind.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Box Breathing Technique ✨
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Inhale slowly through your nose for 4 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Hold your breath for 4 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Exhale slowly through your mouth for 4 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Hold your breath for 4 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Repeat for 5-10 cycles" />
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            4-7-8 Breathing Technique 🌱
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Inhale quietly through your nose for 4 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Hold your breath for 7 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Exhale completely through your mouth for 8 counts" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Repeat for 4 cycles" />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      id: 'diet',
      title: '🥗 Mental Health & Diet',
      content: (
        <Box>
          <Typography variant="body1" paragraph>
            What we eat directly impacts our mood and mental wellbeing. The gut-brain connection means that nourishing your body properly can help stabilize your mood and improve cognitive function.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Simple Diet Tips ✅
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Stay hydrated" 
                secondary="Drink at least 8 glasses of water daily. Even mild dehydration can affect mood." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Reduce caffeine and sugar" 
                secondary="These can increase anxiety and lead to energy crashes." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Eat regular meals" 
                secondary="Skipping meals can lead to blood sugar drops that affect mood." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Include omega-3 fatty acids" 
                secondary="Found in fish, flaxseeds, and walnuts, these support brain health." 
              />
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sample Diet Plans 🌱
          </Typography>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>For Students</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Breakfast: Oatmeal with berries and nuts" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Lunch: Whole grain wrap with protein and vegetables" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Snack: Greek yogurt with honey" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Dinner: Stir-fry with lean protein and vegetables" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>For Working Professionals</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Breakfast: Smoothie with protein powder, spinach, and fruit" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Lunch: Meal-prepped grain bowl with vegetables and protein" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Snack: Nuts and dried fruit" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Dinner: Baked fish with quinoa and roasted vegetables" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      )
    },
    {
      id: 'exercise',
      title: '🏃 Exercise for Wellness',
      content: (
        <Box>
          <Typography variant="body1" paragraph>
            Regular physical activity is one of the most effective ways to improve mental health. Exercise releases endorphins, reduces stress hormones, and promotes better sleep—all crucial for emotional wellbeing.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Easy Activities Anyone Can Do ✨
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Walking" 
                secondary="Just 30 minutes of brisk walking can significantly improve mood." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Gentle yoga" 
                secondary="Combines movement, breathing, and mindfulness for triple benefits." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Stretching" 
                secondary="Even 5-10 minutes can release tension and improve circulation." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Dancing" 
                secondary="Put on your favorite music and move freely—no skill required!" 
              />
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sample Weekly Routine 🌱
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>Monday & Thursday</Typography>
                  <Typography variant="body2">15-30 min walking</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>Tuesday & Friday</Typography>
                  <Typography variant="body2">10 min stretching</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>Wednesday</Typography>
                  <Typography variant="body2">15 min yoga</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom>Weekend</Typography>
                  <Typography variant="body2">Something fun: dancing, hiking, or swimming</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )
    },
    {
      id: 'journaling',
      title: '✍️ Journaling for Clarity',
      content: (
        <Box>
          <Typography variant="body1" paragraph>
            Journaling is a powerful tool for processing emotions, gaining insights, and tracking personal growth. Writing helps externalize thoughts that might otherwise create mental clutter.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Types of Journaling ✨
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Gratitude journaling" 
                secondary="Write 3-5 things you're grateful for each day to shift focus toward positivity." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Emotion release" 
                secondary="Write freely about difficult feelings without judgment to process them." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Goal tracking" 
                secondary="Document progress toward personal goals to stay motivated." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Stream of consciousness" 
                secondary="Write whatever comes to mind for 5-10 minutes to clear mental space." 
              />
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            How to Start 🌱
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CreateIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Start small: Just 5 minutes per day" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CreateIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="No rules: Don't worry about grammar or structure" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CreateIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Be consistent: Try to write at the same time each day" />
            </ListItem>
            <ListItem>
              <ListItemIcon><CreateIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText primary="Use prompts: If you're stuck, use journal prompts to get started" />
            </ListItem>
          </List>
        </Box>
      )
    },
    {
      id: 'general',
      title: '🌱 General Self-Help Tips',
      content: (
        <Box>
          <Typography variant="body1" paragraph>
            These fundamental practices form the foundation of good mental health. Incorporating even small changes in these areas can have profound effects on your overall wellbeing.
          </Typography>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Sleep Hygiene ✨
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Consistent schedule" 
                secondary="Go to bed and wake up at the same time every day, even on weekends." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Screen-free hour" 
                secondary="Avoid screens for at least an hour before bedtime." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Comfortable environment" 
                secondary="Keep your bedroom dark, quiet, and cool." 
              />
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Digital Detox 🌱
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Designated phone-free times" 
                secondary="Such as during meals or the first hour after waking up." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Social media limits" 
                secondary="Set a daily time limit for social media apps." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Notification management" 
                secondary="Turn off non-essential notifications to reduce distractions." 
              />
            </ListItem>
          </List>
          
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Nature & Social Connection ✨
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><SpaIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Nature time" 
                secondary="Spend at least 20 minutes outdoors daily, even just sitting in a park." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><SpaIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Meaningful interactions" 
                secondary="Prioritize quality time with supportive people in your life." 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><SpaIcon color="primary" fontSize="small" /></ListItemIcon>
              <ListItemText 
                primary="Community involvement" 
                secondary="Volunteer or join groups aligned with your interests." 
              />
            </ListItem>
          </List>
        </Box>
      )
    }
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Self-Help Resources
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Explore practical techniques and strategies to support your mental wellbeing. These evidence-based approaches can help you manage stress, anxiety, and improve your overall quality of life.
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          {sections.map((section, index) => (
            <Tab key={section.id} label={section.title} id={`tab-${index}`} />
          ))}
        </Tabs>

        {sections.map((section, index) => (
          <Box
            key={section.id}
            role="tabpanel"
            hidden={tabValue !== index}
            id={`tabpanel-${index}`}
            sx={{ p: 3 }}
          >
            {tabValue === index && section.content}
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default SelfHelp;