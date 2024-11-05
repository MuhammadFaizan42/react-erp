import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditDetail from '../../EditDetail'; // Import the Stepper form component for editing

const GridTable = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (id) => {
    const selectedRowData = rows.find((row) => row.id === id); // Find selected row data by ID
    setSelectedRow(selectedRowData); // Store selected row data in state
    setOpenEdit(true); // Open Stepper form in edit mode
  };

  const handleCloseEdit = () => {
    setOpenEdit(false); // Close dialog
    setSelectedRow(null); // Reset selected row data
  };

  const handleSaveEdit = (updatedData) => {
    const updatedRows = rows.map((row) =>
      row.id === updatedData.id ? updatedData : row
    );
    setRows(updatedRows); // Update rows with the edited data
    handleCloseEdit(); // Close dialog after saving
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'Country', headerName: 'Country', width: 130 },
    { field: 'Gender', headerName: 'Gender', width: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => handleEdit(params.row.id)} color="primary" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const [rows, setRows] = useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Country: 'Pakistan', Gender: 'Male' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Country: 'Pakistan', Gender: 'Female' },
    { id: 3, lastName: 'Stark', firstName: 'Arya', age: 16, Country: 'Pakistan', Gender: 'Female' },
    // Add more rows here
  ]);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSizeOptions={[5, 10]} checkboxSelection />

      {/* Render the EditDetail dialog when openEdit is true */}
      {openEdit && selectedRow && (
        <EditDetail
          open={openEdit}
          onClose={handleCloseEdit}
          initialData={selectedRow} // Pass selected row data as initialData prop
          onSave={handleSaveEdit} // Function to save the edited data
        />
      )}
    </div>
  );
};

export default GridTable;

