import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/Logo.png'
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";
import SearchBox from '../SearchBox/index'
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import Avatar from '../../assets/images/Avatar.png'





const Header = () => {
  return (
    <header className='d-flex align-items-center'>
        <div className='container-fluid w-100'>
            <div className='row d-flex align-items-center w-100'>
                {/*Logo Wrapper */}
                <div className='col-sm-2 part1'>
                  <Link to={'/'} className='d-flex align-item-center logo'>
                    <img src={Logo} alt='ST'/>
                      <span className='ml-2'>
                        Sirius Tech
                      </span>
                  </Link>
                </div>

                <div className='col-sm-3 d-flex align-items-center part2 pl-4'>
                    <Button className='rounded-circle mr-3'><MdMenuOpen/></Button>
                    <SearchBox/>  
                </div>
                <div className='col-sm-7 d-flex align-items-center justify-content-end part3 pl-4'>
                <Button className='rounded-circle mr-3 ms-2'><CiLight /></Button>
                <Button className='rounded-circle mr-3 ms-2'><MdDarkMode /></Button>
                <Button className='rounded-circle mr-3 ms-2'><IoMdCart /></Button>
                <Button className='rounded-circle mr-3 ms-2'><MdOutlineEmail /></Button>
                <Button className='rounded-circle mr-3 ms-2'><FaRegBell /></Button>
                <div className="myAcc d-flex align-items-center ms-2">
                      <div className="userImg">
                        <span className='rounded-circle'>
                          <img src={Avatar} />
                        </span>
                      </div>
                </div>
                </div>
              </div>
            </div>
    </header>
  )
}

export default Header