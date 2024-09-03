import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/`)
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="product-list">
            <h1>Product List</h1>
            <div className="products">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="price">Original: ${product.original_price}</p>
                        <p className="offer-price">Offer: ${product.offer_price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
