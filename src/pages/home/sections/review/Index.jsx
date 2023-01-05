import React from "react";
import { Typography, Container } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "../../../../components/cards/ReviewCard";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const Index = () => {
  return (
    <>
      <Container sx={{ marginTop: "140px" }}>
        <Typography
          variant="h1"
          sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans" }}
        >
          Don’t take our words for
          <br /> it - listen to our clients
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            font: "500 0.938rem/1.3rem Inter",
            color: "rgba(21, 21, 49, 0.8)",
            marginTop: "12.238px",
          }}
        >
          Orci molestie nam vulputate nunc habitant gravida. Interdum
          <br /> vitae vivamus ipsum aliquet consectetur aliquam.
        </Typography>
      </Container>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Carousel>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Carousel>
    </>
  );
};

export default Index;
