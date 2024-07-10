import React, { useContext,useEffect } from 'react'
import Logo from '../../assets/images/BlueLogo.png'
import { MyContext } from '../../App'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button } from '@mui/material';
const Login = () => {

    const context=useContext(MyContext);
    useEffect(()=>{
            context.setIsHideSidebarAndHeader(true);
    },[]);  
    return ( 
        <section className='loginSection'>
            <div className='loginBox'>
                <div className='logo text-center'>
                    <img src={Logo}  width="200px"/>
                    <h5 className='font-weight-bold'> Login ERP</h5>
                </div>
                <div className='wrapper mt-3 card border p-3'>
                <form>
                    <div className="form-group mb-3 mt-4 position-relative">
                        <span className='icon'> <MdOutlineMailOutline/> </span>
                        <input type='text' className='form-control' placeholder='Enter your Email'/>
                    </div>

                    <div className="form-group mb-3 mt-3 position-relative">
                        <span className='icon'> <RiLockPasswordFill /> </span>
                        <input type='password' className='form-control' placeholder='Enter your Password'/>
                    </div>
                    <div className='form-group mt-3'>
                        <Button className='btn-blue btn-lg w-100'>Sign In</Button>
                    </div>
                    <div className="link mt-3 text-center">
                        <span className=''>Forget Password</span>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}

export default Login