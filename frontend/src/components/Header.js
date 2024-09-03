import React from 'react';
import './Header.css'; // Assuming you have styles for Header component

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>SocialHub</h1>
                <nav>
                    <a href="/">Home</a>
                    <a href="/create">Create Product</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
