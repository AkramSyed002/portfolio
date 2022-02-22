import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import { Avatar, Grid, Typography } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import { NavLink, useLocation } from "react-router-dom";
import profileImag from "../assets/profile.png";

// const drawerWidth = 240;

const SideBar = () => {
  const classes = useStyles();
  const sideLinks = [
    { icon: <HomeRoundedIcon />, title: "Home", path: "/" },
    { icon: <InfoRoundedIcon />, title: "About", path: "/about" },
    { icon: <WorkspacesRoundedIcon />, title: "Education", path: "/edu" },
    { icon: <SchoolRoundedIcon />, title: "Portfolio", path: "/portfolio" },
    {
      icon: <ConnectWithoutContactRoundedIcon />,
      title: "Contact",
      path: "/contact",
    },
  ];

  const location = useLocation();

  return (
    <>
      <CssBaseline />

      <List
        style={{
          backgroundColor: "black",
          height: "100vh",
        }}
      >
        <Avatar src={profileImag} sx={avtr} />

        <Typography variant="h3" color={"white"} align="center">
          Akram Syed
        </Typography>
        <Typography variant="body1" color={"white"} align="center">
          React JS Developer
        </Typography>

        {sideLinks.map((s, i) => {
          const { icon, title, path } = s;
          return (
            <div key={i}>
              <NavLink
                to={path}
                style={({ isActive }) => ({
                  color: "#fff",

                  background: isActive ? "#7600dc" : null,
                  textDecoration: "none",
                  border: "1px solid #fff",
                  borderRadius: "5px",
                  lineHeight: "4",
                  padding: "1rem",
                  display: "block",
                  margin: "0.4rem",
                  textAlign: "center",
                })}
              >
                {title}
              </NavLink>
            </div>
          );
        })}
      </List>
    </>
  );
};
export default SideBar;
const useStyles = makeStyles((theme) => ({
  profileImg: {
    width: "100px",
    height: "100px",
    color: "red",
  },
}));
const avtr = {
  width: "10vw",
  height: "20vh",
  margin: "1rem auto",
  xs: { display: "none" },
};
