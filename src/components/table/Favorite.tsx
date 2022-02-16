import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/features/favoriteSlice";

interface nameProps {
  name: string;
}

const Favourite = ({ name }: nameProps) => {
  const LikedCountryList = useAppSelector((state) => state.favorite.value);
  const dispatch = useAppDispatch();

  const handleToggleFavourite = useCallback(() => {
    const country = name;
    if (LikedCountryList.includes(country)) {
      dispatch(removeFavorite(country));
    } else {
      dispatch(addFavorite(country));
    }
  }, [LikedCountryList, dispatch, name]);
  return (
    <IconButton onClick={handleToggleFavourite}>
      {LikedCountryList.includes(name) ? (
        <FavoriteIcon color="error" />
      ) : (
        <FavoriteBorderIcon color="error" />
      )}
    </IconButton>
  );
};

export default Favourite;
