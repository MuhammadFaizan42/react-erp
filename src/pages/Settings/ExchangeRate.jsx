import React from 'react'
//import DashboardBox from './components/dashboardBox';
import {FaUserCircle} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { Chart } from "react-google-charts";
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridTable from '../Dashboard/components/gridTable';

const ExchangeRate = () => {
return (
    <div className="right-content w-100" >
        <div className="card shadow border-0 p-3 mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="hd">Exchange Rate</h3>
                    <Button className="btn-blue">Add New</Button>
            </div>
        </div>


        <div className='card shadow border-0 p-3 mt-4'>
                <h3 className='hd'>Best Selling Products</h3>
            <div className='row cardFilter'>
                <div className="col">
                    <h4>Show By</h4>
                        <GridTable />
                </div>
            </div>
        </div>
    </div>
    
  )

}

export default ExchangeRate