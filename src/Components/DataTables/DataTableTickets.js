import React, { useState, useEffect } from 'react';

function DataTableTickets() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/Ticket/Get')
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
                    <th><span style={{ color: '#297373' }}>/</span>PassengersName<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>OnlineTicket<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>SaleStatus<span style={{ color: '#297373' }}>/</span></th>
                </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.PassengersName}</td>
                            <td>{item.OnlineTicket}</td>
                            <td>{item.SaleStatus}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default DataTableTickets;