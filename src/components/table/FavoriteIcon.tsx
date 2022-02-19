import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/features/favoriteSlice";
import { FavoritenameProps, CountryObjectProps } from "../../types/Types";

const Favourite = ({ countryObject }: FavoritenameProps) => {
  const LikedCountryList = useAppSelector((state) => state.favorite.value);
  const dispatch = useAppDispatch();

  const handleToggleFavourite = useCallback(() => {
    const country = countryObject;
    if (
      LikedCountryList.some(
        (item: CountryObjectProps) => item.CountryName === country.CountryName
      )
    ) {
      dispatch(removeFavorite(country));
    } else {
      dispatch(addFavorite(country));
    }
  }, [LikedCountryList, dispatch, countryObject]);
  return (
    <IconButton onClick={handleToggleFavourite}>
      {LikedCountryList.some(
        (country: CountryObjectProps) =>
          country.CountryName === countryObject.CountryName
      ) ? (
        <FavoriteIcon color="error" />
      ) : (
        <FavoriteBorderIcon color="error" />
      )}
    </IconButton>
  );
};

export default Favourite;
