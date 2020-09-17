import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home"
import Navbar from "./components/Navbar";
import Card from "./components/Card"


function App() {
  return (
  <Router>
    <Card />
    <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
  </Router>
  );
}

export default App;

