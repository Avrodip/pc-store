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
                        display: "flex",
                        flexWrap: "wrap",
                        position: "absolute",
                        paddingLeft: "60px",
                        top: "60px",
                        border: "2px solid red",
                        backgroundColor: "#171717",
                        width: "100%",
                        height: "400px",
                        borderBottom: "2px solid red",
                        fontFamily: "Roboto, sans-serif",
                        marginRight: "-15px",
                        marginLeft: "-15px",
                        boxSizing: "border-box",
                    }
                    }
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <Typography component="h3">AI & DEEP LEARNING</Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>Single GPU Solutions</li>
                                    <li>Dual GPU Solutions</li>
                                    <li>Quad GPU Solutions</li>
                                    <li>Octa GPU Solutions</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <h3>ARCHITECTURE & ENGINEERING</h3>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>Rendering</li>
                                    <li>Engineering</li>
                                    <li>3D Design & Animation</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box >

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <h3>VISUAL DESIGNING & AUDIO EFFECTS</h3>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>Video Editing</li>
                                    <li>Graphic Design</li>
                                    <li>Audio Production</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <h3>TRADING PC</h3>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>2 Display Solution</li>
                                    <li>4 Display Solution</li>
                                    <li>8 Display Solution</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <h3>NAS</h3>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box >
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>Rackmout</li>
                                    <li>Tower</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Box >
            );

        } else if (buttonNumber === 4 && isHovered4) {
            return (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        position: "absolute",
                        paddingLeft: "60px",
                        top: "60px",
                        backgroundColor: "#171717",
                        width: "100%",
                        height: "400px",
                        borderBottom: "2px solid red",
                        fontFamily: "Roboto, sans-serif",
                        marginRight: "-15px",
                        marginLeft: "-15px",
                        boxSizing: "border-box",
                    }
                    }
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <h3>Gaming PC Series</h3>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>Dorylus Series (Budget Gaming)</li>
                                    <li>Pharach Series (Enthusiast Gaming)</li>
                                    <li>Solenopsis Series (Extreme Gaming)</li>
                                    <li>Metallica Series (Streaming)</li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ marginRight: "20px", marginLeft: "20px", maxWidth: "25%", height: "200px" }}>
                        <h3>Gaming PC Series</h3>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <img
                                    src="/Images/Logo-Idea-white.png"
                                    alt="Logo"
                                    className="logo"
                                    style={{ width: "50px", height: "auto" }}
                                />
                            </Box>
                            <Box>
                                <ul style={{ listStyleType: "none", paddingLeft: "15px" }}>
                                    <li>AMD RYZEN PCs</li>
                                    <li>NVIDIA 40 SERIES</li>
                                </ul>
                            </Box>
                        </Box>
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

