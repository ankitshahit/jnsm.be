import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";

export default () => {
  const [removeDefaultValue, setRemoveDefaultValue] = useState(true);
  return (
    <Grid
      container
      direction='column'
      justify='space-around'
      alignItems='center'>
      <Typography>Grab a huge link!</Typography>
      <TextField
        id='input-url-text'
        label='Paste URL'
        defaultValue='https://www.google.com/'
        helperText='Copy any url to generate a new short URL'
        variant='outlined'
        size='medium'
        placeholder='https://www.google.com/'
        onClick={() => {
          console.log(`inside event`);
          if (removeDefaultValue) {
            document.querySelector("#input-url-text").value = "";
          }
          setRemoveDefaultValue(false);
        }}
      />
      <Button
        variant='outlined'
        color='primary'
        onClick={() => {
          shortenUrl(document.querySelector("#input-url-text").value);
        }}>
        SHORTEN IT!
      </Button>
    </Grid>
  );
};

const shortenUrl = (url) => {
  console.log(`url: ${url}`);
};
