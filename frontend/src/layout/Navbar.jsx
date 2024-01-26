import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isHovered3, setIsHovered3] = React.useState(false);
    const [isHovered4, setIsHovered4] = React.useState(false);

    const handleMouseEnter = (buttonNumber) => {
        if (buttonNumber === 3) {
            setIsHovered3(true);
        } else if (buttonNumber === 4) {
            setIsHovered4(true);
        }
    };

    const handleMouseLeave = (buttonNumber) => {
        if (buttonNumber === 3) {
            setIsHovered3(false);
        } else if (buttonNumber === 4) {
            setIsHovered4(false);
        }
    };

    const renderDropdownContent = (buttonNumber) => {
        if (buttonNumber === 3 && isHovered3) {
            return (
                <div
                    style={{
                        position: "absolute",
                        top: "60px",
                        left: 0,
                        backgroundColor: "#171717",
                        padding: "10px",
                        width: "100%",
                        height: "400px",
                    }}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <div>AI & DEEP LEARNING</div>
                    <div>Single GPU Solutions</div>
                    <div>Dual GPU Solutions</div>
                    <div>Quad GPU Solutions</div>
                    <div>Octa GPU Solutions</div>
                </div>
            );
        } else if (buttonNumber === 4 && isHovered4) {
            return (
                <div
                    style={{
                        position: "absolute",
                        top: "60px",
                        left: 0,
                        backgroundColor: "#171717",
                        padding: "10px",
                        width: "100%",
                        height: "400px",
                    }}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                >
                    <div>TRADING PC</div>
                    <div>2 Display Solution</div>
                    <div>4 Display Solution</div>
                    <div>8 Display Solution</div>
                </div>
            );
        }
        return null;
    };

    return (
        <Grid style={{ margin: 0, padding: 0 }}>
            {/* First Navbar */}
            <AppBar position="fixed" style={{ backgroundColor: "#171717", height: "35px" }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        {/* Logo on the Top-Left Corner */}
                        <Grid item style={{ textAlign: "center" }}>
                            {/* <img src="path-to-your-logo" alt="Logo" className="logo" /> */}
                        </Grid>

                        {/* Top Right corner Section */}
                        <Grid
                            item
                            container
                            xs={8}
                            justifyContent="flex-end"
                            style={{ marginBottom: "25px" }}
                        >
                            <Button color="inherit" component={Link} to="/register">
                                Register
                            </Button>
                            <Button color="inherit" component={Link} to="/login">
                                Login
                            </Button>
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
            <AppBar position="fixed" color="primary" style={{ backgroundColor: "#000000", top: '35px' }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        {/* Logo on the Top-Left Corner */}
                        <Grid item>
                            <img
                                src="/Images/Logo-Idea-white.png"
                                alt="Logo"
                                className="logo"
                                style={{ width: "50px", height: "auto" }}
                            />
                        </Grid>

                        {/* Buttons with Dropdowns */}
                        <Grid
                            item
                            container
                            xs={8}
                            justifyContent="flex-end"
                        >
                            <Button
                                color="inherit"
                                onClick={() => renderDropdownContent(3)}
                                onMouseEnter={() => handleMouseEnter(3)}
                                onMouseLeave={() => handleMouseLeave(3)}
                                style={{
                                    color: isHovered3 ? "red" : "inherit",
                                    textDecoration: isHovered3 ? "underline" : "inherit",
                                }}
                            >
                                Creation
                                <ArrowDropDownIcon />
                            </Button>
                            {renderDropdownContent(3)}

                            <Button
                                color="inherit"
                                onClick={() => renderDropdownContent(4)}
                                onMouseEnter={() => handleMouseEnter(4)}
                                onMouseLeave={() => handleMouseLeave(4)}
                                style={{
                                    color: isHovered4 ? "red" : "inherit",
                                    textDecoration: isHovered4 ? "underline" : "inherit",
                                }}
                            >
                                Gaming
                                <ArrowDropDownIcon />
                            </Button>
                            {renderDropdownContent(4)}

                            <Button color="inherit" onClick={() => { }}>
                                DIY PC
                                <ArrowDropDownIcon />
                            </Button>
                            <Button color="inherit" onClick={() => { }}>
                                Peripherals
                                <ArrowDropDownIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
};

export default Navbar;
