import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import { MdMenuOpen } from "react-icons/md";

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

                <div className='col-sm-2 d-flex align-items-center part2 pl-4'>
                    <Button className='rounded-circle'><MdMenuOpen/></Button>  
                </div>
              </div>
            </div>
    </header>
  )
}

export default Header