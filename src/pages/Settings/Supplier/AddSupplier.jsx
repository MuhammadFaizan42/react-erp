import React from 'react'
import { useState } from 'react';
import { TextField, Button, Box, Typography,Grid } from '@mui/material';

const AddSupplier = ({onClose}) => {
    const [formData, setFormData] = useState({
        // Initialize all fields (8 + 16 = 24 fields)
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        postalCode: '',
        state: '',
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
        field11: '',
        field12: '',
        field13: '',
        field14: '',
        field15: '',
        field16: '',
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
        console.log('Form Data:', formData);
    };
    

    
return (

    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2, border: '0px solid #ccc', borderRadius: '8px' }}>
        <Typography variant="h6" gutterBottom>
        Supplier Form
        </Typography>
        <form onSubmit={handleSubmit}>
        {/* First Box: 8 input fields in 2 columns */}
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="subtitle1" gutterBottom>
            Supplier Account
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                label="Supplier Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="email"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="tel"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            </Grid>
        </Box>
        {/* Second Box: 16 input fields in 2 columns */}
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
            <Typography variant="subtitle1" gutterBottom>
                Supplier Detail
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <TextField
                label="Supplier Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
            />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="email"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                margin="normal"
                type="tel"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                />
            </Grid>
            </Grid>
        </Box>
    
        <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
            </Button>
            <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={onClose} fullWidth>
            Cancel
            </Button>
            
        </Box>
    </form>
    </Box>
)
}

export default AddSupplier