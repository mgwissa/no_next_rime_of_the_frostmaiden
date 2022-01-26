import {
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, Typography, CardMedia, Link } from "@mui/material";
import theme from "./theme/theme";

import HeaderNav from "./components/HeaderNav";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <ThemeProvider theme={theme}>
        <Typography variant="h1" color="textSecondary">
          Rime of the Frostmaiden
        </Typography>
        <CardMedia
          component="img"
          sx={{ width: 450 }}
          image="/earth_genasi.png"
          alt="Sandstone"
        />
        <Link href="https://www.dndbeyond.com/" target="_blank" color="textPrimary" className="character-sheet-link">Character Sheet</Link>
      </ThemeProvider>
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
