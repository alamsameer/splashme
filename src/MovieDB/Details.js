import React from "react";
import { useEffect, useState } from "react";
import Api from "./key";
import { useParams } from "react-router-dom";
const Details = () => {
  const params = useParams();
  const { id } = params;
  const [Details, setDetails] = useState([]);
  const[loading,setLoading]=useState(true)
  useEffect(async () => {
    const res = await fetch(` https://api.themoviedb.org/3/movie/${id}?${Api}
        `);
    const json = await res.json();
    setLoading(false)
    setDetails(json);
  }, []);
  console.log(Details);
  const { title, overview, poster_path, runtime, vote_average } = Details;
  console.log(runtime);
  if(loading){
      return( <h1 style={{textAlign:'center'}}>Loading....</h1>)
  }
  return (
    <section className="movie-detail">
      <figure>
        <img
          className="poster"
          src={"https://image.tmdb.org/t/p/w300/" + poster_path}
        />
      </figure>
      <div className="detail">
        <h2>{title}</h2>
        <ul>
            <li>Runtime:{runtime} m</li>
            <li>Rating:{vote_average}</li>
        </ul>
        <p>{overview}</p>
      </div>
    </section>
  );
};

export default Details;
