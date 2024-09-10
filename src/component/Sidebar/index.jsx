import { Button } from '@mui/material'
import React, {useContext,useState } from 'react'
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
import {MyContext} from '../../App';



const Sidebar = () => {
    const [activeTab,setActiveTab]=useState(0);
    const [isToggleSubmenu,setIsToggleSubmenu]=useState(false);
    const context =useContext(MyContext);
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
                
                    <Button className={`w-100 ${activeTab===2 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>
                        <span className='icon'><MdAddchart /></span>
                        Chart Of Accounts
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===2 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Master Accounts</Link></li>
                                <li><Link to="#">Subsidiariy Accounts</Link></li>
                                <li><Link to="#">Control Accounts</Link></li>
                                <li><Link to="#">Detail Accounts</Link></li>
                            </ul>
                        </div>
                
            </li>
            <li>
                
                    <Button className={`w-100 ${activeTab===3 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>
                        <span className='icon'><MdOutlinePayments /></span>
                        Account Vouchers
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===3 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Journal Vouchers</Link></li>
                                <li><Link to="#">Bank Journal Vouchers</Link></li>
                                <li><Link to="#">Cash Payment Vouchers</Link></li>
                                <li><Link to="#">Bank Payment Vouchers</Link></li>
                                <li><Link to="#">Cash Receipt Vouchers</Link></li>
                                <li><Link to="#">Bank Receipt Vouchers</Link></li>
                                <li><Link to="#">Petty Cash Book</Link></li>
                            </ul>
                        </div>
            </li>
            <li>
               
                    <Button className={`w-100 ${activeTab===4 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>
                        <span className='icon'><GiHumanPyramid /></span>
                        Human Source
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===4 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Department</Link></li>
                                <li><Link to="#">Designation</Link></li>
                                <li><Link to="#">Sale Team</Link></li>
                            </ul>
                        </div>

            </li>
            <li>
                
                    <Button className={`w-100 ${activeTab===5 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>
                        <span className='icon'><MdOutlineInventory2 /></span>
                        Inventory
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===5 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Inventory Item</Link></li>
                                <li><Link to="#">Stock Transfer</Link></li>
                            </ul>
                        </div>
            </li>
            <li>
                
                        <Button className={`w-100 ${activeTab===6 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(6)}>
                            <span className='icon'><AttachMoneyOutlinedIcon/></span>
                            Sale Order
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuWrapper ${activeTab===6 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="#">Sale Order</Link></li>
                                <li><Link to="#">Delivery Order</Link></li>
                                <li><Link to="#">Sale Invoice</Link></li>
                                <li><Link to="#">Sale Tax Invoice</Link></li>
                                <li><Link to="#">Sale Return</Link></li>
                                <li><Link to="#">Raw Material Sale</Link></li>
                                <li><Link to="#">Sale Invoice Transfer</Link></li>
                            </ul>
                        </div>
            </li>
            <li>
                
                    <Button className={`w-100 ${activeTab===7 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(7)}>
                        <span className='icon'><TbReportSearch /></span>
                        Reports
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===7 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
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
                
                    <Button className={`w-100 ${activeTab===8 && isToggleSubmenu===true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(8)}>
                        <span className='icon'><IoSettingsOutline /></span>
                        Setting
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab===8 && isToggleSubmenu===true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/exchange">Exchange / Daily Rate</Link></li>
                                <li><Link to="#">User Creation </Link></li>
                                <li><Link to="/supplier">Supplier</Link></li>
                                <li><Link to="/customer">Customer</Link></li>
                                <li><Link to="#">Stock Location</Link></li>
                                <li><Link to="#">Product</Link></li>
                                <li><Link to="#">Bank</Link></li>
                                <li><Link to="#">Unit Of Measurement</Link></li>
                                <li><Link to="#">Carriage/Transportation</Link></li>
                                <li><Link to="#">Fiscal Year</Link></li>
                                <li><Link to="#">Petty Cash Rights</Link></li>
                                <li><Link to="#">Inovices Delation</Link></li>
                                <li><Link to="#"></Link></li>
                            </ul>
                        </div>        
            </li>
        </ul>
    </div>
  )
}

export default Sidebar