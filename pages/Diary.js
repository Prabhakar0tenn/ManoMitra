import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookIcon from '@mui/icons-material/Book';

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [newEntryOpen, setNewEntryOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('neutral');
  const [isEditing, setIsEditing] = useState(false);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('diaryEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleNewEntry = () => {
    setTitle('');
    setContent('');
    setMood('neutral');
    setIsEditing(false);
    setNewEntryOpen(true);
  };

  const handleEditEntry = (entry) => {
    setTitle(entry.title);
    setContent(entry.content);
    setMood(entry.mood);
    setIsEditing(true);
    setSelectedEntry(entry);
    setNewEntryOpen(true);
  };

  const handleSaveEntry = () => {
    if (title.trim() === '' || content.trim() === '') return;

    if (isEditing && selectedEntry) {
      // Update existing entry
      const updatedEntries = entries.map(entry =>
        entry.id === selectedEntry.id
          ? { ...entry, title, content, mood, updatedAt: new Date() }
          : entry
      );
      setEntries(updatedEntries);
    } else {
      // Create new entry
      const newEntry = {
        id: Date.now().toString(),
        title,
        content,
        mood,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setEntries([newEntry, ...entries]);
    }

    setNewEntryOpen(false);
    setTitle('');
    setContent('');
    setMood('neutral');
  };

  const handleDeleteEntry = (entryId) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setEntries(entries.filter(entry => entry.id !== entryId));
      if (selectedEntry && selectedEntry.id === entryId) {
        setSelectedEntry(null);
      }
    }
  };

  const handleViewEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5">My Private Diary</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleNewEntry}
        >
          New Entry
        </Button>
      </Box>

      <Box sx={{ display: 'flex', height: 'calc(100vh - 200px)' }}>
        <Paper sx={{ width: '30%', mr: 2, overflow: 'auto', p: 2 }}>
          {entries.length > 0 ? (
            <List>
              {entries.map((entry) => (
                <ListItem
                  key={entry.id}
                  button
                  selected={selectedEntry && selectedEntry.id === entry.id}
                  onClick={() => handleViewEntry(entry)}
                  secondaryAction={
                    <Box>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditEntry(entry);
                        }}
                      >
                        <EditIcon fontSize="small" />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteEntry(entry.id);
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  }
                >
                  <ListItemText
                    primary={entry.title}
                    secondary={formatDate(entry.createdAt)}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Box className="diary-empty" sx={{ textAlign: 'center', py: 4 }}>
              <BookIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />
              <Typography variant="body1" color="textSecondary">
                No entries yet
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Start writing your thoughts
              </Typography>
            </Box>
          )}
        </Paper>

        <Paper sx={{ width: '70%', p: 3, overflow: 'auto' }}>
          {selectedEntry ? (
            <Box>
              <Typography variant="h6">{selectedEntry.title}</Typography>
              <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                Created: {formatDate(selectedEntry.createdAt)}
                {selectedEntry.updatedAt !== selectedEntry.createdAt && 
                  ` (Updated: ${formatDate(selectedEntry.updatedAt)})`}
              </Typography>
              <Typography variant="caption" color="textSecondary" display="block" gutterBottom>
                Mood: {selectedEntry.mood}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                {selectedEntry.content}
              </Typography>
            </Box>
          ) : (
            <Box className="diary-empty" sx={{ textAlign: 'center', py: 4 }}>
              <BookIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="textSecondary">
                Select an entry to view
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Or create a new entry to start journaling
              </Typography>
            </Box>
          )}
        </Paper>
      </Box>

      {/* New/Edit Entry Dialog */}
      <Dialog open={newEntryOpen} onClose={() => setNewEntryOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>{isEditing ? 'Edit Entry' : 'New Diary Entry'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="How are you feeling today?"
            select
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
            SelectProps={{
              native: true,
            }}
          >
            <option value="happy">Happy 😊</option>
            <option value="sad">Sad 😢</option>
            <option value="anxious">Anxious 😰</option>
            <option value="calm">Calm 😌</option>
            <option value="angry">Angry 😠</option>
            <option value="neutral">Neutral 😐</option>
          </TextField>
          <TextField
            label="Write your thoughts..."
            multiline
            rows={10}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNewEntryOpen(false)}>Cancel</Button>
          <Button onClick={handleSaveEntry} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Diary;