import React, {useState, useEffect} from 'react'

function SearchBarStart({ searchRoute, setSearchRoute }) {
    return (
        <input
            type="text"
            placeholder="Start"
            value={searchRoute}
            onChange={event => setSearchRoute(event.target.value)}
            className="search-bar"
            style={{ width: '130px', height: '30px' }}
        />
    );
}

export default SearchBarStart;

