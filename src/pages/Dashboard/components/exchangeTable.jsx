import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Date', headerName: 'Date', width: 130 },
    { field: 'Currency', headerName: 'Currency', width: 130 },
    {
      field: 'Rate',headerName: 'Rate',type: 'number', width: 90,},
    { field: 'Country', headerName: 'Country', width: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
            <div>
                <IconButton
                onClick={() => handleEdit(params.row.id)}
                color="primary"
                aria-label="edit"
                >
                <EditIcon />
                </IconButton>
                <IconButton
                onClick={() => handleDelete(params.row.id)}
                color="secondary"
                aria-label="delete"
                >
                <DeleteIcon />
                </IconButton>
                </div>
            ),
        }
    ];
  
    const handleView = (id) => {
    // View action logic
    console.log(`View ${id}`);
  };
  
  const handleEdit = (id) => {
    // Edit action logic
    console.log(`Edit ${id}`);
  };
  
  const handleDelete = (id) => {
    // Delete action logic
    console.log(`Delete ${id}`);
  };
  
  
  const rows = [
    { id: 1, Date:'11/07/24', Currency:'PKR', Rate:100,Country:'Pakistan'},
    { id: 2, Date:'11/07/24', Currency:'PKR', Rate:100,Country:'Pakistan'},
    { id: 3, Date:'11/07/24', Currency:'PKR', Rate:100,Country:'Pakistan'},
    { id: 4, Date:'11/07/24', Currency:'PKR', Rate:100,Country:'Pakistan'},
    { id: 5, Date:'11/07/24', Currency:'PKR', Rate:100,Country:'Pakistan'},
  ];

const GridTable = () => {
  return (
    <div style={{ height: 600, width: '70%'}}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize:10},
                },
            }}
            pageSizeOptions={[5, 10,20,50,100]}
            checkboxSelection
            />
        </div>
    )
}

export default GridTable;