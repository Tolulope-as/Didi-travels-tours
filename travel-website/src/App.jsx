import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Bookings from './pages/Bookings';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/destinations" element={<Destinations/>} />
      <Route path="/bookings" element={<Bookings/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    <Footer/>
   </Router>
  );
}

export default App
