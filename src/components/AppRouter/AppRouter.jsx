import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/index.js";
import About from "../../pages/About/index.js";
import Contacts from "../../pages/Contacts/index.js";
import Blog from "../../pages/Blog/index.js";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    );
};

export default AppRouter;