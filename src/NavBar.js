import React from "react";
import { Breadcrumbs, Button } from "@material-ui/core";
import "./Logo.css";

export default () => {
  return (
    <Breadcrumbs className='logo'>
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
      <Button
        component='a'
        href='#'
        label='Devops'
        style={{
          transform: "rotate(0deg)",
          borderBottom: "2px solid rgb(24, 34, 158) ",
          borderTop: "2px solid rgb(24,34, 158)",
        }}>
        <p> Devops</p>
      </Button>
      <Button
        component='a'
        href='#'
        label='URL SHORTNER'
        style={{
          transform: "rotate(0deg)",
          borderBottom: "2px solid rgb(24, 34, 158) ",
          borderTop: "2px solid rgb(24,34, 158)",
        }}>
        <p> URL SHORTNER</p>
      </Button>
      <Button
        component='a'
        href='#'
        label='Chess stats'
        style={{
          transform: "rotate(0deg)",
          borderBottom: "2px solid rgb(24, 34, 158) ",
          borderTop: "2px solid rgb(24,34, 158)",
        }}>
        <p> Chess Stats</p>
      </Button>
      <Button
        component='a'
        href='#'
        label='My Account'
        style={{
          transform: "rotate(0deg)",
          borderBottom: "2px solid rgb(24, 34, 158) ",
          borderTop: "2px solid rgb(24,34, 158)",
        }}>
        <p> My account</p>
      </Button>
    </Breadcrumbs>
  );
};
