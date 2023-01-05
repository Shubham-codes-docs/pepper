import React from "react";
import Numbers from "./Numbers";
import Features from "./Features";
import { Stack, Typography, Divider } from "@mui/material";
import classes from "./about.module.css";
import about1 from "../../../../assets/about-1.png";
import about2 from "../../../../assets/about-2.png";

const data = [
  {
    id: 1,
    number: 120,
    text: "Useful widgets",
  },
  {
    id: 2,
    number: 20,
    text: "Integrations",
  },
  {
    id: 3,
    number: 65,
    text: "Features Out",
  },
];

const Index = () => {
  return (
    <>
      <Stack alignItems="center" sx={{ marginBottom: "159.59px" }}>
        <div className={classes["about-container"]}>
          <Typography
            variant="h2"
            sx={{
              font: "700 3rem/4.2rem Plus Jakarta Sans",
            }}
          >
            A nice and simple
            <br /> financial overview
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ font: "500 0.938rem/1.3rem Inter", marginTop: "12.38px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Suspendisse varius enim in eros elementum tristique.
          </Typography>
          <Stack
            direction="row"
            divider={
              <Divider orientation="vertical" variant="middle" flexItem />
            }
            spacing={2}
            sx={{
              backgroundColor: "rgba(255,250,255,0.1)",
              borderRadius: "30px",
              marginTop: "60.59px",
            }}
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            {data.map((d) => {
              return <Numbers item={d} key={d.id} />;
            })}
          </Stack>
          <img
            src={about1}
            alt="About-1"
            style={{ position: "absolute", top: "350.48px", right: "-4.16px" }}
          />
          <img
            src={about2}
            alt="About-2"
            style={{ position: "absolute", top: "32.35px", left: "-4.16px" }}
          />
        </div>
      </Stack>
      <Features />
    </>
  );
};

export default Index;
