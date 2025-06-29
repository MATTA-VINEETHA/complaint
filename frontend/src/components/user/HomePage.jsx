import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom>
        Welcome to Complaint System
      </Typography>
      <Button 
        component={Link} 
        to="/complaint" 
        variant="contained" 
        color="primary"
      >
        File a Complaint
      </Button>
    </Container>
  );
};

export default HomePage;