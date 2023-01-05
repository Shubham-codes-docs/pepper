import React, { useState, useEffect } from "react";
import Brands from "./Brands";
import About from "./sections/about/Index";
import Features from "./sections/features/Index";
import Information from "./sections/informations/Index";
import Review from "./sections/review/Index";
import Branding from "./sections/branding/Index";
import { Stack, Container, Typography, Button } from "@mui/material";
import classes from "./home.module.css";
import hero from "../../assets/hero-home.jpg";
import hero1 from "../../assets/hero-mobile.jpg";

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
    <>
      <div className={classes.hero}>
        <Container>
          <Stack textAlign="center" alignItems="center" sx={{ height: "100%" }}>
            <Typography
              variant="h1"
              sx={{
                font: "700 3.7rem/4.5rem Plus Jakarta Sans",
                marginTop: "122px",
                marginBottom: "14px",
              }}
            >
              Save more and get your
              <br /> finances right
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ font: "500 0.938rem/1.3rem Inter" }}
            >
              Orci molestie nam vulputate nunc habitant gravida. Interdum
              <br /> vitae vivamus ipsum aliquet consectetur aliquam.
            </Typography>
            <Button
              sx={{
                borderRadius: "18px",
                padding: "18px 32px",
                marginTop: "40.59px",
                marginBottom: "60px",
                backgroundColor: "#9D0AFF",
              }}
              variant="contained"
            >
              Request a demo
            </Button>
          </Stack>
        </Container>
        <div>
          <img
            src={screenSize < 1500 ? hero1 : hero}
            alt="hero-img"
            className={classes["hero-image"]}
          />
        </div>
      </div>
      <Brands />
      <About />
      <Features />
      <Information />
      <Review />
      <Branding />
    </>
  );
};

export default Index;
