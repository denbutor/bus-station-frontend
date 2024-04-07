import React, { useState, useEffect } from 'react';

function DataTableFlights() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/Flight/Get')
            .then(response => response.json())
            .then(response => {
                setData(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th><span style={{ color: '#297373' }}>/</span>Date<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>DepartureTime<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>ArrivalTime<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>TicketCost<span style={{ color: '#297373' }}>/</span></th>
                </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.Date}</td>
                            <td>{item.DepartureTime}</td>
                            <td>{item.ArrivalTime}</td>
                            <td>{item.TicketCost}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default DataTableFlights;