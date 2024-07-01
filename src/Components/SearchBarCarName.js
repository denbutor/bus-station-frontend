import React, { Component } from 'react';

class SearchBarCarName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCars: [], // Ensure initial state is an array
            searchCar: "",
            filteredCars: [] // Ensure initial state is an array
        };
    }

    componentDidMount() {
        this.getCars();
    }

    getCars = async () => {
        try {
            const response = await fetch('http://localhost:5152/api/Car/Get');
            const data = await response.json();
            if (Array.isArray(data)) {
                this.setState({ allCars: data, filteredCars: data });
            } else {
                console.error('Fetched data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    };

    handleInputChange = (event) => {
        const searchCar = event.target.value;
        this.setState({ searchCar });

        // Filter cars based on the input value or show all if input is empty
        const filteredCars = searchCar === "" ?
            this.state.allCars.map(car => car.carType) : // Show all car types if input is empty
            this.state.allCars.filter(car =>
                car.carType.toLowerCase().includes(searchCar.toLowerCase())
            );
        this.setState({ filteredCars });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Car Type"
                        value={this.state.searchCar}
                        onChange={this.handleInputChange}
                        className="search-bar"
                        style={{ width: '130px', height: '30px' }}
                    />
                    {this.state.filteredCars.length > 0 && (
                        <ul className="autocomplete">
                            {this.state.filteredCars.map((carType, index) => (
                                <li key={index} className='autocomplete__item'>
                                    {carType}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
        );
    }
}

export default SearchBarCarName;
