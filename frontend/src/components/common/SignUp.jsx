import { Link } from 'react-router-dom';
import { Button, Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Complaint Management System
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        How can we help you today?
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button 
          component={Link} 
          to="/complaint" 
          variant="contained" 
          size="large"
        >
          File a New Complaint
        </Button>
        <Button 
          component={Link} 
          to="/login" 
          variant="outlined" 
          size="large"
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;