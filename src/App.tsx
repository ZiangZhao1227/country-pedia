import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useAppSelector } from "./hooks/hooks";

import "./App.css";
import Home from "./pages/Home";
import Country from "./pages/Country";

function App() {
  const darkMode = useAppSelector((state) => state.theme.value);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
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
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
