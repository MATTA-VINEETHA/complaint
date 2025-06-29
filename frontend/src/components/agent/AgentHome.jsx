import { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Chip } from '@mui/material';
import { getAssignedComplaints } from '../../services/api';

const AgentHome = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      const response = await getAssignedComplaints();
      setComplaints(response.data);
    };
    fetchComplaints();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Agent Dashboard</Typography>
      
      <List>
        {complaints.map((complaint) => (
          <ListItem key={complaint._id}>
            <ListItemText
              primary={complaint.title}
              secondary={complaint.description}
            />
            <Chip 
              label={complaint.status} 
              color={
                complaint.status === 'Resolved' ? 'success' : 
                complaint.status === 'In Progress' ? 'warning' : 'default'
              } 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AgentHome;