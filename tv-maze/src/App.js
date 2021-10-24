import "./App.css";
import Home from "./components/Home"
import Search from "./components/Search"
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Result from './components/Result';
import React, { useState } from "react"

function App() {
  const [movies, setMovies] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();
  }

  const movieList = movies.map((element, index) =>
    <Result key={index} movie={element.show} />
  )

  return (
    <>
      <Home />
      <Switch>
        <Route exact path='/'>
          <form onSubmit={submitHandler}>
            <Search query={setMovies} />
          </form>
        </Route>
        <Route exact path='/result'>
          <Link to='/'>
            <button>Back to Search</button>
          </Link>
          <div className='display'>
            {movieList}
          </div>
        </Route>
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
