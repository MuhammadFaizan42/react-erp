import React, { useState } from 'react';
import { Box, Grid, TextField, FormControl, InputLabel, Select,Typography, MenuItem, Button } from '@mui/material';

const AddCustomer= ({onClose}) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    nature: '',
    companyName: '',
    accountCode: '',
    supplierId: '',
    shortCode: '',
    active: '',
    fourthLevelAccount: '',
    fifthLevelAccount: '',
    accountTitle: '',
    contactPerson: '',
    careOff: '',
    category: '',
    subCategory: '',
    cityName: '',
    fax: '',
    mailId: '',
    factoryNumber: '',
    ntn: '',
    contactNumber: '',
    openingDate: '',
    officeNumber: '',
    creditLimit: '',
    aging: '',
    address: '',
    remarks: '',
    credential: '',
    openingBalance: ''
  });

  // Handler for form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  // Handler for cancel button
  const handleCancel = () => {
    // Implement your cancel logic here (e.g., reset form or close form)
    setFormData({
      nature: '',
      companyName: '',
      accountCode: '',
      supplierId: '',
      shortCode: '',
      active: '',
      fourthLevelAccount: '',
      fifthLevelAccount: '',
      accountTitle: '',
      contactPerson: '',
      careOff: '',
      category: '',
      subCategory: '',
      cityName: '',
      fax: '',
      mailId: '',
      factoryNumber: '',
      ntn: '',
      contactNumber: '',
      openingDate: '',
      officeNumber: '',
      creditLimit: '',
      aging: '',
      address: '',
      remarks: '',
      credential: '',
      openingBalance: ''
    });
    console.log('Form has been cancelled.');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Supplier Account Section */}
      <Box mb={4} p={2} border={1} borderColor="grey.300">
      <Typography variant="subtitle1" gutterBottom>
            Customer Account
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Nature</InputLabel>
              <Select name="nature" value={formData.nature} onChange={handleChange}>
                <MenuItem value="Nature1">Nature1</MenuItem>
                <MenuItem value="Nature2">Nature2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Company Name</InputLabel>
              <Select name="companyName" value={formData.companyName} onChange={handleChange}>
                <MenuItem value="Company1">Company1</MenuItem>
                <MenuItem value="Company2">Company2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="accountCode" label="Account Code" value={formData.accountCode} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="supplierId" label="Supplier ID" value={formData.supplierId} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="shortCode" label="Short Code" value={formData.shortCode} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Active</InputLabel>
              <Select name="active" value={formData.active} onChange={handleChange}>
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="fourthLevelAccount" label="4th Level Account" value={formData.fourthLevelAccount} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="fifthLevelAccount" label="5th Level Account" value={formData.fifthLevelAccount} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>
        </Grid>
      </Box>

      {/* Supplier Detail Section */}
      <Box p={2} border={1} borderColor="grey.300">
        <h2>Customer Detail</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField name="accountTitle" label="Account Title" value={formData.accountTitle} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="contactPerson" label="Contact Person" value={formData.contactPerson} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="careOff" label="Care Off" value={formData.careOff} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select name="category" value={formData.category} onChange={handleChange}>
                <MenuItem value="Category1">Category1</MenuItem>
                <MenuItem value="Category2">Category2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Sub Category</InputLabel>
              <Select name="subCategory" value={formData.subCategory} onChange={handleChange}>
                <MenuItem value="SubCategory1">SubCategory1</MenuItem>
                <MenuItem value="SubCategory2">SubCategory2</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="cityName" label="City Name" value={formData.cityName} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="fax" label="Fax" value={formData.fax} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="mailId" label="Mail ID" value={formData.mailId} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="factoryNumber" label="Factory Number" value={formData.factoryNumber} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="ntn" label="NTN" value={formData.ntn} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="contactNumber" label="Contact Number" value={formData.contactNumber} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="openingDate" label="Opening Date" type="date" InputLabelProps={{ shrink: true }} value={formData.openingDate} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="officeNumber" label="Office Number" value={formData.officeNumber} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="creditLimit" label="Credit Limit" value={formData.creditLimit} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="aging" label="Aging" value={formData.aging} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="remarks" label="Remarks" value={formData.remarks} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="credential" label="Credential" value={formData.credential} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="openingBalance" label="Opening Balance" value={formData.openingBalance} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>
        </Grid>
      </Box>

      {/* Submit and Cancel Buttons */}
      <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button type="button" variant="outlined" color="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </form>
  );
};

export default AddCustomer;
