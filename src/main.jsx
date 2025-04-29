import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contactus';
import Slider from "./Components/Slider";
import ServicesSlider from "./Components/ServicesSlider";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="slider" component={Slider} />
          <Route path='header' element={<Header />} />
          <Route path='footer' element={<Footer />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='ServicesSlider' element={<ServicesSlider />} />

          
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
