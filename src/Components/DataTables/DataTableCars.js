import React, { useState, useEffect } from 'react';

function DataTableCar() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Car/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setCars(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching cars:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div>
      {/* <h1>Список автомобілів</h1> */}
      <table>
        <thead>
          <tr>
            <th>Car Name / </th>
            <th>Car Number</th>
            <th> /Passengers Count</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.id}>             
              <td>{car.carType}</td>
              <td>{car.carNumber}</td>
              <td>{car.passengersCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableCar;