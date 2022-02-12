import { Typography } from "@mui/material";
import React from "react";

const Title = ({ title }) => {
  return (
    <Typography variant="h2" align="center">
      {title || "Provide Title"}
    </Typography>
  );
};

export default Title;
