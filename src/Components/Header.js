import React from 'react';
import SearchIcon from '@material-ui/icons/Search'

const Header = () => {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/AIMMP%40Facebook.png" alt="FB logo"/>
            </div>

            <div className="header_input">
                <input placeholder="Search site" type="text"/>
            </div>
            <div className="header_option">
                <SearchIcon />
            </div>
            
        </div>
    );
};

export default Header;
