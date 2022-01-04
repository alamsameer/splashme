import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import Tour from "./Tour";
const App=()=>{
    const [loading, setLoading] = useState(true);
    const [tours, setTour] = useState([]);
    useEffect(async () => {
      const fetchTour = await fetch("https://course-api.com/react-tours-project");
      const res = await fetchTour.json();
      console.log(res);
      setLoading(false);
      setTour(res);
    }, []);
   const  removeTour = (x) => {
        const newtour=tours.filter((tour)=>{
            return tour.id !==x })
        console.log("i am cllled");
        console.log(newtour);
        setTour(newtour)
    }
    return (
      <>
        {tours.map((tour) => {
         return   <Tour
            key={tour.id}
            id={tour.id}
            name={tour.name}
            image={tour.image}
            info={tour.info}
            price={tour.price}
            removeTour={removeTour}
          />;
        })}
      </>
    );
}

ReactDOM.render(<App/>,document.getElementById("root")) 