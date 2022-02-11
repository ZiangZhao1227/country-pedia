import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Home from "@material-ui/icons/Home";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleSearch } from "../../redux/features/searchSlice";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    dispatch(handleSearch(""))
    navigate("/");
    window.scrollTo(0, 0)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" enableColorOnDark style={{ background: '#2E3B55' }}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleClick}>
          <Home />
        </IconButton>
        <Typography variant="h5" color="inherit" component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
};

export default Header;
