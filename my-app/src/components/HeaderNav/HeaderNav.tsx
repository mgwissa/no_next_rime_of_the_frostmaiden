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
          <a href="https://www.dndbeyond.com/profile/Miiiiike/characters/63068909" rel="noreferrer" target="_blank">
            <Button>Character Sheet</Button>
          </a>
          <a href="https://www.dndbeyond.com/classes/warlock" rel="noreferrer" target="_blank">
            <Button>Class</Button>
          </a>
          <a href="/backstory_sandstone.pdf" rel="noreferrer" target="_blank">
            <Button>Backstory</Button>
          </a>
        </div>
        </ThemeProvider>
    </div>
  );
}

export default HeaderNav;