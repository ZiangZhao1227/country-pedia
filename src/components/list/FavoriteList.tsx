import { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  removeFavorite,
  clearFavorite,
} from "../../redux/features/favoriteSlice";
import { FavoriteListCountryProps } from "../../types/Types";

const FavoriteList = () => {
  const getFavoriteList = useAppSelector((state) => state.favorite.value);
  const dispatch = useAppDispatch();
  if (getFavoriteList.length === 0) {
    return (
      <Fragment>
        <Typography variant="h3" gutterBottom className="header__style">
          Favorite List
        </Typography>
        <Typography component="div">Hi! Try to add some contries!</Typography>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Typography variant="h3" gutterBottom className="header__style">
        Favorite List
        <IconButton onClick={() => dispatch(clearFavorite())}>
          <DeleteForeverIcon color="error" fontSize="large" />
        </IconButton>
      </Typography>
      {getFavoriteList.map((country: FavoriteListCountryProps) => {
        return (
          <Grid
            container
            key={country.CountryName}
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="favorite-countey-container"
          >
            {" "}
            <Grid item>
              <CircleIcon style={{ fontSize: "10px", marginRight: "6px" }} />
            </Grid>
            <Grid item>
              <img
                src={country.CountryFlag}
                alt="country Flag"
                style={{ height: "40px", width: "60px" }}
              />
            </Grid>
            <Grid item xs>
              <Link
                to={`/country/${country.CountryName}`}
                className="country-name-link"
              >
                {country.CountryName}
              </Link>
            </Grid>
            <Grid item>
              <IconButton onClick={() => dispatch(removeFavorite(country))}>
                <DeleteIcon color="error" />
              </IconButton>
            </Grid>
          </Grid>
        );
      })}
    </Fragment>
  );
};

export default FavoriteList;
