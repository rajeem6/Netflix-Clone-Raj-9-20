import React, { useEffect, useState } from "react";
import back_arrow_icon from "../assets/back_arrow_icon (1).png";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <Link to="/">
      <img src={back_arrow_icon} alt="" />
      </Link>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
