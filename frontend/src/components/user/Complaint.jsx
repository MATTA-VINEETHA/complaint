import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { createComplaint } from '../../services/api';

const Complaint = () => {
  const [complaint, setComplaint] = useState({
    title: '',
    description: '',
    category: 'General'
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComplaint(complaint);
      alert('Complaint submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('Failed to submit complaint. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>File a Complaint</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={complaint.title}
          onChange={(e) => setComplaint({...complaint, title: e.target.value})}
          required
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={complaint.description}
          onChange={(e) => setComplaint({...complaint, description: e.target.value})}
          required
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select
            value={complaint.category}
            label="Category"
            onChange={(e) => setComplaint({...complaint, category: e.target.value})}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Technical">Technical</MenuItem>
            <MenuItem value="Billing">Billing</MenuItem>
            <MenuItem value="Service">Service</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submit Complaint
        </Button>
      </form>
    </Container>
  );
};

export default Complaint;