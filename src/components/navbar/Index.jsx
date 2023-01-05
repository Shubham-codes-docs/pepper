import React, { useEffect } from "react";
import { useState } from "react";
import { Stack, Button } from "@mui/material";
import classes from "./nav.module.css";
import svg from "../../assets/svg.svg";

const Index = () => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuToggler = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{ width: "100%", flexWrap: "wrap" }}
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
        <div
          className={classes["menu"]}
          style={{
            display:
              screenSize > 1500 ? "inherit" : showMenu ? "inherit" : "none",
          }}
        >
          <ul className="menu-list">
            <Stack
              direction={screenSize <= 1500 ? "column" : "row"}
              alignItems="center"
              justifyContent="center"
              sx={{ textAlign: "center" }}
            >
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
            <div
              className={`${classes.logo} ${classes["toggle-btn"]}`}
              onClick={menuToggler}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={classes["buttons"]}>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: "10px",
                    borderColor: " #9d0aff",
                    color: " #9d0aff",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "16px",
                    padding: "14px 25px",
                    backgroundColor: "#9d0aff",
                  }}
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
