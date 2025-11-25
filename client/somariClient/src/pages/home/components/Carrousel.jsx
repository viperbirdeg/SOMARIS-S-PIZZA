import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import "../styles/Carrousel.css"; // Ajusta la ruta según tu proyecto

const CarrouselCard = ({ title, content, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
        }}
      />
      <h2>{title}</h2>
      <p>{content}</p>
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
    title: "Mars",
    content: "El planeta rojo",
    image: "https://images.vexels.com/media/users/3/152536/isolated/preview/401b51c3a9098f12b566121c92009877-mars-planet-icon-by-vexels.png"
  },
  {
    title: "Uranus",
    content: "Gigante helado",
    image: "https://images.vexels.com/media/users/3/152680/isolated/preview/22e162e0d0066ad0881e1ee797574680-uranus-planet-icon-by-vexels.png"
  },
  {
    title: "Jupiter",
    content: "El planeta más grande",
    image: "https://images.vexels.com/media/users/3/152509/isolated/preview/e058e7f53d319e0628763c70ab7dce14-jupiter-planet-icon-by-vexels.png"
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
