import React from "react";
import { Paper, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

const ReviewCard = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "30px",
        padding: "40px 46.32px 40px 32px",
        marginRight: "40px",
        marginTop: "61px",
        boxShadow: "1px 1px 80px rgba(21, 21, 49, 0.05)",
      }}
      elevation={0}
    >
      <Typography
        variant="subtitle1"
        sx={{ font: "500 1.375rem/1.788rem Plus Jakarta Sans" }}
      >
        Orci molestie nam vulputate nunc habitant gravida. Interdum vitae
        vivamus ipsum aliquet consectetur.
      </Typography>
      <div
        className="rating"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "26px 0",
        }}
      >
        <Star sx={{ color: "#00F59B" }} />
        <Star sx={{ color: "#00F59B" }} />
        <Star sx={{ color: "#00F59B" }} />
        <Star sx={{ color: "#00F59B" }} />
        <Star sx={{ color: "#00F59B" }} />
      </div>
      <div className="name">
        <Typography
          variant="body"
          sx={{ font: "700 1.25rem/1.625rem Plus Jakarta Sans" }}
        >
          Ronald Richards
          <br />
        </Typography>
        <Typography
          variant="body"
          sx={{ font: "400 0.875rem/1.138rem Plus Jakarta Sans" }}
        >
          CEO- Utlta
        </Typography>
      </div>
    </Paper>
  );
};

export default ReviewCard;
