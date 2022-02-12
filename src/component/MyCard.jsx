import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MyCard = ({ title, count }) => {
  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: 2,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        margin: 2,
        "&:hover": {
          backgroundColor: "wheat",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="h3" color="black" align="center">
        {count || "##"}
      </Typography>
      <Typography variant="h4" color="black" align="center">
        {title || "title here"}
      </Typography>
    </Box>
  );
};

export default MyCard;
