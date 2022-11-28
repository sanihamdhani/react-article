import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./styles/styles.css";
const Header = () => {
  return (
    <AppBar
      position="fixed"
      style={{ background: "transparent", boxShadow: "none", color: "black" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Article API
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#000000",
              }}
            >
              Top Headlines
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/apple"
              style={{
                textDecoration: "none",
                color: "#000000",
              }}
            >
              Apple
            </Link>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
