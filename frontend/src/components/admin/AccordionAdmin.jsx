import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionAdmin = ({ complaints }) => {
  return (
    <div>
      {complaints.map((complaint) => (
        <Accordion key={complaint._id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{complaint.title} - {complaint.status}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography><strong>Description:</strong> {complaint.description}</Typography>
            <Typography><strong>Category:</strong> {complaint.category}</Typography>
            <Typography><strong>Submitted:</strong> {new Date(complaint.createdAt).toLocaleString()}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionAdmin;