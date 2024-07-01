import React from 'react'
import DashboardBox from './components/dashboardBox';
import {FaUserCircle} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="right-content w-100" >
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
              <DashboardBox  color={["#1da256","#48d483"]} icon={<FaUserCircle/>}/>
              <DashboardBox  color={["#c012e2","#eb64fe"]}  icon={<IoCartOutline />}/>
              <DashboardBox  color={["#2c78e5","#60aff5"]}  icon={<LuShoppingBag />}/>
              <DashboardBox  color={["#e1950e","#f3cd29"]} icon={<IoCartOutline />}/>
          </div>
        </div>

          <div className="col-md-4 pl-0">
          <div className="box">
            
          </div>
      </div>

      </div>
    </div>
    
  )
}

export default Dashboard;