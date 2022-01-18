import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
    // console.log("i am rendering");
  const [quote, setQuote] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(async () => {
    const data = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json "
    );
    const json = await data.json();
    //   json.quotes array contineing object
    setQuote(json.quotes);
    if(json.quotes.length>=1){
        let randomNum = Math.floor(Math.random() * 100);
        setText((json.quotes[randomNum].quote))
        setAuthor(json.quotes[randomNum].author)
    }

  }, []);

  const Randomquote = () => {
    let randomNum = Math.floor(Math.random() * 100);
      setText((quote[randomNum].quote))
      setAuthor(quote[randomNum].author)
  };
  return (
    <>
      <article id="text">{text}</article>
      <p id="author">{author}</p>
      <div className="btn-container">
        <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${ encodeURIComponent('"' + text+ '" ' + author)}`} id="tweet-quote">
          tweet
        </a>
        <button id="new-quote" onClick={Randomquote}>
          Neew Quote
        </button>
      </div>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("quote-box"));
