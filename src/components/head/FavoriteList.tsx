import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";

import { useAppSelector } from "../../hooks/hooks";

const FavoriteList = () => {
  const LikedCountryList = useAppSelector((state) => state.favorite.value);
  return (
    <Link to={`/favorite`} style={{ textDecoration: "none" }}>
      <IconButton>
        <Badge badgeContent={LikedCountryList.length} color="secondary">
          <FavoriteIcon sx={{ fontSize: 35 }} color="error" />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default FavoriteList;
