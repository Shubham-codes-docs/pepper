import React from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import { Check } from "@mui/icons-material";

const Index = ({ item }) => {
  return (
    <Card sx={{ marginRight: "28px", marginBottom: "28px" }}>
      <Stack direction={"row"}>
        <div
          className="image"
          style={{
            borderRadius: "50%",
            backgroundColor: item.color,
            textAlign: "center",
            height: "40px",
            width: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
        </div>
        <CardContent>
          <Typography
            variant="body1"
            sx={{ font: "700 0.875rem/1.3rem Inter", color: "#151531" }}
          >
            {item.text}
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default Index;
