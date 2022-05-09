import react from "react";
import { render } from "react-dom";
import Navbar from "./Navbar";
import ImageContainer from "./ImageContainer";

import React from 'react'

function App() {
  return (
    <div>
      <Navbar/>
      <ImageContainer/>
    </div>
  )
}

render(<App/>,document.getElementById("root"))