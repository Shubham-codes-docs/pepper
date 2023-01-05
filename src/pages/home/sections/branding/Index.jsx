import React from "react";
import MainBrand from "./MainBrand";
import { Typography, Container, Button } from "@mui/material";
import {
  PersonOutlineOutlined,
  ChatOutlined,
  SendOutlined,
} from "@mui/icons-material";
import FeatureCard from "../../../../components/cards/FeatureCard";
import classes from "./branding.module.css";

const data = [
  {
    id: 1,
    heading: "7.000 Happy users",
    body: "Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac",
    icon: <PersonOutlineOutlined />,
  },
  {
    id: 2,
    heading: "24/7 Support",
    body: "Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac",
    icon: <ChatOutlined />,
  },
  {
    id: 3,
    heading: "Global community",
    body: "Bibendum feugiat mauris, malesuada nulla leo porta et. Nunc eleifend aliquet nullam nec sit gravida ac",
    icon: <SendOutlined />,
  },
];

const Index = () => {
  return (
    <>
      <Container sx={{ marginTop: "231px" }}>
        <div className={classes["brand-container"]}>
          <div className="brand-text" style={{ marginRight: "180px" }}>
            <Typography
              variant="h1"
              sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans", width: "100%" }}
            >
              Build a powerful website for your startup.
            </Typography>
            <Typography variant="h1" sx={{ font: "500 1rem/1.3rem Inter" }}>
              Orci molestie nam vulputate nunc habitant
              <br /> gravida. Interdum vitae vivamus ipsum aliquet
              <br /> consectetur aliquam.
            </Typography>
            <Button
              variant="contained"
              sx={{
                padding: "18px 32px",
                borderRadius: "18px",
                marginTop: "41px",
              }}
            >
              Read More
            </Button>
          </div>
          <div
            className={classes["main-cards"]}
            style={{ marginRight: "40px" }}
          >
            <div style={{ marginBottom: "40px" }}>
              <FeatureCard
                details={data[0]}
                fontSizeHeading="1.375rem"
                lineSizeHeading="1.788rem"
                bodyFontSize="0.93rem"
                bodyLineSize="1.3rem"
              />
            </div>
            <FeatureCard
              details={data[1]}
              fontSizeHeading="1.375rem"
              lineSizeHeading="1.788rem"
              bodyFontSize="0.93rem"
              bodyLineSize="1.3rem"
            />
          </div>
          <FeatureCard
            details={data[2]}
            fontSizeHeading="1.375rem"
            lineSizeHeading="1.788rem"
            bodyFontSize="0.93rem"
            bodyLineSize="1.3rem"
          />
        </div>
        <MainBrand />
      </Container>
    </>
  );
};

export default Index;
