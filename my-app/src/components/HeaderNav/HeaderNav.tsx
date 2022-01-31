import {
  Link
} from "react-router-dom";

import { ThemeProvider, Button, CardMedia } from "@mui/material";
import theme from "../../theme/theme";

import "./HeaderNav.scss"


function HeaderNav() {
  return (
    <div className="header-nav">
      <ThemeProvider theme={theme}>
      <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="/logo.png"
          alt="Sandstone"
        />
        <div className="header-links">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          <Link to="/notes">
            <Button>Notes</Button>
          </Link>
        </div>
        </ThemeProvider>
    </div>
  );
}

export default HeaderNav;