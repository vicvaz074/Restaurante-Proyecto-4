import React from 'react';
import './HomePage.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa el CSS necesario para el carrusel
import sopesImage from './imagenes/Sopes.jpg';
import tacosImage from './imagenes/tacos.jpg';
import foodImage from './imagenes/comida.jpg';

const HomePage = () => {
  return (
    <div className="home">
      <header className="welcome-section">
        <h1>Bienvenidos a "Los Azahares"</h1>
        <p>Explora los sabores vibrantes de México en cada plato.</p>
      </header>

      <main className="container">
        {/* Sección del carrusel de imágenes */}
        <section className="carousel-section">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            {/* Añade tantos elementos <div> como imágenes desees mostrar en el carrusel */}
            <div>
              <img src={sopesImage} alt="Imagen de Sopes" />
            </div>
            <div>
              <img src={tacosImage} alt="Imagen de Tacos" />
            </div>
            <div>
              <img src={foodImage} alt="Imagen de Comida" />
            </div>
            {/* Puedes seguir añadiendo más imágenes aquí */}
          </Carousel>
        </section>

        <section className="about-section">
          <h2>La Historia de "Los Azahares"</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                En "Los Azahares", nuestro viaje comienza con el aroma de la tierra mojada, el picante del chile,
                y la frescura de la lima. Fundado en 1985, cada plato es un lienzo de colores y texturas, donde
                los sabores tradicionales se entrelazan con la innovación.
              </p>
              <p>
                Celebra con nosotros una fiesta para los sentidos, donde cada bocado narra la rica historia de
                nuestras raíces mexicanas y la pasión por la excelencia culinaria.
              </p>
              <a href="reservar" className="btn">Reserva Ahora</a>
            </div>
          </div>
        </section>

        <section className="reviews-section">
          <h3>Comentarios de Nuestros Clientes</h3>
          <div className="review">
            <p>"La comida y el ambiente te llevan a un viaje por México sin salir de la ciudad. ¡Una experiencia única!"</p>
            <cite>— Ricardo Sánchez</cite>
          </div>
          <div className="review">
            <p>"Los Azahares es nuestro lugar favorito para celebraciones familiares. El servicio siempre es excepcional."</p>
            <cite>— Alejandra Prieto</cite>
          </div>
          {/* Añadir más reseñas según sea necesario */}
        </section>
      </main>

      <footer>
        <p>© 2023 Los Azahares. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default HomePage;
