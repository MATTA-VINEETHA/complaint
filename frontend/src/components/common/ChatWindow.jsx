import { Box, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you?', sender: 'agent' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <Box sx={{ height: 400, display: 'flex', flexDirection: 'column' }}>
      <List sx={{ flexGrow: 1, overflow: 'auto' }}>
        {messages.map((msg) => (
          <ListItem key={msg.id}>
            <ListItemText 
              primary={msg.text} 
              sx={{ textAlign: msg.sender === 'agent' ? 'left' : 'right' }} 
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', p: 1 }}>
        <TextField
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSend} sx={{ ml: 1 }}>Send</Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;