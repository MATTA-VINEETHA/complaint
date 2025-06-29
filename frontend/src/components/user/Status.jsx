import { List, ListItem, ListItemText, Chip, Typography, Container } from '@mui/material';

const Status = () => {
  const complaints = [
    { id: 1, title: 'Broken AC', status: 'In Progress', date: '2023-05-15' },
    { id: 2, title: 'Leaking Pipe', status: 'Resolved', date: '2023-05-10' }
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>My Complaint Status</Typography>
      <List>
        {complaints.map((complaint) => (
          <ListItem key={complaint.id}>
            <ListItemText
              primary={complaint.title}
              secondary={`Submitted on ${complaint.date}`}
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
    </Container>
  );
};

export default Status;