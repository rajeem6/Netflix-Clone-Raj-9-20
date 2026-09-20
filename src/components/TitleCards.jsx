import React, { useEffect, useRef } from "react";
import card__data from "../assets/cards/Cards_data (1).js";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  useEffect(() => {
    const element = cardsRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
      console.log("wheel", event.deltaY);
    };

    element.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {card__data.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p className="card__title">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
