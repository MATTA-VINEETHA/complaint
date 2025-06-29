import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { login } from '../../services/api';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      
      // Redirect based on role
      switch(response.data.role) {
        case 'admin':
          navigate('/admin');
          break;
        case 'agent':
          navigate('/agent');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={credentials.email}
          onChange={(e) => setCredentials({...credentials, email: e.target.value})}
          required
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={credentials.password}
          onChange={(e) => setCredentials({...credentials, password: e.target.value})}
          required
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;