import theme from "../theme/theme";
import { Button, Typography } from "@mui/material";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <Typography variant="h1">
        Rime of the Frostmaiden
      </Typography>
      <img src="../../public/earth_genasi.png" alt="Sandstone" />
      <Link to="/notes">
        <Button color="secondary">Notes</Button>
      </Link>
    </div>
  );
}

export default Home;
