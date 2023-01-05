import React from "react";
import { Typography, Button } from "@mui/material";
import classes from "./branding.module.css";
import about1 from "../../../../assets/about-1.png";
import about2 from "../../../../assets/brand-image.png";
import v2 from "../../../../assets/Vector (2).png";
import v1 from "../../../../assets/Vector (1).png";
import v0 from "../../../../assets/Vector.png";
import v3 from "../../../../assets/Vector4.png";
import v4 from "../../../../assets/Vector5.png";
import v5 from "../../../../assets/Vector6.png";

const MainBrand = () => {
  return (
    <div className={classes["main-brand-container"]}>
      <Typography
        variant="h1"
        sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans", color: "#FFFAFF" }}
      >
        Focus on the
        <br /> analytics that matter.
      </Typography>
      <Typography
        variant="h1"
        sx={{
          font: "500 1rem/1.3rem Inter",
          color: "rgba(255, 250, 255, 0.8)",
        }}
      >
        Grow faster with a website that helps you convert
        <br /> more customers.
      </Typography>
      <div className={classes["controls"]}>
        <Button
          variant="contained"
          sx={{
            padding: "18px 32px",
            borderRadius: "18px",
            marginTop: "41px",
            backgroundColor: "#9D0AFF",
          }}
        >
          Get Started Now
        </Button>
        <Button
          variant="contained"
          sx={{
            padding: "18px 32px",
            borderRadius: "18px",
            marginTop: "41px",
            backgroundColor: "inherit",
            border: "1px solid #FFFAFF",
            marginLeft: "10px",
          }}
        >
          Compare Plans
        </Button>
        <img
          src={about2}
          alt=""
          style={{
            position: "absolute",
            top: "3.38px",
            left: "-19.04px",
            transform: "rotate(-8deg)",
          }}
        />
        <img
          src={about1}
          alt=""
          style={{
            position: "absolute",
            top: "328.68px",
            right: "-4.29px",
            bottom: "-119.49px",
            rotate: "-2deg",
          }}
        />
        <img
          src={v0}
          alt=""
          style={{
            position: "absolute",
            left: "0",
            bottom: "3px",
          }}
        />
        <img
          src={v1}
          alt=""
          style={{
            position: "absolute",
            left: "0",
            bottom: "2px",
          }}
        />
        <img
          src={v2}
          alt=""
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
          }}
        />
        <img
          src={v3}
          alt=""
          style={{
            position: "absolute",
            right: "0",
            top: "4px",
          }}
        />
        <img
          src={v4}
          alt=""
          style={{
            position: "absolute",
            right: "0",
            top: "3px",
          }}
        />
        <img
          src={v5}
          alt=""
          style={{
            position: "absolute",
            right: "0",
            top: "0",
          }}
        />
      </div>
    </div>
  );
};

export default MainBrand;
