import { Button } from '@mui/material'
import React, { useState } from 'react'
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
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const [activeTab,setActiveTab]=useState(0);
    const [isToggleSubmenu,setIsToggleSubmenu]=useState(false);
    const isOpenSubmenu=(index)=>{
        setActiveTab(index)
        setIsToggleSubmenu(!isToggleSubmenu)
    }
    return (
    <div className="sidebar">
        <ul>
            <li>
                <Link to="/">
                        <Button className={`w-100 ${activeTab===0 ? 'active' : ''}`}>
                            <span className='icon'><RxDashboard /></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                </Link>
            </li>
            <li>
                
                        <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(1)}>
                            <span className='icon'><BiPurchaseTagAlt /></span>
                            Purchase
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===1 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Purchase Order</Link></li>
                                <li><Link to="#">Goods Receiving Note</Link></li>
                                <li><Link to="#">Cash Purchase Invoice</Link></li>
                                <li><Link to="#">Purchase Invoice</Link></li>
                                <li><Link to="#">Purchase Return</Link></li>
                                <li><Link to="#">Store Issuance</Link></li>
                            </ul>
                        </div>
            </li>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===2 ? 'active' : ''}`}>
                        <span className='icon'><MdAddchart /></span>
                        Chart Of Accounts
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                </Link>   
            </li>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===3 ? 'active' : ''}`}>
                        <span className='icon'><MdOutlinePayments /></span>
                        Account Vouchers
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                </Link>
            </li>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===4 ? 'active' : ''}`}>
                        <span className='icon'><GiHumanPyramid /></span>
                        Human Source
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                </Link>   

            </li>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===5 ? 'active' : ''}`}>
                        <span className='icon'><MdOutlineInventory2 /></span>
                        Inventory
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                </Link> 
            </li>
            <li>
                <Link to="/">
                        <Button className={`w-100 ${activeTab===6 ? 'active' : ''}`}>
                            <span className='icon'><AttachMoneyOutlinedIcon/></span>
                            Sale Order
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                </Link>       
            </li>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===7 ? 'active' : ''}`}>
                        <span className='icon'><TbReportSearch /></span>
                        Reports
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                </Link>   
            </li>
            <li>
                <Link to="/">
                    <Button className={`w-100 ${activeTab===8 ? 'active' : ''}`}>
                        <span className='icon'><IoSettingsOutline /></span>
                        Setting
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                </Link>                
            </li>
        </ul>
    </div>
  )
}

export default Sidebar