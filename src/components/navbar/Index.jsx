import React from "react";
import { Stack, Button } from "@mui/material";
import classes from "./nav.module.css";
import svg from "../../assets/svg.svg";

const Index = () => {
  return (
    <nav>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{ width: "100%" }}
      >
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
            <h1 className="brand-name">Pepper</h1>
          </Stack>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <Stack direction="row">
              <li className={classes["menu-item"]}>About</li>
              <li className={classes["menu-item"]}>Blog</li>
              <li className={classes["menu-item"]}>Pricing</li>
              <li className={classes["menu-item"]}>Carrers</li>
              <li className={classes["menu-item"]}>Contact</li>
            </Stack>
          </ul>
        </div>
        <div className="control-section">
          <Stack spacing={3} direction="row" alignItems="center">
            <div className="cart">
              <i>
                <img src={svg} alt="Cart" />
              </i>
              <span className={`${classes["menu-item"]} ${classes.highlight}`}>
                Cart
              </span>
            </div>
            <div className={`${classes.logo} ${classes["toggle-btn"]}`}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="buttons">
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" sx={{ borderRadius: "10px" }}>
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{ borderRadius: "16px", padding: "14px 25px" }}
                >
                  Get Started
                </Button>
              </Stack>
            </div>
          </Stack>
        </div>
      </Stack>
    </nav>
  );
};

export default Index;
