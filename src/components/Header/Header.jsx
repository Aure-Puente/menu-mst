//Importaciones:
import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import "./Header.css";

//JSX:
function Header() {
  return (
    <header className="header">
      <Box className="logo-box">
        <img src={logo} alt="Logo Mar sin TACC" className="logo" />
      </Box>

      <Box className="header-info">
        <Typography
          component="h2"
          sx={{
            fontFamily: "Fraunces, serif",
            fontSize: "1.55rem",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "var(--text)",
          }}
        >
          Mar sin TACC
        </Typography>

        <Typography
          sx={{
            mt: 0.6,
            fontSize: "0.9rem",
            color: "var(--muted-text)",
            lineHeight: 1.35,
          }}
        >
          Cocina artesanal sin gluten
        </Typography>
      </Box>
    </header>
  );
}

export default Header;