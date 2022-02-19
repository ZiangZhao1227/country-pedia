import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import debounce from "lodash.debounce";

import { useAppDispatch } from "../../hooks/hooks";
import { handleSearch } from "../../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  return (
    <TextField
      id="outlined-basic"
      label="search by country"
      fullWidth
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
  );
};

export default SearchBar;
