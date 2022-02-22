import { Button } from "@mui/material";
import React from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
const MyButton = ({ variant, icon, onClick, title }) => {
  return (
    <Button variant={variant} endIcon={icon} onClick={onClick}>
      {title}
    </Button>
  );
};
//default props assign to MyButton when its not pass from parent component
MyButton.defaultProps = {
  variant: "outlined",
  icon: <InfoRoundedIcon />,
  onClick: () => alert("default click"),
  title: "Provide Title",
};
export default MyButton;
