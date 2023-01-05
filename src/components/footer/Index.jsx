import React, { useState, useEffect } from "react";
import { Stack, Typography, Button } from "@mui/material";
import { LinkedIn, Twitter, Mail } from "@mui/icons-material";
import classes from "./footer.module.css";

const Index = () => {
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer>
      <Stack
        direction={screenSize < 1500 ? "column" : "row"}
        justifyContent="space-between"
      >
        <Stack alignItems="flex-start">
          <div className="brand">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <div className={classes.logo}>
                <div></div>
                <div></div>
              </div>
              <h1 className={classes["brand-name"]}>Pepper</h1>
            </Stack>
          </div>
          <Typography
            variant="subtitle1"
            sx={{
              font: "500 1rem/1.3rem Inter",
              color: "#fffaff",
              marginTop: "22px",
              marginBottom: "20px",
            }}
          >
            Pepper is one of the most reliable
            <br /> delievery patlform magement service to
            <br /> automate your network.
          </Typography>
          <Button
            variant="contained"
            sx={{
              borderRadius: "16px",
              padding: "14px 25px",
              backgroundColor: "#9D0AFF",
            }}
          >
            Get Started
          </Button>
          <div
            className={classes["social-media"]}
            style={{ marginTop: "25px" }}
          >
            <Stack direction="row" gap={2}>
              <LinkedIn sx={{ color: "#fff" }} />
              <Twitter sx={{ color: "#fff" }} />
              <Mail sx={{ color: "#fff" }} />
            </Stack>
          </div>
        </Stack>
        <Stack direction="row" gap={3}>
          <div className={classes["pages"]}>
            <Stack alignItems="flex-start" justifyContent="flex-start">
              <Typography
                variant="h6"
                sx={{
                  font: "600 1.25rem/1.625rem Plus Jakarta Sans",
                  color: "#fffaff",
                  marginBottom: "28px",
                }}
              >
                Pages main
              </Typography>
              <ul>
                <li className={classes["list-item"]}>Home</li>
                <li className={classes["list-item"]}>Blog</li>
                <li className={classes["list-item"]}>Blog Template</li>
                <li className={classes["list-item"]}>Pricing</li>
                <li className={classes["list-item"]}>Pricing Ecommerce</li>
                <li className={classes["list-item"]}>About</li>
                <li className={classes["list-item"]}>Careers</li>
                <li className={classes["list-item"]}>Careers Template</li>
                <li className={classes["list-item"]}>Contact</li>
              </ul>
            </Stack>
          </div>
          <div className={classes["pages"]}>
            <Stack alignItems="flex-start" justifyContent="flex-start">
              <Typography
                variant="h6"
                sx={{
                  font: "600 1.25rem/1.625rem Plus Jakarta Sans",
                  color: "#fffaff",
                  marginBottom: "28px",
                }}
              >
                Template pages
              </Typography>
              <ul>
                <li className={classes["list-item"]}>Style guide</li>
                <li className={classes["list-item"]}>Licenses</li>
                <li className={classes["list-item"]}>Changelog</li>
              </ul>
            </Stack>
          </div>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Index;
