import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "../styles/Carrousel.css";
import pizzaCuadrada from "../../../imagenes/pizzaCuadrada.jpeg";
import hochoPizza from "../../../imagenes/hochoPizza.jpg"
import pizzaRedonda2 from "../../../imagenes/pizzaRedonda2.jpg"

const CarrouselCard = ({ title, content, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>

        <button className="card-btn">
          Ver producto
        </button>
      </div>
    </div>
  );
};

const CarrouselLayout = ({ children }) => {
  const MAX_VISIBILITY = 3;
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className="carrousel">
      {active > 0 && (
        <button className="nav left" onClick={() => setActive((a) => a - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => {
        const isVisible = Math.abs(active - i) <= MAX_VISIBILITY;
        return (
          <div
            className="card-container"
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / MAX_VISIBILITY,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / MAX_VISIBILITY,
              pointerEvents: i === active ? "auto" : "none",
              opacity: isVisible ? 1 : 0,
              display: isVisible ? "block" : "none",
            }}
          >
            {child}
          </div>
        );
      })}
      {active < count - 1 && (
        <button className="nav right" onClick={() => setActive((a) => a + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const Carrousel = () => {
  const cards = [
  {
    title: "PIZZA RECTANGULAR",
    content: "Pizza con orillas rellenas de queso Mozarrella de 24 rebanadas, con posibilidad de convinar hasta 4 de nuestros deliciosos sabores.",
    image: pizzaCuadrada
  },
  {
    title: "Pizza Familiar",
    content: "Para compartir en familia hasat 2 sabores. Con un total de 12 rebanadas",
    image: pizzaRedonda2
  },
  {
    title: "HochoPizza",
    content: "Disfruta de nuestra más reciente creacion. Rellena de queso mozarrella, crujiente y gratinada. Para 2-4 personas.  ",
    image: hochoPizza
  }
];


  return (
    <CarrouselLayout>
      {cards.map((card, i) => (
        <CarrouselCard
          key={i}
          title={card.title}
          content={card.content}
          image={card.image}
        />
      ))}
    </CarrouselLayout>
  );
};

export default Carrousel;
