import React from 'react';
import DriverData from '../Data/drivers.json'

// Function to calculate total activity time for a driver for the week
const calculateTotalMinutes = (traces) => {
  return traces.reduce((total, trace) => {
    return total + trace.activity.reduce((sum, activity) => sum + activity.duration, 0);
  }, 0);
};

// Function to check if a driver has activities on a specific day
const hasActivityOnDay = (traces, date) => {
  return traces.some(trace => trace.date === date);
};

// Table Component
const Days = ["Mon","Tue","Wed","Thurs","Fri","Sat","Sun"]
const DriverTable = () => {
  const daysOfWeek = [
    "2021-02-01", "2021-02-02", "2021-02-03", "2021-02-04", "2021-02-05", "2021-02-06", "2021-02-07"
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Vehicle Registration</th>
          <th>Total Minutes</th>
          {Days.map(day => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {DriverData.map(driver => {
          const totalMinutes = calculateTotalMinutes(driver.traces);

          return (
            <tr key={driver.driverID}>
              <td>{driver.forename} {driver.surname}</td>
              <td>{driver.vehicleRegistration}</td>
              <td>{totalMinutes}</td>
              {daysOfWeek.map(day => (
                <td
                  key={day}
                  style={{
                    backgroundColor: hasActivityOnDay(driver.traces, day) ? 'green' : 'transparent',
                    width: '30px',
                    height: '30px',
                    border: '1px solid #ccc'
                  }}
                ></td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DriverTable;
