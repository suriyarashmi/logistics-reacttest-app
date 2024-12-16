import React,{ useState } from "react";
import DriverData from '../Data/drivers.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const DriverSearch = () => {
    
    const [searchQuery, setSearchQuery] = useState('');   
  

    
    // Function to handle the search input change
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    // Function to filter drivers based on the search query
    const filteredDrivers = DriverData.filter(driver => {
      const query = searchQuery.toLowerCase();
      return (
        driver.forename.toLowerCase().includes(query) ||
        driver.surname.toLowerCase().includes(query) ||
        driver.vehicleRegistration.toLowerCase().includes(query)
      );
    });
  
    return (
      
      <div>
      <table>
        <tr style ={{width:'100%'}}>

        {/* Search Box */}        
        <td style ={{width:'450px'}}> 
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by forename, surname, or vehicle registration"
          style={{ padding: '30px', width: '450px', marginBottom: '20px' }}
        />
       </td></tr><tr><td>
        {/* Driver List */}
            {filteredDrivers.length > 0 ? (
            filteredDrivers.map(driver => (
              <td key={driver.driverID} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
                <strong>{driver.forename} {driver.surname}</strong><br />
                Vehicle Registration: {driver.vehicleRegistration}<br />
                Driver ID: {driver.driverID}<br />
                Traces: {driver.traces.length}
              </td>
            ))
          ) : (
            <td>No drivers found</td>
          )}
          </td>
          </tr>
        </table>
      </div>
    );
  };
  
  export default DriverSearch;
  