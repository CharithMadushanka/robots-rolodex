import React from 'react';
import './search-box.styles.css';

function SearchBox(props) {
    return (
        <div>
            <input className='search-box' type="search" placeholder='Search Robots' onChange={props.onSearchChange}/>
        </div>
    )
}

export default SearchBox
