import React, { useState } from 'react';
import {
  Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem,
  Button, Stepper, Step, StepLabel, Typography, Dialog, DialogActions,
  DialogContent, DialogTitle
} from '@mui/material';

const AddProduct = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    category: '', subCategory: '', productId: '', minStockLevel: '', productDes: '',location:'',codeName:'',reproduce:'',
    openingDate:'',productAging:'',status:'',openingBalance:'',uom:'',productRate:'',openingPrice:'',retailerPrice:'',
    unitConversion:'',equalTo:'',productFormula:'',batchWeight:'',remarks:''

    // Add remaining form fields here
  });

  // Initial categories and subcategories
  const [categories, setCategories] = useState(["Category1", "Category2"]);
  const [subCategories, setSubCategories] = useState(["SubCategory1", "SubCategory2"]);

  // Dialog states for adding a new category or subcategory
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [isSubCategoryDialogOpen, setIsSubCategoryDialogOpen] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newSubCategory, setNewSubCategory] = useState('');

  const steps = ['Product Details', 'Pricing Information','Product Formula', 'Additional Info'];

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (activeStep === steps.length - 1) {
      console.log('Form Submitted:', formData);
    } else {
      handleNext();
    }
  };

  const handleAddCategory = () => {
    setCategories([...categories, newCategory]);
    setFormData({ ...formData, category: newCategory });
    setNewCategory('');
    setIsCategoryDialogOpen(false);
  };

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, newSubCategory]);
    setFormData({ ...formData, subCategory: newSubCategory });
    setNewSubCategory('');
    setIsSubCategoryDialogOpen(false);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box p={2} border={1} borderColor="grey.300">
            <Typography variant="h6">Product Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    displayEmpty
                  >
                    {categories.map((category, index) => (
                      <MenuItem key={index} value={category}>{category}</MenuItem>
                    ))}
                    <MenuItem onClick={() => setIsCategoryDialogOpen(true)}>+ Add New Category</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Sub Category</InputLabel>
                  <Select
                    name="subCategory"
                    value={formData.subCategory}
                    onChange={handleChange}
                    displayEmpty
                  >
                    {subCategories.map((subCategory, index) => (
                      <MenuItem key={index} value={subCategory}>{subCategory}</MenuItem>
                    ))}
                    <MenuItem onClick={() => setIsSubCategoryDialogOpen(true)}>+ Add New Sub Category</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="productId" label="Product ID" value={formData.productId} onChange={handleChange} fullWidth />
              </Grid>
              
              <Grid item xs={12} sm={6}>
              <TextField name="minStockLevel" label="Minimum Stock Level" value={formData.minStockLevel} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField name="productDes" label="Product Description" value={formData.productDes} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

            <Grid item xs={12} sm={6}>
              <TextField name="location" label="Location" value={formData.location} onChange={handleChange} fullWidth variant="outlined" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField name="codeName" label="Code Name" value={formData.codeName} onChange={handleChange} fullWidth variant="outlined" />
            </Grid>


            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box p={2} border={1} borderColor="grey.300">
            <Typography variant="h6">Pricing Information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField name="openingDate" label="Opening Date" type="date" InputLabelProps={{ shrink: true }} value={formData.openingDate} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField name="openingBalance" label="Opening Balance" value={formData.aging} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField name="productRate" label="Product Rate" value={formData.productRate} onChange={handleChange} fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="retailerPrice" label="Retailer Price" value={formData.retailerPrice} onChange={handleChange} fullWidth />
              </Grid>
              
              


            </Grid>
          </Box>
        );

        case 2:
          return (
            <Box p={2} border={1} borderColor="grey.300">
              <Typography variant="h6">Product Formula </Typography>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField name="productFormula" label="Product Formula" value={formData.productFormula} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField name="batchWeight" label="Batch Weight" value={formData.batchWeight} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>
              </Grid>
            </Box>
          );  
      case 3:
        return (
          <Box p={2} border={1} borderColor="grey.300">
            <Typography variant="h6">Additional Info</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField name="productAging" label="Product Aging" value={formData.productAging} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField name="status" label="Status" value={formData.status} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField name="uom" label="UOM" value={formData.uom} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField name="unitConversion" label="Unit Conversion" value={formData.unitConversion} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField name="equalTo" label="Equal To" value={formData.equalTo} onChange={handleChange} fullWidth variant="outlined" />
              </Grid>

              <Grid item xs={6}>
                <TextField name="remarks" label="Remarks" value={formData.remarks} onChange={handleChange} fullWidth />
              </Grid>
            </Grid>
          </Box>
        );
      default:
        return null;
    }
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
          {activeStep === steps.length - 1 ? (
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
          )}
        </Box>
      </form>

      <Box mt={2}>
        <Button variant="outlined" color="secondary" onClick={onClose}>Cancel</Button>
      </Box>

      {/* Dialog for Adding New Category */}
      <Dialog open={isCategoryDialogOpen} onClose={() => setIsCategoryDialogOpen(false)}>
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Category Name"
            type="text"
            fullWidth
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsCategoryDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddCategory} color="primary">Add</Button>
        </DialogActions>
      </Dialog>

      {/* Dialog for Adding New Sub Category */}
      <Dialog open={isSubCategoryDialogOpen} onClose={() => setIsSubCategoryDialogOpen(false)}>
        <DialogTitle>Add New Sub Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Sub Category Name"
            type="text"
            fullWidth
            value={newSubCategory}
            onChange={(e) => setNewSubCategory(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsSubCategoryDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddSubCategory} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddProduct;
