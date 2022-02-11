import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import Avatar from "@material-ui/core/Avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { handleSearch } from "../../redux/features/searchSlice";
import avatar from "../../assets/myProfilePic.png";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    dispatch(handleSearch(""));
    navigate("/");
    window.scrollTo(0, 0);
  }
  return (
    <Grid container>
      <AppBar
        position="fixed"
        enableColorOnDark
        style={{ background: "#2E3B55" }}
      >
        <Toolbar variant="dense">
          <Grid item>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <Home />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="inherit" component="div">
              {title}
            </Typography>
          </Grid>
          <Grid item xs />
          <Grid item>
            <Avatar src={avatar} />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
