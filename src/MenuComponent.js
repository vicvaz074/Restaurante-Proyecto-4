import React, { useState, useEffect } from 'react';
import './MenuComponent.css';

// Datos simulados de un menú de comida mexicana
const fakeMenuData = [
  { id: 1, nombre: 'Tacos al Pastor', descripcion: 'Tacos de cerdo marinado con piña y cebolla', precio: 5.99 },
  { id: 2, nombre: 'Enchiladas Verdes', descripcion: 'Tortillas rellenas bañadas en salsa verde, con pollo, crema, y queso', precio: 7.99 },
  { id: 3, nombre: 'Guacamole', descripcion: 'Aguacate maduro triturado con cebolla, tomate, limón y cilantro', precio: 3.99 },
  // Añade más platos según sea necesario
];

const MenuComponent = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Simula la obtención de datos del menú, por ejemplo, de Firebase
    setMenuItems(fakeMenuData);
  }, []);

  return (
    <section className="menu-section">
      <h2>Nuestro Menú Mexicano</h2>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <h3>{item.nombre}</h3>
            <p>{item.descripcion}</p>
            <p className="precio">Precio: ${item.precio.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MenuComponent;

