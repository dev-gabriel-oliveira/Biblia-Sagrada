import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../pages/not_found/not_found.js';
import Home from '../pages/home/home.js';
import Books from '../pages/books/books.js';
import Book from '../pages/book/book.js';
import About from '../pages/about/about.js';
import Verses from '../pages/verses/verses.js';

export default function UserRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/livros" element={<Books/>}/>
            <Route path="/livros/:index/:id" element={<Book/>}/>
            <Route path="/passagens" element={<Verses/>}/>
            <Route path="/sobre" element={<About/>}/>
        </Routes>
    )
};
