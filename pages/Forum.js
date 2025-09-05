import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Grid
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import PersonIcon from '@mui/icons-material/Person';

const Forum = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      author: 'Anonymous User',
      title: 'Dealing with exam anxiety',
      content: 'I have my final exams coming up next week and I\'m feeling extremely anxious. I can\'t focus on studying and keep having panic attacks. Has anyone experienced this? What helped you cope with exam stress?',
      timestamp: new Date(Date.now() - 86400000 * 2), // 2 days ago
      likes: 15,
      comments: 8,
      tags: ['anxiety', 'student', 'exams'],
      liked: false
    },
    {
      id: '2',
      author: 'Mindful123',
      title: 'Meditation techniques that helped my anxiety',
      content: 'I\'ve been practicing mindfulness meditation for the past 3 months and it has significantly reduced my anxiety levels. I start with 5 minutes each morning and gradually increased to 15 minutes. The key is consistency. Would anyone be interested in a virtual meditation group?',
      timestamp: new Date(Date.now() - 86400000 * 5), // 5 days ago
      likes: 32,
      comments: 12,
      tags: ['meditation', 'mindfulness', 'anxiety'],
      liked: false
    },
    {
      id: '3',
      author: 'SleepSeeker',
      title: 'Insomnia is ruining my mental health',
      content: 'I\'ve been struggling with insomnia for months now. I can\'t fall asleep until 3-4 AM and then I feel exhausted all day. It\'s affecting my work and relationships. I\'ve tried everything from sleep hygiene to melatonin. Any suggestions would be greatly appreciated.',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      likes: 8,
      comments: 15,
      tags: ['insomnia', 'sleep', 'exhaustion'],
      liked: false
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handlePostChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitPost = (e) => {
    e.preventDefault();
    
    if (newPost.title.trim() === '' || newPost.content.trim() === '') {
      return;
    }
    
    const tagsArray = newPost.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
    
    const post = {
      id: Date.now().toString(),
      author: 'You',
      title: newPost.title,
      content: newPost.content,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      tags: tagsArray,
      liked: false
    };
    
    setPosts([post, ...posts]);
    setNewPost({
      title: '',
      content: '',
      tags: ''
    });
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Peer Support Forum
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        Connect with others, share experiences, and find support in our community. 
        Remember to be respectful and follow our community guidelines.
      </Typography>

      <Paper className="post-form" sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Create a New Post
        </Typography>
        <form onSubmit={handleSubmitPost}>
          <TextField
            name="title"
            label="Title"
            value={newPost.title}
            onChange={handlePostChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="content"
            label="Share your thoughts, questions, or experiences..."
            value={newPost.content}
            onChange={handlePostChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            name="tags"
            label="Tags (comma separated)"
            value={newPost.tags}
            onChange={handlePostChange}
            fullWidth
            margin="normal"
            placeholder="anxiety, meditation, sleep"
            helperText="Add relevant tags to help others find your post"
          />
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="caption" color="textSecondary">
              Posts are moderated for safety and support
            </Typography>
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </form>
      </Paper>

      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Community Posts
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item>
            <Chip label="All Posts" color="primary" variant="outlined" clickable />
          </Grid>
          <Grid item>
            <Chip label="Anxiety" variant="outlined" clickable />
          </Grid>
          <Grid item>
            <Chip label="Depression" variant="outlined" clickable />
          </Grid>
          <Grid item>
            <Chip label="Sleep" variant="outlined" clickable />
          </Grid>
          <Grid item>
            <Chip label="Self-Care" variant="outlined" clickable />
          </Grid>
        </Grid>
      </Box>

      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                <PersonIcon />
              </Avatar>
              <Box>
                <Typography variant="subtitle1">
                  {post.author}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {formatDate(post.timestamp)}
                </Typography>
              </Box>
            </Box>
            
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            
            <Typography variant="body1" paragraph>
              {post.content}
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {post.tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          </CardContent>
          
          <Divider />
          
          <CardActions>
            <Button 
              startIcon={post.liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
              onClick={() => handleLike(post.id)}
              size="small"
            >
              {post.likes}
            </Button>
            <Button startIcon={<CommentIcon />} size="small">
              {post.comments} Comments
            </Button>
            <IconButton size="small">
              <ShareIcon fontSize="small" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Forum;