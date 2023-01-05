import React from "react";
import { Paper, Typography } from "@mui/material";

const FeatureCard = ({
  details,
  fontSizeHeading = "2.125rem",
  bodyFontSize = "1rem",
  lineSizeHeading = "1.95rem",
  bodyLineSize = "1.3rem",
}) => {
  return (
    <Paper
      sx={{
        padding: "46px 40px",
        boxShadow: " 0px 8px 80px rgba(21, 21, 49, 0.05)",
        backgroundColor: "#FFF",
        borderRadius: "30px",
      }}
      elevation={0}
    >
      <div
        className="icons"
        style={{
          backgroundColor: "#9D0AFF",
          width: "56px",
          height: "56px",
          borderRadius: "10px",
          marginBottom: "28px",
          textAlign: "center",
          color: "#FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {details.icon}
      </div>
      <div className="content">
        <Typography
          variant="h3"
          sx={{
            font: `700 ${fontSizeHeading}/${lineSizeHeading} Plus Jakarta Sans`,
          }}
        >
          {details.heading}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            font: `500 ${bodyFontSize}/${bodyLineSize} Inter`,
            marginTop: "13.19px",
          }}
        >
          {details.body}
        </Typography>
      </div>
    </Paper>
  );
};

export default FeatureCard;
