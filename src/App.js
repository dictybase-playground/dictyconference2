import React, { Component } from "react";
import SlideShow from "./components/SlideShow";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Venue from "./components/Venue";
import Travel from "./components/Travel";
import Register from "./components/Register";
import Abstract from "./components/Abstract";
import Agenda from "./components/Agenda";

import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter hashType="noslash">
        <div>
          <SlideShow />
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/venue" component={Venue} />
          <Route path="/travel" component={Travel} />
          <Route path="/register" component={Register} />
          <Route path="/abstract" component={Abstract} />
          <Route path="/agenda" component={Agenda} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
