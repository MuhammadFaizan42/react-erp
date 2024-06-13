//import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Home';
import Header from './component';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" exact={true} element={<Dashboard/>} />
        <Route path="/dashboard" exact={true} element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
