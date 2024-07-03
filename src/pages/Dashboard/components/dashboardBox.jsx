import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';



const DashboardBox = (props) => {
  return (
    
              <div className="dashboardBox" style={{backgroundImage:`linear-gradient(to right,${props.color?.[0]},${props.color?.[1]})`}}>
                <div className="d-flex w-100">
                  <div className="col1">
                    <h4 className="text-white mb-0">{props.text}</h4>
                    <span className="text-white">277</span>
                  </div>

                  <div className="mx-auto m-icon">
                    {
                      props.icon ? 
                      <span className="icon">
                        {props.icon ? props.icon : ''}
                      </span>
                      :
                      ''
                    }
                    
                  </div>

                </div>

                <div className="d-flex align-items-center">
                  <h6 className='text-white mb-0 mt-0'>Last Month</h6>
                  <Button className='m-auto toggleIcon'><HiDotsVertical /></Button>
                </div>
              </div> 
  )
}

export default DashboardBox;