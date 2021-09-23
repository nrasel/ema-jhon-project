import React from 'react';
import Logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo-image" src={Logo} alt="" />
            <nav>
                <a href="/shops">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventories">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;