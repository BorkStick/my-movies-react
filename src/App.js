import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
