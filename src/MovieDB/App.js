import React from "react";
import ReactDOM from "react-dom";
import Movies_row from "./Movies_row";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Api from "./key";
const App = () => {
  const base_Url = "https://api.themoviedb.org/3/movie";
  return (
    <>
      <Router>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Hero/>
            <Movies_row
              title="Popular movies"
              base_Url={base_Url}
              query="/popular?"
              Apikey={Api}
              className="popularMovies"
            />
            <Movies_row
              title="Top Rated movies"
              base_Url={base_Url}
              query="/top_rated?"
              Apikey={Api}
              className="TopMovies"
            />
            <Movies_row
              title="Upcoming movies"
              base_Url={base_Url}
              query="/upcoming?"
              Apikey={Api}
              className="UpcomingMovies"
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
const Hero=()=>{
  return <div className="hero-img-container">
      <div className="hero-detail">
        <h1>
        Unlimited movies, TV shows and more.
        </h1>
      </div>
  </div>
}
ReactDOM.render(<App />, document.getElementById("root"));
