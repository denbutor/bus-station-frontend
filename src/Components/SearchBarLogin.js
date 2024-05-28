import React, {useState, useEffect} from 'react'

function SearchBarLogin({ searchRoute, setSearchRoute }) {
    return (
        <input
            type="text"
            placeholder="Login"
            value={searchRoute}
            onChange={event => setSearchRoute(event.target.value)}
            className="search-bar"
            style={{ width: '130px', height: '30px',  alignItems: 'center'}}
        />
    );
}

export default SearchBarLogin;

