import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const MyCard = ({ title, count }) => {
  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 2,
        height: 200,
        // background: "rgba(255, 255, 109, 0.4)",
        backdropFilter: "blur(8.5px)",
        color: "white",
        boxShadow: "0px 8px 32px 0px rgba(31,38,135,0.37)",
        margin: 2,
        padding: 5,
        // backgroundColor: "white",
        // border: "1px solid black",
        // borderRadius: 2,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        // margin: 2,
        // backdropFilter: "blur(13.0px)",
        "&:hover": {
          transition: "all 0.5s ease-in-out",
          background: "rgba(210, 255, 109, 0.4)",
          transform: "scale(1.1)",
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
