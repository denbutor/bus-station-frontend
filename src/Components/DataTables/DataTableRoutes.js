import React, { useState, useEffect } from 'react';

function DataTableRoutes() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Route/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setRoutes(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching routes:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th> / Finish / </th>
            <th>Distance / </th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {routes && routes.map(route => (
            <tr key={route.id}>
              <td>{route.start}</td>
              <td>{route.finish}</td>
              <td>{route.distance}</td>
              <td>{route.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableRoutes;
