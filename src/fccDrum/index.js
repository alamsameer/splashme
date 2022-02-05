import React, { useState } from "react";
import ReactDOM from "react-dom";
import DrumBtn from "./DrumBtn";
import { bankOne, bankTwo } from "./Data";
const Index = () => {
  const [bank, setBank] = useState(bankOne);
  const [display,setDisplay]=useState('press key or mouse to play')
  console.log(display);
  const selectedbank=()=>{
      setBank(bankTwo)
    }
  return (
    <div id="drum-machine">
      <div className="pad-container">
        {bank.map((elem) => {
          const { id, keyCode, keyTrigger, url } = elem;
          return (
            <DrumBtn
              key={id}
              id={id}
              keycode={keyCode}
              keyTrigger={keyTrigger}
              src={url}
              className='drum-pad'
              display={display}
              setDisplay={setDisplay}
            />
          );
        })}
      </div>
      <div id="display-container">
          <p id="display">{display}</p>
          <button onClick={selectedbank}>change bank</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
