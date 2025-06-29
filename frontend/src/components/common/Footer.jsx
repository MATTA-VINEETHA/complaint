import { Box, Typography } from '@mui/material';

const FooterC = () => {
  return (
    <Box component="footer" sx={{ py: 3, bgcolor: 'primary.main', color: 'white', mt: 'auto' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Complaint Management System
      </Typography>
    </Box>
  );
};

export default FooterC;