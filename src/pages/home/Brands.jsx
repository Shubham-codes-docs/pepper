import React from "react";
import { Typography, Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Brands = () => {
  return (
    <div className="brands">
      <Typography
        variant="subtitle1"
        sx={{
          font: "400 1.25rem/1.625rem Plus Jakarta Sans",
          textAlign: "center",
          color: "rgba(21,21,49,0.6)",
          marginBottom: "33px",
        }}
      >
        Trusted and loved by the world’s best teams
      </Typography>
      <Container>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          <img src={brand1} alt="brand1" />
          <img src={brand2} alt="brand2" />
          <img src={brand3} alt="brand3" />
          <img src={brand4} alt="brand4" />
        </Carousel>
      </Container>
    </div>
  );
};

export default Brands;
