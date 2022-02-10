import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useDispatch } from "react-redux";

import { handleSearch } from "../../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
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
        onChange={(e) => {
          dispatch(handleSearch(e.target.value));
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
