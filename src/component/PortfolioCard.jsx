import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function PortfolioCard({ title, icon, description, onClick }) {
  return (
    <Card
      sx={{ maxWidth: 345, marginTop: 5 }}
      onClick={onClick || alert("provide function")}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={icon || "https://source.unsplash.com/random"}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || "title here"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description || "description here"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
