import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useAppDispatch } from "../../hooks/hooks";
import debounce from "lodash.debounce";

import { handleSearch } from "../../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  return (
    <Box component="form">
      <TextField
        id="outlined-basic"
        label="search by country"
        variant="outlined"
        onChange={debounce((e) => {
          dispatch(handleSearch(e.target.value));
        }, 500)}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
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