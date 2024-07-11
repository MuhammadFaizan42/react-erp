import React from 'react'
import { useState } from 'react';
import { IconButton} from '@mui/material';
import { TextField, Button, Box, Typography } from '@mui/material';

const AddExchangeRate = () => {

    const [formData, setFormData] = useState({
        date: '',
        currency: '',
        rate: '',
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
        
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
    <Typography variant="h6" gutterBottom>
        Daily Exchange Rate
    </Typography>
    <form onSubmit={handleSubmit}>
            <TextField
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            />
        <TextField
            label="Currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Rate"
            name="rate"
            value={formData.rate}
            onChange={handleChange}
            fullWidth
            margin="normal"
            type="number"
            inputProps={{ step: '1' }}
        />
        <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
        </Button>
        </Box>
    </form>
    </Box>
    
    );
}

export default AddExchangeRate