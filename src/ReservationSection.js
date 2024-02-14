import React, { useState, useEffect } from 'react';
import './ReservationSection.css';

const ReservationSection = () => {
  // Obtener la fecha y hora actuales
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0]; // Formato YYYY-MM-DD para el input de fecha
  const currentTime = now.toTimeString().split(' ')[0].substring(0, 5); // Formato HH:MM para el input de hora

  const [reservation, setReservation] = useState({
    nombre: '',
    fecha: currentDate,
    hora: currentTime,
    comensales: 1
  });
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(savedReservations);
  }, []);

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedReservations = [...reservations, reservation];
    setReservations(updatedReservations);
    localStorage.setItem('reservations', JSON.stringify(updatedReservations));
    alert('Reserva guardada con éxito');
    // Restablecer el formulario, excepto la fecha y la hora que se establecen a los valores actuales
    setReservation({ ...reservation, nombre: '', mensaje: '', fecha: currentDate, hora: currentTime });
  };

  return (
    <section className="reservation-section">
      <h2>Haz una Reserva</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label htmlFor="nombre">Tu nombre:</label>
        <input type="text" name="nombre" id="nombre" value={reservation.nombre} onChange={handleChange} required />
        
        <label htmlFor="fecha">Fecha:</label>
        <input type="date" name="fecha" id="fecha" value={reservation.fecha} min={currentDate} onChange={handleChange} required />
        
        <label htmlFor="hora">Hora:</label>
        <input type="time" name="hora" id="hora" value={reservation.hora} onChange={handleChange} required />
        
        <label htmlFor="comensales">Número de comensales:</label>
        <input type="number" name="comensales" id="comensales" value={reservation.comensales} min="1" onChange={handleChange} required />
        
        <button type="submit">Reservar</button>
      </form>
      <ul className="reservations-list">
        {reservations.map((res, index) => (
          <li key={index} className="reservation-item">
            Nombre: {res.nombre}, Fecha: {res.fecha}, Hora: {res.hora}, Comensales: {res.comensales}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ReservationSection;
