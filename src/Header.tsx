import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem"
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [ isMenuOpen, setMenuOpen ] = useState(false);
  const [ anchorEl, setAnchorEl ] = useState(null);

  const handleMenuOpen = (event: any) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  }

  return (
    <>
      <AppBar position="static">

        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography>
            Bestiary Viewer
          </Typography>

        </Toolbar>

      </AppBar>

      <Menu 
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorEl={anchorEl}
      >

        <MenuItem component={Link} to="/beasts">
          Beasts
        </MenuItem>

        <MenuItem component={Link} to="/areas">
          Areas
        </MenuItem>

        <MenuItem component={Link} to="/slayer">
          Slayer
        </MenuItem>

        <MenuItem component={Link} to="/weaknesses">
          Weaknesses
        </MenuItem>

      </Menu>
    </>
  )
}