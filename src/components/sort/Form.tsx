import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { handleSort } from "../../redux/features/sortSlice";

const Form = () => {
  const sort = useAppSelector((state) => state.sort.value);
  const dispatch = useAppDispatch();
  return (
    <FormControl fullWidth>
      <InputLabel id="sort by select">sort</InputLabel>
      <Select
        labelId="sort by select"
        id="demo-simple-select"
        value={sort}
        label="sort"
        onChange={(e: SelectChangeEvent) => {
          dispatch(handleSort(e.target.value));
        }}
      >
        <MenuItem value={""}>
          <em>None</em>
        </MenuItem>
        <MenuItem value={"populationDes"}>Population ↓</MenuItem>
        <MenuItem value={"populationAsc"}>Population ↑</MenuItem>
        <MenuItem value={"nameDes"}>Name ↓</MenuItem>
        <MenuItem value={"nameAsc"}>Name ↑</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Form;
