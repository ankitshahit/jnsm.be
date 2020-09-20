import React from "react";
import NavBar from "../src/NavBar";
import UrlShortner from "../src/UrlShortner";
import { Container } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <br />
      <Container maxWidth='sm'>
        <UrlShortner />
      </Container>
    </div>
  );
}

export default App;
