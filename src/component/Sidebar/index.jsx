import { Button } from '@mui/material'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaAngleRight } from "react-icons/fa6";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { MdAddchart } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";
import { MdOutlineInventory2 } from "react-icons/md";
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
<IoSettingsOutline />







const Sidebar = () => {
  return (
    <div className="sidebar">
        <ul>
            <li>
                <Button className='w-100'>
                    <span className='icon'><RxDashboard /></span>
                    Dashboard
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><BiPurchaseTagAlt /></span>
                    Purchase
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><MdAddchart /></span>
                    Chart Of Accounts
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><MdOutlinePayments /></span>
                    Account Vouchers
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><GiHumanPyramid /></span>
                    Human Source
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><MdOutlineInventory2 /></span>
                    Inventory
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><AttachMoneyOutlinedIcon/></span>
                    Sale Order
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><TbReportSearch /></span>
                    Reports
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
            <li>
                <Button className='w-100'>
                    <span className='icon'><IoSettingsOutline /></span>
                    Setting
                    <span className='arrow'><FaAngleRight /></span>
                </Button>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar