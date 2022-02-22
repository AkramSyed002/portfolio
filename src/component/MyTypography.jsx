import { Typography } from "@mui/material";
import React from "react";

const MyTypography = ({ ...allProps }) => {
  return <Typography {...allProps}>{allProps.title}</Typography>;
};

//default props assign to MyButton when its not pass from parent component
MyTypography.defaultProps = {
  title: "Provide Title",
  variant: "h2",
  align: "center",
  style: { marginTop: "1rem" },
};

export default MyTypography;
