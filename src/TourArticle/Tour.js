import React from "react";
import { useState } from "react";
const Tour = ({id, name, image, info, price,removeTour }) => {
  const [read, setRead] = useState(false);
  console.log(name);
  return (
    <>
      <article>
        <figure>
          <img src={image} />
        </figure>
        <div>
          <p>
            <span>{name}</span>
            <span>{price}</span>
          </p>
          <p>
            {read ? info : info.substring(0, 100)}
            <button
              onClick={(e) => {
                setRead(!read);
              }}
            >
              {read ? "showLess" : "showmore"}
            </button>
          </p>
        </div>
        <button onClick={()=>removeTour(id)}>not interested</button>
      </article>
    </>
  );
};

export default Tour;
