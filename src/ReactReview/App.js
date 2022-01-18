import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import people from "./people";
const App = () => {
    const [index,setIndex]=useState(2)
    const increment=()=>{
      console.log(index);
      if(index < 4){
        setIndex(index+1)

      }
    }
    const decrement=()=>{
      if(index > 1){
        setIndex(index-1)
      }
    }
  return (
    <section className="container">
      <div className="review-container">
        {people.map((elem) => {
          const { id, image, name, title, quote } = elem;
          let position =""
          if(index === id){
              position="active"
          }
          else if(id<index){
              position="next"
          }
          else{
              position="previous"
          }
          return (
            <article key={id} className={position}>
              <figure>
              <img src={image} />
              </figure>
              <h3>{name}</h3>
              <p>{title}</p>
              <blockquote>{quote}</blockquote>
              <p>
                <FaQuoteRight />
              </p>
            </article>
          );
        })}
         <button className="left-btn" onClick={decrement}>
        {index ===1 ? " " :<FiChevronLeft />}
      </button>
      <button className="right-btn" onClick={increment}>
        
        {index === 4? " " :<FiChevronRight />}
      </button>
      </div>
    </section>
  );
};

ReactDOM.render(<App/>,document.querySelector("#root"))