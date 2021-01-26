import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import logo from '../Images/BB1.png';



const Header = () => {
    return (
        <div className='header'>
            <div className="header_left">

                <img src={logo} alt="BB logo"/>

                <div className="header_input">
                    <SearchIcon fontSize="small"/>
                    <input placeholder="Search site" type="text"/>
                </div>

            </div>
            <div className="header_center">


                <div className="header_option header_option--active">
                    <IconButton>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </div>


                <div className="header_option">
                    <IconButton>
                        <Avatar fontSize="large" />
                    </IconButton>
                </div>

            </div>



            <div className="header_right">


            </div>


            
        </div>
    );
};

export default Header;
