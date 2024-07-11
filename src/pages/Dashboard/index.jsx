import React from 'react'
import DashboardBox from './components/dashboardBox';
import {FaUserCircle} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { Chart } from "react-google-charts";
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GridTable from './components/exchangeTable';




export const data = [
  ["Year", "Sales", "Expenses"],
  ["2013", 1000, 400],
  ["2014", 1170, 460],
  ["2015", 660, 1120],
  ["2016", 1030, 540],
];

export const options = {
  isStacked: true,
  'backgroundColor': 'transparent',
  height: 200,
  legend: { position: "top", maxLines: 3 },
  vAxis: { minValue: 0 },
};

const Dashboard = () => {
  return (
    <div className="right-content w-100" >
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
              <DashboardBox  color={["#1da256","#48d483"]} icon={<FaUserCircle/>} text={'Customer'}/>
              <DashboardBox  color={["#c012e2","#eb64fe"]}  icon={<IoCartOutline />}/>
              <DashboardBox  color={["#2c78e5","#60aff5"]}  icon={<LuShoppingBag />}/>
              <DashboardBox  color={["#e1950e","#f3cd29"]} icon={<IoCartOutline />}/>
          </div>
        </div>

          <div className="col-md-4 pl-0">
          <div className="box graphBox">
            <h4 className='text-white'>Total Sale</h4>
            <h3 className='text-white font-weight-bold'>$4455862</h3>
            <p>$30452157 Last Month</p>
            <Chart
              chartType="AreaChart"
              width="100%"
              height="100px"
              data={data}
              options={options}
            />
          </div>
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

export default Dashboard;