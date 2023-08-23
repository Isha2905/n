import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './AdminApprovalPage.css';

function AdminApprovalPage() {
  const [data, setData] = useState([]);
  const [approvedData, setApprovedData] = useState([]);
  const [rejectedData, setRejectedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('your-api-endpoint')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const approveData = (id) => {
    // Send a request to your API to approve the data item with the given ID
    // Update approvedData state accordingly
    // You might want to remove the item from 'data' state
  };

  const rejectData = (id) => {
    // Send a request to your API to reject the data item with the given ID
    // Update rejectedData state accordingly
    // You might want to remove the item from 'data' state
  };

  return (
    <Container maxWidth="md" className="admin-approval">
      <Typography variant="h4" gutterBottom>Data Approval Page</Typography>
      <div className="data-container">
        <Paper elevation={3} className="data-list">
          <Typography variant="h5">Data List</Typography>
          {data.map((item) => (
            <div key={item.id} className="data-item">
              <Typography variant="body1">{item.name}</Typography>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CheckCircleIcon />}
                onClick={() => approveData(item.id)}
              >
                Approve
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<CancelIcon />}
                onClick={() => rejectData(item.id)}
              >
                Reject
              </Button>
            </div>
          ))}
        </Paper>
        <Paper elevation={3} className="approved-list">
          <Typography variant="h5">Approved Data</Typography>
          {approvedData.map((item) => (
            <div key={item.id} className="data-item">
              <Typography variant="body1">{item.name}</Typography>
            </div>
          ))}
        </Paper>
        <Paper elevation={3} className="rejected-list">
          <Typography variant="h5">Rejected Data</Typography>
          {rejectedData.map((item) => (
            <div key={item.id} className="data-item">
              <Typography variant="body1">{item.name}</Typography>
            </div>
          ))}
        </Paper>
      </div>
    </Container>
  );
}

export default AdminApprovalPage;
