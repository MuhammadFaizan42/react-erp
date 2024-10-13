import React, { useState } from 'react';
import { Box, Grid, TextField, FormControl, InputLabel, Select,Typography, MenuItem, Button } from '@mui/material';

const AddProduct= ({onClose}) => {
  // State to manage form data
  const [formData, setFormData] = useState({

    category: '',
    subCategory: '',
    productId: '',
    minStockLevel: '',
    productDes: '',
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
      category: '',
      subCategory: '',
      productId:'',
      minStockLevel:'',
      productDes: '',
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
      
      {/* Supplier Detail Section */}
      <Box p={2} border={1} borderColor="grey.300">
        <h2>Product Detail</h2>
        <Grid container spacing={2}>
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
            <TextField name="productId" label="Product ID " value={formData.roductId} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="minStockLevel" label="Minimum Stock Level" value={formData.minStockLevel} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="productDes" label="Product Description" value={formData.productDes} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="location" label="Location" value={formData.location} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="codeName" label="Code Name" value={formData.codeName} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="reproduce" label="Reproduce Qty" value={formData.reproduce} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="openingDate" label="Opening Date" type="date" InputLabelProps={{ shrink: true }} value={formData.openingDate} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="productAging" label="Product Aging" value={formData.productAging} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="status" label="Status" value={formData.status} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="openingBalance" label="Opening Balance" value={formData.aging} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="uom" label="UOM" value={formData.uom} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="productRate" label="Product Rate" value={formData.productRate} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="openingPrice" label="Opening Price" value={formData.openingPrice} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="unitConversion" label="Unit Conversion" value={formData.unitConversion} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="equalTo" label="Equal To" value={formData.equalTo} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="equalTo" label="Equal To" value={formData.equalTo} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="productFormula" label="Product Formula" value={formData.productFormula} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField name="batchWeight" label="Batch Weight" value={formData.batchWeight} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField name="remarks" label="Remarks" value={formData.remarks} onChange={handleChange} fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField name="retailerPrice" label="Retailer Price" value={formData.retailerPrice} onChange={handleChange} fullWidth variant="outlined" />
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

export default AddProduct;
