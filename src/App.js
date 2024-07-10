//import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard/index.jsx';
import Header from './component/Header/index.tsx';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './component/Sidebar/index.jsx';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login/index.jsx';
import ExchangeRate from './pages/Settings/ExchangeRate.jsx';


const MyContext=createContext();
function App() {

  const [isToggleSidebar,setIsToggleSidebar]=useState(false)
  const [isLogin,setIsLogin]=useState(false)
  const [isHideSidebarAndHeader,setIsHideSidebarAndHeader]=useState(false)
  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader
    
  }
  
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
      {
        isHideSidebarAndHeader !==true &&
        <Header/>
      }
   
    <div className='main d-flex'>
      {
        isHideSidebarAndHeader !==true &&
        <div className={`sidebarWrapper ${isToggleSidebar===true?'toggle' : ''}`}>
        <Sidebar/>
        </div>
      }
        
          <div className= {`content ${isHideSidebarAndHeader===true && 'full'} ${isToggleSidebar===true?'toggle' : ''}`}>
                <Routes>
                    <Route path="/" exact={true} element={<Dashboard/>} />
                    <Route path="/dashboard" exact={true} element={<Dashboard/>} />
                    <Route path="/login" exact={true} element={<Login/>} />
                    <Route path="/exchange" exact={true} element={<ExchangeRate/>} />
                </Routes>
          </div>
    </div>

    </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
