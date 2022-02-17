import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import { useAppSelector } from "../../hooks/hooks";

const FavoriteList = () => {
  const LikedCountryList = useAppSelector((state) => state.favorite.value);
  return (
    <Link to={`/favorite`} style={{ textDecoration: "none" }}>
      <IconButton>
        <FavoriteIcon sx={{ fontSize: 40 }} color="error" />
        <Typography
          variant="h5"
          color="inherit"
          component="div"
          style={{ marginLeft: "6px" }}
        >
          {LikedCountryList.length}
        </Typography>
      </IconButton>
    </Link>
  );
};

export default FavoriteList;
