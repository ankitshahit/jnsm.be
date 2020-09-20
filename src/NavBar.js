import React from "react";
import { Breadcrumbs, Button, Box } from "@material-ui/core";
import "./Logo.css";

export default () => {
  return (
    <Box alignItems='center'>
      <Breadcrumbs className='logo'>
        <Button>Home</Button>
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
    </Box>
  );
};
