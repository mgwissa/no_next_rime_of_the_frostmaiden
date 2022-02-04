import {
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, Typography, CardMedia, Link } from "@mui/material";
import theme from "./theme/theme";

import HeaderNav from "./components/HeaderNav/HeaderNav";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
// import MongoDB from "./components/MongoDB/MongoDB";

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
        {/* <MongoDB /> */}
        <Link href="https://www.dndbeyond.com/profile/Miiiiike/characters/63068909" target="_blank" color="textPrimary" className="character-sheet-link">Character Sheet</Link>
      </ThemeProvider>
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
