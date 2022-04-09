import {
  Routes,
  Route
} from "react-router-dom";

import { ThemeProvider, Typography, CardMedia, Link } from "@mui/material";
import theme from "../../theme/theme"

import HeaderNav from "../HeaderNav/HeaderNav"
// import MongoDB from "./components/MongoDB/MongoDB";

function Header() {
  return (
    <div>
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
            className="hero-image"
          />
          {/* <MongoDB /> */}
        </ThemeProvider>
      </div>
}