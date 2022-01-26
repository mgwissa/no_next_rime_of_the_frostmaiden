import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, Typography, CardMedia } from "@mui/material";
import theme from "./theme/theme";

import Home from "./pages/Home";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h1">
          Rime of the Frostmaiden
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: 450 }}
          image="/earth_genasi.png"
          alt="Sandstone"
        />
      </ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
