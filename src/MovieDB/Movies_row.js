import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Movies_row = ({ title, base_Url, query, Apikey, className }) => {

  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    const res = await fetch(`${base_Url}${query}${Apikey}  `);
    const json = await res.json();
    setMovies(json.results);
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <section className={`movie-container ${className}`}>
        {movies.map((movie) => {
          const { id, poster_path, title, vote_average } = movie;
          return (
            <Link to={`/details/${id}`} className="movie-card" key={id}>
              <div className="movie-card">
                <img
                  className="poster"
                  src={"https://image.tmdb.org/t/p/w200/" + poster_path}
                />
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Movies_row;
