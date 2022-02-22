import React from "react";
import { TextField } from "@mui/material";

const MyTextFiled = ({ placeholder, value, onChange, type }) => {
  return (
    <TextField
      placeholder={placeholder}
      type={type || "text"}
      value={value}
      onChange={onChange}
    />
  );
};

export default MyTextFiled;
