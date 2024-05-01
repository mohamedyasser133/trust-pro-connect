import React from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Home from "../src/pages/home/Home";
import Services from "../src/pages/home/Services";
import Review  from '../src/pages/home/Review';
import Orders  from '../src/pages/home/Orders';
import cart  from '../src/pages/home/cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/cart" element={<cart />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
