import React, { useEffect, useState } from 'react';
import { fetchComplaints } from './api';

function App() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints().then(data => setComplaints(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-primary mt-4">Welcome to the Complaint System</h1>
      <p>This is the homepage of your MERN stack project.</p>

      <h3 className="mt-5">Complaints List</h3>
      <ul className="list-group">
        {complaints.map((c, idx) => (
          <li key={idx} className="list-group-item">{c.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
