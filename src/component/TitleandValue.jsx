import { Grid, Typography } from "@mui/material";
import React from "react";

const TitleandValue = ({ title, value }) => {
  return (
    <Grid item container justifyContent="space-between">
      <Grid item md={4}>
        <Typography variant="h4" lineHeight="2">
          {title || "Provide Title"}
        </Typography>
      </Grid>
      <Grid item md={8}>
        <Typography variant="h4" color="yellowgreen" lineHeight="2">
          {value || "Provide Value"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TitleandValue;
