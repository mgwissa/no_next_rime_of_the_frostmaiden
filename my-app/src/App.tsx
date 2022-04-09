import {
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, Typography, CardMedia, Link } from "@mui/material";
import theme from "./theme/theme";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
// import MongoDB from "./components/MongoDB/MongoDB";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
