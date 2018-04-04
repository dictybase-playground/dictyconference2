import React, { Component } from "react";
import SlideShow from "./components/SlideShow";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <SlideShow />
        <NavBar />
      </div>
    );
  }
}

export default App;
