import React from 'react';
import './Header.css';
import logo from '../../images/user3.png'

const Header = () => {
    return (
        <div className='header-titles'>
           <div className='header-contane'>
            <h1>Knowledge Cafe</h1>
            <img src={logo} alt="" />
           </div>
           <hr/>
        </div>
        
    );
};

export default Header;