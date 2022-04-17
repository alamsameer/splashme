import React from "react";
import ReactDOM from 'react-dom';

class Calc extends React.Component{
    render(){
        return <>
          <div id="calculator">
              <div id="display">
                  <div className="calc-display"></div>
                  <div className="calc-current"></div>
              </div>
              <div className="calc-btns">
                  <button id="clear">Ac</button>
                  <button id="just-clear">X</button>
                  <button id="divide">D</button>
                  <button id="multiply">M</button>
                  <button id="seven">7</button>
                  <button id="eight">8</button>
                  <button id="nine">9</button>
                  <button id="subtract">-</button>
                  <button id="four">4</button>
                  <button id="five">5</button>
                  <button id="six">6</button>
                  <button id="add">+</button>
                  <button id="one">1</button>
                  <button id="two">2</button>
                  <button id="three">3</button>
                  <button id="equals">=</button>
                  <button id="zero">0</button>
                  <button id="decimal">.</button>
              </div>
          </div>
        </>
    }
}

ReactDOM.render(<Calc/>,document.querySelector("#root"))