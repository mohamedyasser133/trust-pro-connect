import React from "react";
import Login from "./pages/auth/login";
import Register from "./pages/auth/Register";
import Home from "../src/pages/home/Home";
import Services from "../src/pages/home/Services";
import Review  from '../src/pages/home/Review';
import Orders  from '../src/pages/home/Orders';
import { Cart }  from './pages/home/Cart';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { Navbar } from "./components/utils/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
