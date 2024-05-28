import React, { useState, useEffect } from 'react';

function DataTableDrivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Driver/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setDrivers(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching drivers:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Driver Pib / </th>
            <th>Driver Phone Number</th>
            <th> / Mail</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map(driver => (
            <tr key={driver.id}>
              <td>{driver.driverPib}</td>
              <td>{driver.driverPhoneNumber}</td>
              <td>{driver.mail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableDrivers;
