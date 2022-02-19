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
      {getFavoriteList.map((country) => {
        return (
          <Grid
            container
            key={country}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Grid item xs>
              <CircleIcon style={{ fontSize: "10px", marginRight: "6px" }} />
            </Grid>
            <Grid item xs={9}>
              <Link to={`/country/${country}`} className="country-name-link">
                {country}
              </Link>
            </Grid>
            <Grid item xs>
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
