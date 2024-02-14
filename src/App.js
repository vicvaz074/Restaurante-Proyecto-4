// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Asegúrate de tener este componente
import HomePage from './HomePage'; // Asegúrate de tener este componente
import ContactForm from './ContactForm'; // Asegúrate de tener este componente
import ReservationSection from './ReservationSection'; // Asegúrate de tener este componente
import MenuComponent from './MenuComponent'; // Asegúrate de tener este componente
import Footer from './Footer'; // Asegúrate de tener este componente
import './styles.css'; // Asegúrate de que este archivo exista y tenga estilos

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactForm />} />
          <Route path="/reservar" element={<ReservationSection />} />
          <Route path="/menu" element={<MenuComponent />} />
          {/* Agrega aquí más rutas según sea necesario */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

