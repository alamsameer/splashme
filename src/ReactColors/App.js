import React, { useState } from "react";
import Values from "values.js";
import ReactDOM from "react-dom";
import IndividualColor from "./IndividualColor";
const App = () => {
  const [color, setColors] = useState("#ffffff");
  const [error, setError] = useState(false);
  const [lists, setList] = useState(new Values("#f15025").all(10));
  console.log(lists);
  const handleform = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(6);
      setList(colors);
      setError(false);
    } catch {
      setError(true);
    }
  };
  console.log(error);
  return (
    <section className="container">
      <div className="intro-form-conatiner">
        <header>
          <h1>Color generator</h1>
          <form action="#" onSubmit={handleform}>
            <input
              type="text"
              value={color}
              style={{ border:error && "2px solid red"}}
              onChange={(e) => setColors(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </header>
        <div className="color-container">
          {lists.map((color, index) => {
            const { type, weight, rgb, hex } = color;
            return (
              <IndividualColor
                key={index}
                index={index}
                type={type}
                weight={weight}
                rgb={rgb}
                hex={hex}

              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
