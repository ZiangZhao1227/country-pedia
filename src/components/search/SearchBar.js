import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const SearchBar = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "60ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="search by country"
        variant="outlined"
      />
    </Box>
  );
};

export default SearchBar;
