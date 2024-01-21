import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = () => {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleClick = (event, anchorElSetter) => {
    anchorElSetter(event.currentTarget);
  };

  const handleClose = (anchorElSetter) => {
    anchorElSetter(null);
  };

  return (
    <div>
      {/* First Navbar */}
      <AppBar
        position="static"
        style={{ backgroundColor: "#171717", height: "35px" }}
      >
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Logo on the Top-Left Corner */}
            <Grid item style={{ textAlign: "center" }}>
              {/* <img src="https://www.ant-pc.com/assets/2022-theme/images/Banner-2.webp" alt="Logo" className="logo" /> */}
            </Grid>

            {/* Top Right corner Section */}
            <Grid
              item
              container
              xs={4}
              justifyContent="flex-end"
              style={{ marginBottom: "25px" }}
            >
              <Button color="inherit">Register</Button>
              <Button color="inherit">Login</Button>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* Second Navbar */}
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "#000000" }}
      >
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Logo on the Top-Left Corner */}
            <Grid item>
              <img
                src="logo.png"
                alt="Logo"
                className="logo"
                style={{ width: "70px", height: "auto" }}
              />
            </Grid>

             {/* Buttons with Dropdowns */}
             <Grid item container xs={4} justifyContent="flex-end">
              <Button
                color="inherit"
                aria-controls="dropdown1"
                aria-haspopup="true"
                onClick={(event) => handleClick(event, setAnchorEl1)}
              >
                Creation
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="dropdown1"
                anchorEl={anchorEl1}
                keepMounted
                open={Boolean(anchorEl1)}
                onClose={() => handleClose(setAnchorEl1)}
              >
                <MenuItem onClick={() => handleClose(setAnchorEl1)}>Option 1</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl1)}>Option 2</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl1)}>Option 3</MenuItem>
              </Menu>

              <Button
                color="inherit"
                aria-controls="dropdown2"
                aria-haspopup="true"
                onClick={(event) => handleClick(event, setAnchorEl2)}
              >
                Gaming
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="dropdown2"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={() => handleClose(setAnchorEl2)}
              >
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 1</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 2</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 3</MenuItem>
              </Menu>

              <Button
                color="inherit"
                aria-controls="dropdown3"
                aria-haspopup="true"
                onClick={(event) => handleClick(event, setAnchorEl2)}
              >
                DIY PC
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="dropdown3"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={() => handleClose(setAnchorEl2)}
              >
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 1</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 2</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 3</MenuItem>
              </Menu>

              <Button
                color="inherit"
                aria-controls="dropdown4"
                aria-haspopup="true"
                onClick={(event) => handleClick(event, setAnchorEl2)}
              >
                Peripherals
                <ArrowDropDownIcon />
              </Button>
              <Menu
                id="dropdown4"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={() => handleClose(setAnchorEl2)}
              >
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 1</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 2</MenuItem>
                <MenuItem onClick={() => handleClose(setAnchorEl2)}>Option 3</MenuItem>
              </Menu>

              {/* Add more buttons with dropdowns as needed */}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;