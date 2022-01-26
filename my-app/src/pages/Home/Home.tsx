import { ThemeProvider, Button } from "@mui/material";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Link to="/notes" color="textPrimary">
          Notes
        </Link>
      </ThemeProvider>
    </div>
  );
}

export default Home;
