import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const ViewDetail = ({ open, onClose, rowData }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>View Details</DialogTitle>
      <DialogContent>
        <form noValidate autoComplete="off">
          <TextField
            margin="dense"
            label="ID"
            fullWidth
            value={rowData.id}
            InputProps={{
              readOnly: true, // Make the field read-only
            }}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="First Name"
            fullWidth
            value={rowData.firstName}
            InputProps={{
              readOnly: true, // You can remove this to make it editable
            }}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            value={rowData.lastName}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Age"
            fullWidth
            value={rowData.age || ''}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Country"
            fullWidth
            value={rowData.Country}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
          <TextField
            margin="dense"
            label="Gender"
            fullWidth
            value={rowData.Gender}
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewDetail;
