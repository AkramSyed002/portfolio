import { Avatar, Badge, Grid, Typography } from "@mui/material";
import React from "react";

const EducationCard = ({ icon, year, title, description }) => {
  return (
    <Grid
      container
      // md={4}
      sx={{
        borderLeft: "2px solid white",
        position: "relative",
        marginTop: 10,
        padding: 1,
      }}
    >
      <Avatar
        src={icon || ""}
        sx={{ position: "absolute", left: -20, top: 0 }}
      />
      <Grid
        item
        sx={{
          paddingLeft: 5,
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            background: "white",
            color: "yellowgreen",
            borderRadius: 20,
            width: 60,
          }}
        >
          {year || "####"}
        </Typography>
        <Typography variant="h3">{title || "Front End Developer"}</Typography>
        <Typography paragraph>{description || "description here"}</Typography>
      </Grid>
    </Grid>
  );
};

export default EducationCard;
