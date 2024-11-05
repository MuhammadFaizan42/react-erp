import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogContent, Box, Grid, TextField, Button, Stepper, Step, StepLabel, Typography
} from '@mui/material';

const EditDetail = ({ open, onClose, initialData, onSave }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Product Details', 'Pricing Information', 'Additional Info'];

  const [formData, setFormData] = useState(initialData || {});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData); // Set form data to initial data on load
    }
  }, [initialData]);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(formData); // Call onSave with updated data
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box p={2}>
            <Typography variant="h6">Product Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  value={formData.firstName || ''}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName || ''}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              {/* Add more fields as needed */}
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box p={2}>
            <Typography variant="h6">Pricing Information</Typography>
            <Grid container spacing={2}>
              {/* Add fields for Pricing Information */}
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box p={2}>
            <Typography variant="h6">Additional Info</Typography>
            <Grid container spacing={2}>
              {/* Add additional info fields if needed */}
            </Grid>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {renderStepContent(activeStep)}
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
            {activeStep === steps.length - 1 ? (
              <Button type="submit" variant="contained" color="primary">Save</Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
            )}
          </Box>
        </form>

        <Box mt={2}>
        <Button variant="outlined" color="secondary" onClick={onClose}>Cancel</Button>
      </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditDetail;
