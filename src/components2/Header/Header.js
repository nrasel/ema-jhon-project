import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo-img" src={Logo} alt="" />
            <div>
                <nav>
                    <div className="navigation-bar">
                        <a href="/shop">Shop</a>
                        <a href="/order">Order Review</a>
                        <a href="/inventory">Manage Inventory</a>
                    </div>
                </nav>
                <div className="search-option">
                    <input className="search-input" type="search" placeholder="type here to search" />
                </div>
            </div>
        </div>
    );
};

export default Header;