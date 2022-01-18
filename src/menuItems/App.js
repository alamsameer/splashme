import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Data";
import Items from "./Items";
import Categories from "./Categories";
import { useState } from "react";
const category = [
  "All",
  ...new Set(
    Menu.map((menu) => {
      return menu.category;
    })
  ),
];

const App = () => {
  const [menu, setMenu] = useState(Menu);
  function filterItems(category) {
    console.log(category);
    console.log(category === "All");
    if (category === "All") {
      console.log(Menu);
      setMenu(Menu);
    } else {
      let newItems = Menu.filter((each) => {
        return each.category === category;
      });
      setMenu(newItems);
    }
  }

  return (
    <div>
      <h2>Our menu </h2>
      <Categories category={category} filterItems={filterItems} />
      <Items menu={menu} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
