import React from "react";
import { Button } from "@material-ui/core";
import "./Logo.css";

export default () => {
  return (
    <Button
      component='a'
      href='#'
      label='Home'
      style={{
        transform: "rotate(-5deg)",
        fontSize: "34px",
      }}>
      <h2 className='logo-main'>JNSM </h2>
      <h3 className='logo-secondary'>Studio</h3>
    </Button>
  );
};
