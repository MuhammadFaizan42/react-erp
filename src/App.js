//import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard/index.jsx';
import Header from './component/Header/index.tsx';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './component/Sidebar/index.jsx';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='main d-flex'>
            <div className='sidebarWrapper'>
              <Sidebar/>
            </div>
          <div className='content'>
                <Routes>
                    <Route path="/" exact={true} element={<Dashboard/>} />
                    <Route path="/dashboard" exact={true} element={<Dashboard/>} />
                </Routes>
          </div>
    </div>

     
    </BrowserRouter>
  );
}

export default App;
