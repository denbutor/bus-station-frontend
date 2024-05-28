import React, { useState, useEffect } from 'react';

function DataTableTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Виконання HTTP GET запиту до ендпоінту на бекенді для отримання даних
    fetch('http://localhost:5152/api/Ticket/Get')
      .then(response => response.json()) // Розшифровка JSON відповіді
      .then(data => setTickets(data.data)) // Збереження даних у стані компонента
      .catch(error => console.error('Error fetching tickets:', error)); // Обробка помилок
  }, []); // Викликається при монтажі компонента

  return (
    <div>
      {/* <h1>Список квитків</h1> */}
      <table>
        <thead>
          <tr>
            <th>Passengers Name / </th>
            <th>Online Ticket</th>
            <th> / Sale Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.passengersName}</td>
              <td>{ticket.onlineTicket}</td>
              <td>{ticket.saleStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTableTickets;
