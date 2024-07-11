import React from 'react'
//import DashboardBox from './components/dashboardBox';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import {FaUserCircle} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { Chart } from "react-google-charts";
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton,Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExchangeTable from '../Dashboard/components/exchangeTable';
import AddExchangeRate from './AddExchangeRate';

const ExchangeRate = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
    };
return (
    <div className="right-content w-100" >
        <div className="card shadow border-0 p-3 mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="hd">Exchange Rate</h3>
                    <Button className="btn-blue" onClick={toggleForm}>
                    {isFormOpen ? 'Close' : 'Add New'}
                    </Button>
                    {isFormOpen && <AddExchangeRate />}  
                        
            </div>
        </div>


        <div className='card shadow border-0 p-3 mt-4'>
                <h3 className='hd'>Daily Exchange Rate</h3>
            <div className='row cardFilter'>
                <div className="col justify-content-center">
                        <ExchangeTable />
                </div>
            </div>
        </div>
    </div>
    
)

}

export default ExchangeRate