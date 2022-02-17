import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useAppSelector, useAppDispatch } from "./hooks/hooks";
import { useEffect } from "react";

import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import NotFound from "./pages/NotFound";
import Favorite from "./pages/Favorite";
import { toggleTheme } from "./redux/features/themeSlice";

function App() {
  const darkMode = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  useEffect(() => {
    const themeType = localStorage.getItem("dark") || "dark";
    if (themeType !== "dark") {
      dispatch(toggleTheme(false));
    }
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home check={darkMode} />} />
            <Route
              path="/country/:name"
              element={<Country check={darkMode} />}
            />
            <Route path="*" element={<NotFound check={darkMode} />} />
            <Route path="/favorite" element={<Favorite check={darkMode} />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
