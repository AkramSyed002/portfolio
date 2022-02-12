import { Button } from "@mui/material";
import React from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
const MyButton = ({ variant, icon, onClick, title }) => {
  return (
    <Button
      variant={variant || "outlined"}
      startIcon={icon || <InfoRoundedIcon />}
      onClick={onClick ? onClick : () => alert("provide on click")}
    >
      {title || "Provide Title"}
    </Button>
  );
};

export default MyButton;
