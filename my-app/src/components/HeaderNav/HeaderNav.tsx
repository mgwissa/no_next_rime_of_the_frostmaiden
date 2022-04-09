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
          <ul className="header-links">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/notes">
                Notes
              </Link>
            </li>
            <li>
              <a href="https://www.dndbeyond.com/profile/Miiiiike/characters/63068909" rel="noreferrer" target="_blank">
                Character Sheet
              </a>
            </li>
            <li>
              <a href="https://www.dndbeyond.com/classes/warlock" rel="noreferrer" target="_blank">
                Class
              </a>
            </li>
            <li>
              <a href="/backstory_sandstone.pdf" rel="noreferrer" target="_blank">
                Backstory
              </a>
            </li>
          </ul>
        </ThemeProvider>
    </div>
  );
}

export default HeaderNav;