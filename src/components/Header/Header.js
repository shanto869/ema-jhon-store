import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='navbar'>
            <a href="./logo"><img src={logo} alt="" /></a>
            <div>
                <a href="./shop">Shop</a>
                <a href="./order">Order</a>
                <a href="./inventory">Inventory</a>
                <a href="./about">About</a>
            </div>
        </nav>
    );
};

export default Header;