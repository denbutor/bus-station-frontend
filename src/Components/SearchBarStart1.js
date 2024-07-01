import React, { Component } from 'react';

class SearchBarStart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allRoutes: [], // Ensure initial state is an array
            searchRoute: "",
            filteredRoutes: [] // Ensure initial state is an array
        };
    }

    componentDidMount() {
        this.getRoutes();
    }

    getRoutes = async () => {
        try {
            const response = await fetch('http://localhost:5152/api/Car/Get');
            const data = await response.json();
            if (Array.isArray(data)) {
                this.setState({ allRoutes: data, filteredRoutes: data });
            } else {
                console.error('Fetched data is not an array:', data);
            }
        } catch (error) {
            console.error('Error fetching routes:', error);
        }
    };

    handleInputChange = (event) => {
        const searchRoute = event.target.value;
        this.setState({ searchRoute });

        // Filter routes based on the input value
        const filteredRoutes = this.state.allRoutes.filter(route =>
            route.start.toLowerCase().includes(searchRoute.toLowerCase())
        );
        this.setState({ filteredRoutes });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Start"
                        value={this.state.searchRoute}
                        onChange={this.handleInputChange}
                        className="search-bar"
                        style={{ width: '130px', height: '30px' }}
                    />
                    {this.state.filteredRoutes.length > 0 && (
                        <ul className="autocomplete">
                            {this.state.filteredRoutes.map((route, index) => (
                                <li key={index} className='autocomplete__item'>
                                    {route.start}
                                </li>
                            ))}
                        </ul>
                    )}
                </form>
            </div>
        );
    }
}

export default SearchBarStart1;
