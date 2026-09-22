import React, { useEffect, useRef, useState } from "react";
import card__data from "../assets/cards/Cards_data (1).js";
import { Link, useParams } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [movieData, setMovieData] = useState([]);
  const { id } = useParams();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWRlN2JlZmE5MGRmOWVmYjY3MjA2NDY0YTNiNzkyZiIsIm5iZiI6MTc4OTkwODEwMy43MDQsInN1YiI6IjZhYWZkNDg3MzBmMTM1YTk1MTQ5YjI5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ayQni8b-fD0bwUf83763huYwMWRCr-P2YZzJs7Rp0BI",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options,
    )
      .then((res) => res.json())
      .then((data) => setMovieData(data?.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    console.log(movieData);
  }, [movieData]);

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
        {movieData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
              alt=""
            />
            <p className="card__title">{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
