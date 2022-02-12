import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";
import { toggleTheme } from "./redux/features/themeSlice";

function App() {
  const darkMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height:"100%"}}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  check={darkMode}
                  change={() => dispatch(toggleTheme(!darkMode))}
                />
              }
            />
            <Route
              path="/country/:name"
              element={
                <Country
                  check={darkMode}
                  change={() => dispatch(toggleTheme(!darkMode))}
                />
              }
            />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
