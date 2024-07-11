import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',headerName: 'Age',type: 'number', width: 90,},
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    { field: 'Country', headerName: 'Country', width: 130 },
    {field: 'Gender', headerName: 'Gender', width: 130 },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
            <div>
                <IconButton
                    onClick={() => handleView(params.row.id)}
                    color="primary"
                    aria-label="view"
                >
                <VisibilityIcon />
                </IconButton>
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
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,Country:'Pakistan',Gender:'Male' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,Country:'Pakistan',Gender:'Male' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,Country:'Pakistan',Gender:'Male' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,Country:'Pakistan',Gender:'Male' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,Country:'Pakistan',Gender:'Male' },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150,Country:'Pakistan',Gender:'Male' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,Country:'Pakistan',Gender:'Male' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,Country:'Pakistan',Gender:'Male' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,Country:'Pakistan',Gender:'Male' },
  ];

const GridTable = () => {
  return (
    <div style={{ height: 600, width: '100%' }}>
            <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize:10},
                },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            />
        </div>
    )
}

export default GridTable;