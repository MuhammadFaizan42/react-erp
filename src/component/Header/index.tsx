import React,{useContext, useState} from 'react'
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
import AvatarImg from '../../assets/images/Avatar.png'
import {MyContext} from '../../App';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';





const Header = () => {

    const [anchorEl,setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const context =useContext(MyContext);
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleOpenMyAccDr = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMyAccDrClose = () => {
      setAnchorEl(null);
    };


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
                    <Button className='rounded-circle mr-3' onClick={()=>context.setIsToggleSidebar(!context.isToggleSidebar)}>
                    {
                      context.isToggleSidebar===false?<MdMenuOpen/>:
                      <MdOutlineMenu/>

                    }
                    
                    </Button>
                    <SearchBox/>  
                </div>
                <div className='col-sm-7 d-flex align-items-center justify-content-end part3 pl-4'>
                <Button className='rounded-circle mr-3 ms-2'><CiLight /></Button>
                <Button className='rounded-circle mr-3 ms-2'><MdDarkMode /></Button>
                <Button className='rounded-circle mr-3 ms-2'><IoMdCart />
                  
                </Button>
                <Button className='rounded-circle mr-3 ms-2'><MdOutlineEmail /></Button>
                <Button className='rounded-circle mr-3 ms-2'><FaRegBell /></Button>
                <Button className="myAcc d-flex align-items-center ms-2" onClick={handleOpenMyAccDr}>
                      <div className="userImg">
                        <span className='rounded-circle'>
                          <img src={AvatarImg} />
                        </span>
                      </div>
                        <div className="userInfo">
                          <h6>Admin</h6>
                          <p className="mb-0">@Faizan</p>
                        </div>

                      <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleMyAccDrClose}
                        onClick={handleMyAccDrClose}
                        PaperProps={{
                          elevation: 0,
                          sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            '&::before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                            },
                          },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <Divider />
                        <MenuItem onClick={handleMyAccDrClose}>
                          <ListItemIcon>
                            <PersonAdd fontSize="small" />
                          </ListItemIcon>
                          My account
                        </MenuItem>
                        <MenuItem onClick={handleMyAccDrClose}>
                          <ListItemIcon>
                            <Settings fontSize="small" />
                          </ListItemIcon>
                          Reset Password
                        </MenuItem>
                        <MenuItem onClick={handleMyAccDrClose}>
                          <ListItemIcon>
                            <Logout fontSize="small" />
                          </ListItemIcon>
                          Logout
                        </MenuItem>
                    </Menu>
                </Button>
                </div>
              </div>
            </div>
    </header>
  )
}

export default Header