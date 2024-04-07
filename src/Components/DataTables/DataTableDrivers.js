import React, { useState, useEffect } from 'react';

function DataTableDrivers() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/api/Driver/Get')
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
                    <th><span style={{ color: '#297373' }}>/</span>DriverPib<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>DriverPhoneNumber<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>Mail<span style={{ color: '#297373' }}>/</span></th>
                </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.DriverPib}</td>
                            <td>{item.DriverPhoneNumber}</td>
                            <td>{item.Mail}</td>
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

export default DataTableDrivers;