import React from "react";
import NavBar from "../src/NavBar";
import Logo from "../src/Logo.js";
import UrlShortner from "../src/UrlShortner";
import { Container } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Logo />
      <NavBar />
      <br />
      <Container maxWidth='sm'>
        <UrlShortner />
      </Container>
    </div>
  );
}

export default App;
