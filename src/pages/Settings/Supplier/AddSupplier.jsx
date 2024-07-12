import React from 'react'
import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddSupplier = ({onClose}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic (e.g., send data to server or update state)
        console.log('Form Data:', formData);
    };

    
return (
    <Box sx={{ maxWidth: 700, mx: 'auto', mt: 4, mr:4}}>
    <Typography variant="h6" gutterBottom>
        Supplier Form
    </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            label="Supplier Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
        />
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
        <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
        />
        <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
        />
        <TextField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
        />
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