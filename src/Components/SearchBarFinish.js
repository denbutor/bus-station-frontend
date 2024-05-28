import React, {useState, useEffect} from 'react'



function SearchBarFinish({ searchRoute, setSearchRoute }) {
    return (
        <input
            type="text"
            placeholder="Finish"
            value={searchRoute}
            onChange={event => setSearchRoute(event.target.value)}
            className="search-bar"
            style={{ width: '130px', height: '30px' }}

        />
    );
}

export default SearchBarFinish;

