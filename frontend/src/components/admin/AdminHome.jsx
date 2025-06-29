import { useState, useEffect } from 'react';
import { Box, Typography, Button, Tabs, Tab } from '@mui/material';
import AccordionAdmin from './AccordionAdmin';
import AgentInfo from './AgentInfo';
import UserInfo from './UserInfo';
import { getComplaints, getAgents, getUsers } from '../../services/api';

const AdminHome = () => {
  const [tabValue, setTabValue] = useState(0);
  const [complaints, setComplaints] = useState([]);
  const [agents, setAgents] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const complaintsData = await getComplaints();
      const agentsData = await getAgents();
      const usersData = await getUsers();
      setComplaints(complaintsData.data);
      setAgents(agentsData.data);
      setUsers(usersData.data);
    };
    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Complaints" />
        <Tab label="Agents" />
        <Tab label="Users" />
      </Tabs>
      
      {tabValue === 0 && <AccordionAdmin complaints={complaints} />}
      {tabValue === 1 && <AgentInfo agents={agents} />}
      {tabValue === 2 && <UserInfo users={users} />}
    </Box>
  );
};

export default AdminHome;