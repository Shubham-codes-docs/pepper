import React from "react";
import Card from "../../../../components/cards/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data1 = [
  {
    id: 1,
    text: "Public and private chat",
    color: "#9D0AFF",
  },
  {
    id: 2,
    text: "Event scheduler",
    color: "#9D0AFF",
  },
  {
    id: 3,
    text: "Appoitment scheduling",
    color: "#9D0AFF",
  },
  {
    id: 4,
    text: "No prior credit card required",
    color: "#9D0AFF",
  },
  {
    id: 5,
    text: "Group video calls",
    color: "#9D0AFF",
  },
  {
    id: 6,
    text: "Activity Stream",
    color: "#9D0AFF",
  },
];

const data2 = [
  {
    id: 7,
    text: "Group video calls",
    color: "#00F59B",
  },
  {
    id: 8,
    text: "Event scheduler",
    color: "#00F59B",
  },
  {
    id: 9,
    text: "Expert on demad call",
    color: "#00F59B",
  },
  {
    id: 10,
    text: "Email support for 24/7",
    color: "#00F59B",
  },
  {
    id: 11,
    text: "Group video calls",
    color: "#00F59B",
  },
  {
    id: 12,
    text: "Activity Stream",
    color: "#00F59B",
  },
  {
    id: 13,
    text: "No prior credit card required",
    color: "#00F59B",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const Features = () => {
  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {data1.map((d) => {
          return <Card key={d.id} item={d} />;
        })}
      </Carousel>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      >
        {data2.map((d) => {
          return <Card key={d.id} item={d} />;
        })}
      </Carousel>
    </>
  );
};

export default Features;
