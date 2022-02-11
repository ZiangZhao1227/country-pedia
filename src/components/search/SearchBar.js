import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

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
        onChange={debounce((e) => {
          dispatch(handleSearch(e.target.value));
        }, 500)}
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
