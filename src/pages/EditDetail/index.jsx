import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Grid } from '@mui/material';


const EditDetail = ({ open, onClose, rowData }) => {
  const [formData, setFormData] = useState({ ...rowData });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Add the logic to save the changes here
    console.log('Updated data:', formData);
    onClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xl" >
      <DialogTitle sx={{ padding: '8px', fontSize: '18px' }}>Edit Details</DialogTitle>
      <DialogContent >
        <form noValidate autoComplete="off" className="form-with-margin">
          <Grid container spacing={2}>
            {/* First row with 4 fields */}
            <Grid item xs={3}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Age"
                name="age"
                fullWidth
                value={formData.age || ''}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Country"
                name="Country"
                fullWidth
                value={formData.Country}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Second row with 4 fields */}
            <Grid item xs={3}>
              <TextField
                label="Gender"
                name="Gender"
                fullWidth
                value={formData.Gender}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            {/* You can add more fields here if required */}
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDetail;
