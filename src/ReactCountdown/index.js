import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const [count, setCounter] = useState(0);
  console.log(count);
 
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="btns">
        <button
          className="Increment"
          onClick={() => {
            setCounter((prvCount) => {
            //   console.log(prvCount);
              return prvCount+1;
            });
          }}
        >
          +
        </button>
        <button
          className="Decrement"
          onClick={() => {
            setCounter((prvCount) => prvCount - 1); // In the setCounter we need to pass argument which is he current satae so that we can do anythink with that state increase either decrease
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById("root"));
