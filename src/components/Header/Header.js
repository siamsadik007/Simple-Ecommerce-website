import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>

            <div className='header'>
                <img src={logo} className='logo' />
                <nav className='nav-bar'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order Review</a>
                    <a href="/manage inventory here">Manage Inventory Here</a>
                </nav>
                <div className='search-button'>
                    <input type="text" className='search-input' name="" placeholder='Search here' />
                </div>
            </div>
        </div>
    );
};

export default Header;