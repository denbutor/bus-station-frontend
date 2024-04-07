import React, { useState, useEffect } from 'react';

function DataTableCars() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('/ap/Car/Get')
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
                    <th><span style={{ color: '#297373' }}>/</span>CarType<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>CarNumber<span style={{ color: '#297373' }}>/</span></th>
                    <th><span style={{ color: '#297373' }}>/</span>PassengersCount<span style={{ color: '#297373' }}>/</span></th>
                </tr>
            </thead>
            <tbody>
            {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.CarType}</td>
                            <td>{item.CarNumber}</td>
                            <td>{item.PassengersCount}</td>
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

export default DataTableCars;


