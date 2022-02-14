import { Fragment, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Favorite = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Fragment>
      <IconButton onClick={() => setClicked(!clicked)}>
        {clicked ? <FavoriteIcon color="error"/> : <FavoriteBorderIcon color="error"/>}
      </IconButton>
    </Fragment>
  );
};

export default Favorite;
