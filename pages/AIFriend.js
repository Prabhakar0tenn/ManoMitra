import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  CircularProgress,
  IconButton
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';

// This would be imported from services in a real implementation
import { sendMessageToAI } from '../services/aiService';

const AIFriend = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add welcome message when component mounts
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        text: 'नमस्ते! मैं ManoMitra हूँ, आपका मानसिक स्वास्थ्य सहायक। आप कैसे हैं आज? मैं आपकी कैसे मदद कर सकता हूँ?',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, []);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    try {
      // In a real implementation, this would call the Gemini API with the system prompt
      // For now, we'll simulate a response
      const response = await sendMessageToAI({
        system_prompt: "You are ManoMitra, a mental health support chatbot...",
        user_message: input,
        conversation_history: messages.slice(-5) // Send last 5 messages for context
      });
      
      const botMessage = {
        id: Date.now().toString() + '-bot',
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: Date.now().toString() + '-error',
        text: 'Sorry, I encountered an error. Please try again later.',
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Chat with ManoMitra
      </Typography>
      <Typography variant="body2" color="textSecondary" paragraph>
        I'm here to listen, support, and guide you. Feel free to share your thoughts and feelings.
      </Typography>
      
      <Paper className="chat-container">
        <Box className="chat-messages">
          {messages.map((message) => (
            <Box 
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                mb: 2
              }}
            >
              <Typography variant="body1">{message.text}</Typography>
              <Typography 
                variant="caption" 
                color="textSecondary"
                sx={{ alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start', mt: 0.5 }}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography>
            </Box>
          ))}
          {loading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
              <CircularProgress size={24} />
            </Box>
          )}
          <div ref={messagesEndRef} />
        </Box>
        
        <Box className="chat-input-container">
          <IconButton size="small" sx={{ mr: 1 }}>
            <AttachFileIcon fontSize="small" />
          </IconButton>
          <TextField
            className="chat-input"
            placeholder="Type your message here..."
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
            variant="outlined"
            size="small"
          />
          <IconButton size="small" sx={{ mx: 1 }}>
            <MicIcon fontSize="small" />
          </IconButton>
          <Button
            className="send-button"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
            disabled={loading || input.trim() === ''}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AIFriend;