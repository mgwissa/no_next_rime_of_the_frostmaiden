import { ThemeProvider, Button, Typography } from "@mui/material";
import theme from "../theme/theme";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h1">
          Rime of the Frostmaiden
        </Typography>
        <img src="../../public/earth_genasi.png" alt="Sandstone" />
        <Link to="/notes">
          <Button color="secondary">Notes</Button>
        </Link>
      </ThemeProvider>
    </div>
  );
}

export default Home;
