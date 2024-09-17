import { AppBar, Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/lato"; // Defaults to weight 400

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: "50px",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          backgroundColor: "white",
          boxShadow: "none",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "rgba(0,0,0,0.12)",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ width: "60%", justifyContent: "space-evenly", mx: "auto" }}
        >
          <Link className="custom-link-name" to={"/"}>
            AKSHAY PATIL
          </Link>
          <Link className="custom-link" to={"/about"}>
            About
          </Link>
          <Link className="custom-link" to={"/resume"}>
            Resume
          </Link>
          {/* <Link className="custom-link" to={"/projects"}>
            Projects
          </Link> */}
          <Link className="custom-link" to={"/stats"}>
            Stats
          </Link>
          <Link className="custom-link" to={"/contact"}>
            Contact
          </Link>
        </Stack>
      </AppBar>
    </Box>
  );
}
