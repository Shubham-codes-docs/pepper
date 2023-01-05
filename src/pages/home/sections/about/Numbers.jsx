import React from "react";
import { Typography, Stack } from "@mui/material";

const Numbers = ({ item }) => {
  return (
    <Stack sx={{ padding: "50px 50px" }}>
      <Typography
        variant="body"
        sx={{
          font: "700 2.125rem/2.763rem Plus Jakarta Sans",
          display: "block",
        }}
      >
        {item.number}+
      </Typography>
      <Typography
        variant="overline"
        sx={{
          font: "400 0.875rem/1.3rem Inter",
          color: "rgba(255,250,255,0.8)",
        }}
      >
        {item.text}
      </Typography>
    </Stack>
  );
};

export default Numbers;
