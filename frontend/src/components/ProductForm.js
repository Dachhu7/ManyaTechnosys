import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProductForm.css';

const ProductForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        original_price: '',
        offer_price: '',
        image: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const uploadData = new FormData();
        uploadData.append('title', formData.title);
        uploadData.append('description', formData.description);
        uploadData.append('original_price', formData.original_price);
        uploadData.append('offer_price', formData.offer_price);
        if (formData.image) {
            uploadData.append('image', formData.image);
        }
        axios.post(`${process.env.REACT_APP_API_URL}/products/`, uploadData)
            .then(response => console.log("Product created:", response.data))
            .catch(error => console.error("Error creating product:", error));
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Product Title"
                required
            />
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="number"
                name="original_price"
                value={formData.original_price}
                onChange={handleChange}
                placeholder="Original Price"
                required
            />
            <input
                type="number"
                name="offer_price"
                value={formData.offer_price}
                onChange={handleChange}
                placeholder="Offer Price"
                required
            />
            <input
                type="file"
                name="image"
                onChange={handleFileChange}
                required
            />
            <button type="submit">Create Product</button>
        </form>
    );
};

export default ProductForm;
