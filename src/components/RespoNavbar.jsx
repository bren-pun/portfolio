import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { motion, useScroll, useViewportScroll } from "framer-motion";
import { Link } from "react-scroll";
import { cleanup } from "@testing-library/react";
const pages = [
  {
    id: 1,
    name: "HOME",
    delay: 0.5,
  },
  {
    id: 2,
    name: "ABOUT",
    delay: 1,
  },
  {
    id: 3,
    name: "WORK",
    delay: 1.5,
  },
  {
    id: 4,
    name: "CONTACT",
    delay: 2,
  },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" elevation={1} sx={{ background: "transparent" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#273647" }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#1E2A37"
            >
              <MenuIcon sx={{ color: "#8AEDA3" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={`#${page.name}`}>{page.name}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="bg-transparent font-Dmsans flex gap-12 p-7  px-16 fixed justify-end w-screen "
          >
            {pages.map((page) => (
              <motion.span
                key={page.id}
                onClick={handleCloseNavMenu}
                className="text-black p-2 font-Dmsans cursor-pointer  hover:bg-black hover:text-whiter hover:rounded-md transition-all"
                animate={{ opacity: [0, 1] }}
                transition={{ delay: `${page.delay}` }}
              >
                <Link
                  to={page.name}
                  animate={{ opacity: [0, 1] }}
                  transition={{ delay: 0.5 }}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {page.name}
                </Link>
              </motion.span>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
