import React, { useState } from 'react';
import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Stepper, Step, StepLabel, Typography, Dialog } from '@mui/material';

// Sample categories and subcategories (you can replace these with database data)
const initialCategories = ['Category1', 'Category2'];
const initialSubCategories = { Category1: ['SubCategory1', 'SubCategory2'], Category2: ['SubCategory3'] };

const AddSupplierStepper = ({ onClose }) => {
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

  const [categories, setCategories] = useState(initialCategories);
  const [subCategories, setSubCategories] = useState(initialSubCategories);
  const [activeStep, setActiveStep] = useState(0);
  const [newCategory, setNewCategory] = useState('');
  const [newSubCategory, setNewSubCategory] = useState('');

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmit(); // Submit the form on the last step
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };
  const handleBack = () => setActiveStep(prevStep => prevStep - 1);

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Add new category
  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setSubCategories({ ...subCategories, [newCategory]: [] });
      setNewCategory('');
    }
  };

  // Add new subcategory
  const addSubCategory = () => {
    if (newSubCategory && formData.category) {
      const updatedSubCategories = { ...subCategories };
      if (!updatedSubCategories[formData.category]) {
        updatedSubCategories[formData.category] = [];
      }
      if (!updatedSubCategories[formData.category].includes(newSubCategory)) {
        updatedSubCategories[formData.category].push(newSubCategory);
        setSubCategories(updatedSubCategories);
      }
      setNewSubCategory('');
    }
  };

  // Form steps
  const steps = ['Supplier Account', 'Supplier Detail', 'Additional Information'];

  // Render step content
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box p={2}>
            <Typography variant="subtitle1" gutterBottom>Supplier Account</Typography>
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
        );
      case 1:
        return (
          <Box p={2}>
            <Typography variant="subtitle1" gutterBottom>Supplier Detail</Typography>
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
                    {categories.map(cat => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                  </Select>
                  <TextField
                    placeholder="Add New Category"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onBlur={addCategory}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth>
                  <InputLabel>Sub Category</InputLabel>
                  <Select name="subCategory" value={formData.subCategory} onChange={handleChange}>
                    {(subCategories[formData.category] || []).map(sub => (
                      <MenuItem key={sub} value={sub}>{sub}</MenuItem>
                    ))}
                  </Select>
                  <TextField
                    placeholder="Add New Subcategory"
                    value={newSubCategory}
                    onChange={(e) => setNewSubCategory(e.target.value)}
                    onBlur={addSubCategory}
                  />
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
                <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box p={2}>
            <Typography variant="subtitle1" gutterBottom>Additional Information</Typography>
            <Grid container spacing={2}>
              
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
        );
      default:
        return null;
    }
  };
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log('Form Data Submitted:', formData);
    // Call onClose here after submission
    onClose();
  };

  return (
    <Box>
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Box>
      </form>
      <Box mt={2}>
        <Button variant="outlined" color="secondary" onClick={onClose}>Cancel</Button>
      </Box>
    </Box>
  );
};

export default AddSupplierStepper;

