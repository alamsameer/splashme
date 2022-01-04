import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { useState } from "react/cjs/react.development";

const App = () => {
  const [pvalue,setPvalue]=useState(0)
  function validation(e) {
    e.preventDefault();
    const preview = document.querySelector("img");
    const file = document.querySelector("input[type=file]").files[0];
    console.log(file);
    const reader = new FileReader();
    if (!file) return;
    if (file) {
      reader.readAsDataURL(file);
      eventListerner(reader)
      reader.onload = function (e) {
        const image = new Image();
        image.src = reader.result;
        image.onload = function (e) {
          console.log(e);
          const canvas = document.createElement("canvas");
          canvas.width = 200;
          const scaleSize = 200 / e.target.width;
          canvas.height = e.target.height * scaleSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(e.target, 0, 0, 200, 200);
          const srcEncoded = ctx.canvas.toDataURL("images/jpeg");
          preview.src = srcEncoded;
        };
      };
      function eventListerner(reader){
        reader.addEventListener("progress",meter)
        reader.addEventListener("loadend",meter)
      }
     function meter(e){
        let bar = Math.floor((e.loaded/e.total)*100)
        console.log(bar);
        setPvalue(bar)
     }
    }
  }

  return (
    <>
      <form onSubmit={validation}>
        <input type="file" id="file" />
        <button type="submit">upload me</button>
      </form>
      <div>
        <div id="progress-Container">
          <label htmlFor="file">Uploading progress:</label>
          <progress id="file" value={`${pvalue}`} max="100">
          </progress>
        </div>
        <img id="preview" />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
