import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AgentInfo = ({ agents }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Assigned Complaints</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {agents.map((agent) => (
            <TableRow key={agent._id}>
              <TableCell>{agent.name}</TableCell>
              <TableCell>{agent.email}</TableCell>
              <TableCell>{agent.assignedComplaints?.length || 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AgentInfo;