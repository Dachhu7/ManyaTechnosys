import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to SocialHub</h1>
            <ProductList />
        </div>
    );
};

export default HomePage;
