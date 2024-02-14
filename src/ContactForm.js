// src/ContactForm.js
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [contact, setContact] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setContact({...contact, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías el envío del formulario, por ejemplo, guardando los datos en Firebase
    console.log(contact);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Tu nombre:</label>
      <input type="text" name="nombre" value={contact.nombre} onChange={handleChange} />
      
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" value={contact.email} onChange={handleChange} />
      
      <label htmlFor="telefono">Teléfono:</label>
      <input type="tel" name="telefono" value={contact.telefono} onChange={handleChange} />
      
      <label htmlFor="mensaje">Mensaje y comentarios:</label>
      <textarea name="mensaje" value={contact.mensaje} onChange={handleChange}></textarea>
      
      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
