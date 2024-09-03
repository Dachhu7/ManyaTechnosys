import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateProductPage from './pages/CreateProductPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreateProductPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
