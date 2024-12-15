import logo from './logo.png';
import './App.css';
import react, {Component} from 'react';
import MenuRecord from './Component/Menu';
import DriverData from './Component/DriverTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverSearch from './Component/DriverSearch';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Menu/Home";
import Drivers from "./Menu/Drivers";
import Vehicles from "./Menu/Vehicles";
import About from "./Menu/About";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>     
        <div className ="container-fluid">
          <div className="row">
          <div className="col-2">
          {/* Commenting navigation menu */}
        {/* <nav className='navbar navbar-inverse navbar-fixed-left'> */}        
        {/* <MenuRecord />  */}
        {/* </nav> */}
        <Router>
      <div>
        {/* Navigation Menu */}
        <nav className='navbar navbar-inverse navbar-fixed-left'>
          <div class="vertical-menu">
            <strong><Link to="/">Home</Link></strong>
            <strong><Link to="/Drivers">Drivers</Link></strong>
            <strong><Link to="/Vehicles">Vehicles</Link></strong>
            <strong><Link to="/About">About</Link></strong>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Drivers" element={<Drivers/>} />
          <Route path="/Vehicles" element={<Vehicles/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
      </div>
    </Router>

        </div>
        <div className="col-10" >
          <div><DriverSearch/></div>
        <DriverData /></div>
          
       </div>
       
       
       <div className="footer mt-auto py-3 bg-light fixed-bottom">LOGISTICS UK ©2024</div>
    </div></div>
  );
}

export default App;
