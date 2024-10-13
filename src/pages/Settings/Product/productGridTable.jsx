import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewDetail from '../../ViewDetail/index'; // Import the ViewDetail component
import EditDetail from '../../EditDetail/index';

const GridTable = () => {
  const [open, setOpen] = useState(false); // To control dialog visibility
  const [openEdit, setOpenEdit] = useState(false); // State for edit dialog
  const [selectedRow, setSelectedRow] = useState(null); // To store the selected row's data

  // Function to handle the view action
  const handleView = (id) => {
    const selectedRowData = rows.find((row) => row.id === id); // Find the selected row by ID
    setSelectedRow(selectedRowData); // Set the selected row data
    setOpen(true); // Open the dialog
  };

   // Handle edit button click
  const handleEdit = (id) => {
    const selectedRowData = rows.find((row) => row.id === id);
    setSelectedRow(selectedRowData);
    setOpenEdit(true);
  };


  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
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
          <IconButton onClick={() => handleView(params.row.id)} color="primary" aria-label="view">
            <VisibilityIcon />
          </IconButton>
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

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, Country: 'Pakistan', Gender: 'Male' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, Country: 'Pakistan', Gender: 'Male' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, Country: 'Pakistan', Gender: 'Male' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, Country: 'Pakistan', Gender: 'Male' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, Country: 'Pakistan', Gender: 'Male' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, Country: 'Pakistan', Gender: 'Male' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, Country: 'Pakistan', Gender: 'Male' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, Country: 'Pakistan', Gender: 'Male' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, Country: 'Pakistan', Gender: 'Male' },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

      {/* Render the ViewDetail dialog when open is true */}
      {open && selectedRow && (
        <ViewDetail
          open={open}
          onClose={handleClose}
          rowData={selectedRow} // Pass the selected row data as a prop
        />
      )}

      {/* Render the EditDetail dialog when openEdit is true */}
      {openEdit && selectedRow && (
        <EditDetail
          open={openEdit}
          onClose={handleCloseEdit}
          rowData={selectedRow} // Pass the selected row data as a prop
        />
      )}
      
    </div>
  );
};

export default GridTable;
