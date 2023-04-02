import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/not_found/not_found.js';
import Home from '../pages/home/home.js';
import Books from '../pages/books/books.js';

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/livros" element={<Books/>}/>
        </Routes>
    )
};