import React, { useState, useEffect } from 'react';

function DataTableFlights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Flight/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setFlights(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching flights:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date / </th>
            <th>Departure Time / </th>
            <th>Arrival Time / </th>
            <th>Ticket Cost</th>
          </tr>
        </thead>
        <tbody>
          {flights && flights.map(flight => (
            <tr key={flight.id}>
              <td>{flight.date}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.ticketCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableFlights;
    