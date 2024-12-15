import logo from './logo.png';
import './App.css';
import react, {Component} from 'react';
import MenuRecord from './Component/Menu';
import DriverData from './Component/DriverTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import DriverSearch from './Component/DriverSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>     
        <div className ="container-fluid">
          <div className="row">
          <div className="col-2">
        <nav className='navbar navbar-inverse navbar-fixed-left'>
        
        <MenuRecord /> 
        </nav>
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
