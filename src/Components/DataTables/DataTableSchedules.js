import React, { useState, useEffect } from 'react';

function DataTableSchedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Schedule/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setSchedules(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching schedules:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div>
      {/* <h1>Розклад рейсів</h1> */}
      <table>
        <thead>
          <tr>
            <th>Week Day</th>
            <th> / Departure Time / </th>
            <th>Arrival Time / </th>
            <th>Ticket Cost</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <td>{schedule.weekDay}</td>
              <td>{schedule.departureTime}</td>
              <td>{schedule.arrivalTime}</td>
              <td>{schedule.ticketCost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableSchedules;
