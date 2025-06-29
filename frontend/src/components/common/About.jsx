import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>About Us</Typography>
      <Typography paragraph>
        Our complaint management system helps streamline the process of reporting
        and resolving issues efficiently.
      </Typography>
    </Container>
  );
};

export default About;