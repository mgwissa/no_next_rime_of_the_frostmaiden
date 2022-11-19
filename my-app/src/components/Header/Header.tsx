import { Routes, Route } from "react-router-dom";

import { ThemeProvider, Typography, CardMedia, Link } from "@mui/material";
import theme from "../../theme/theme";

import HeaderNav from "../HeaderNav/HeaderNav";
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
          // image="/earth_genasi.png"
          image="https://cdnb.artstation.com/p/assets/images/images/029/369/979/large/dominik-zdenkovic-elves-of-ilfelin.jpg?1597322419"
          alt="Sandstone"
          className="hero-image"
        />
        {/* <MongoDB /> */}
      </ThemeProvider>
    </div>
  );
}

export default Header;
