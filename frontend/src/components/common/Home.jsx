import { Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Our Platform
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Manage and resolve complaints efficiently
      </Typography>
      <Button 
        component={Link} 
        to="/login" 
        variant="contained" 
        size="large"
      >
        Get Started
      </Button>
    </Container>
  );
};

export default Home;