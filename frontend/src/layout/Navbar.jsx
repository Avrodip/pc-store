import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Box, Typography } from "@mui/material";
import { AuthContext } from "../context-api/userContext";

const Navbar = () => {
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [cartSize, setCartSize] = useState(0);
    const { isLoggedIn, logout, getCartSize } = useContext(AuthContext);
    const navigate = useNavigate()

    const fetchCartSize = async () => {
        const size = await getCartSize();
        setCartSize(size)
    };
    fetchCartSize();

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
                <Box
                    sx={{
                        
                        position: "absolute",
                        top: "60px",
                        right: '100px',
                        border: "2px solid rgba(187, 2, 13, 0.6)",
                        backgroundColor: "#171717",
                        minWidth: "10%",
                        minHeight: "100px",
                        justifyContent: 'center',
                        alignItems: "center",
                        margin: '0px auto',
                        fontFamily: "Roboto, sans-serif",
                        marginRight: "-15px",
                        marginLeft: "-15px",
                        boxSizing: "border-box",
                    }
                    }
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">AI & DEEP LEARNING</Typography>
                        
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">ARCHITECTURE & ENGINEERING</Typography>
                    </Box >

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">VISUAL DESIGNING & AUDIO EFFECTS</Typography>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">TRADING PC</Typography>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">NAS</Typography>
                    </Box>
                </Box >
            );

        } else if (buttonNumber === 4 && isHovered4) {
            return (
                <Box
                sx={{
                        
                    position: "absolute",
                    top: "60px",
                    right: '100px',
                    border: "2px solid rgba(187, 2, 13, 0.6)",
                    backgroundColor: "#171717",
                    minWidth: "10%",
                    minHeight: "100px",
                    justifyContent: 'center',
                    alignItems: "center",
                    margin: '0px auto',
                    fontFamily: "Roboto, sans-serif",
                    marginRight: "-15px",
                    marginLeft: "-15px",
                    boxSizing: "border-box",
                }
                }
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">Gaming PC Series</Typography>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", padding: '20px'}}>
                        <Typography component="h3">AMD Ryzen PCs</Typography>
                    </Box >

                </Box >
            );
        }
        return null;
    };

    const handleLogout = () => {
        logout();
        navigate("/")
    }

    return (
        <Grid container style={{ margin: 0, padding: 0 }}>

            {/* First Navbar */}
            <AppBar position="fixed" style={{ backgroundColor: "#171717", height: "35px" }}>
                <Grid container justifyContent="space-between" alignItems="center">
                    {/* Left side logo */}
                    <Grid item>
                        {/* Uncomment and customize your logo if needed */}
                        {/* <img src="path-to-your-logo" alt="Logo" className="logo" /> */}
                    </Grid>

                    {/* Right side buttons and icons */}
                    <Grid item sx={{ pr: 1 }}>
                        <>
                            {
                                isLoggedIn ? (
                                    <>
                                        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                                        <Button color="inherit" onClick={() => handleLogout()}>Logout</Button>
                                    </>
                                )
                                    :
                                    (
                                        <>
                                            <Button color="inherit" component={Link} to="/register">Register</Button>
                                            <Button color="inherit" component={Link} to="/login">Login</Button>
                                        </>
                                    )
                            }
                            <IconButton color="inherit"><SearchIcon /></IconButton>
                            <IconButton component={Link} to="/cart" color="inherit">
                                <Badge badgeContent={cartSize} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </>
                    </Grid>
                </Grid>
            </AppBar>

            {/* Second Navbar */}
            <AppBar position="fixed" color="primary" sx={{ backgroundColor: "#000000", top: '35px', width: "100%" }}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-between">
                        {/* Logo on the Top-Left Corner */}
                        <Grid item>
                            <Link to="/">
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Link>
                        </Grid>

                        {/* Buttons with Dropdowns */}
                        <Grid item container xs={8} justifyContent="flex-end">
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
            </AppBar >

        </Grid >
    );
};

export default Navbar;

