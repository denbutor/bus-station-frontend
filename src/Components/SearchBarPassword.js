import React, {useState, useEffect} from 'react'

function SearchBarPassword({ searchRoute, setSearchRoute }) {
    return (
        <input
            type="text"
            placeholder="Password"
            value={searchRoute}
            onChange={event => setSearchRoute(event.target.value)}
            className="search-bar"
            style={{ width: '130px', height: '30px' }}
        />
    );
}

export default SearchBarPassword;

