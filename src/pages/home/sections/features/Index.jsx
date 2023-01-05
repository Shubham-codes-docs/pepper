import React from "react";
import FeatureCard from "../../../../components/cards/FeatureCard";
import { Typography, Stack, Container } from "@mui/material";
import {
  MailOutlineRounded,
  EventRounded,
  PersonOutlineOutlined,
  PaymentOutlined,
  GridViewRounded,
  NotificationsOutlined,
} from "@mui/icons-material";
import classes from "./feature.module.css";

const data = [
  {
    id: 1,
    heading: "Email Management",
    body: `Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. 
    Id laoreet suscipit vel sagittis non commodo semper.`,
    icon: <MailOutlineRounded />,
  },
  {
    id: 2,
    heading: "Campaign Calender",
    body: `Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. 
    Id laoreet suscipit vel sagittis non commodo semper.`,
    icon: <EventRounded />,
  },
  {
    id: 3,
    heading: "Personal assistance",
    body: `Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. 
    Id laoreet suscipit vel sagittis non commodo semper.`,
    icon: <PersonOutlineOutlined />,
  },
  {
    id: 4,
    heading: "Payment feature",
    body: `Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. 
    Id laoreet suscipit vel sagittis non commodo semper.`,
    icon: <PaymentOutlined />,
  },
  {
    id: 5,
    heading: "Utility apps",
    body: `Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. 
    Id laoreet suscipit vel sagittis non commodo semper.`,
    icon: <GridViewRounded />,
  },
  {
    id: 6,
    heading: "Sale notification",
    body: `Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. 
    Id laoreet suscipit vel sagittis non commodo semper.`,
    icon: <NotificationsOutlined />,
  },
];

const Index = () => {
  return (
    <>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: "159.41px", textAlign: "center" }}
      >
        <Typography
          variant="h1"
          sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans" }}
        >
          Supercharge your <br />
          workflow to get started
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ font: "500 0.938rem/1.3rem Inter", marginTop: "14.38px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Suspendisse varius enim in eros elementum tristique.
        </Typography>
      </Stack>
      <Container>
        <div className={classes["feature-card-container"]}>
          {data.map((d) => {
            return <FeatureCard details={d} key={d.id} />;
          })}
        </div>
      </Container>
    </>
  );
};

export default Index;
