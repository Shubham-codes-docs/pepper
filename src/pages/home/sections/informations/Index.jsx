import React from "react";
import { Container, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import classes from "./information.module.css";
import info1 from "../../../../assets/info1.jpg";
import info2 from "../../../../assets/info2.svg";
import info3 from "../../../../assets/info3.jpg";

const Index = () => {
  return (
    <Container>
      <div className={classes["info-container"]}>
        <div className="image">
          <img src={info1} alt="info1" className={classes["info-image"]} />
        </div>
        <div className="info-text">
          <div className="heading">
            <Typography
              variant="h1"
              sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans" }}
            >
              Easily manage
              <br /> your team's tasks
            </Typography>
          </div>
          <div className="subheading">
            <Typography
              variant="subtitle1"
              sx={{
                font: "500 0.938rem/1.3rem Inter",
                color: "rgba(21, 21, 49, 0.8)",
                marginTop: "12.238px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </div>
          <div className="lists">
            <ul>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#845AFF",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Create posts, reels and stories.
              </li>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#845AFF",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Publish your Facebook posts dynamically.
              </li>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#845AFF",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Schedule any Twitter posts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["info-container"]}>
        <div className="image">
          <img src={info2} alt="info2" className={classes["info-image"]} />
        </div>
        <div className="info-text">
          <div className="heading">
            <Typography
              variant="h1"
              sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans" }}
            >
              Simple financial
              <br /> overview for you
            </Typography>
          </div>
          <div className="subheading">
            <Typography
              variant="subtitle1"
              sx={{
                font: "500 0.938rem/1.3rem Inter",
                color: "rgba(21, 21, 49, 0.8)",
                marginTop: "12.238px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </div>
          <div className="lists">
            <ul>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#00F59B",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Create posts, reels and stories.
              </li>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#00F59B",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Publish your Facebook posts dynamically.
              </li>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#00F59B",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Schedule any Twitter posts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["info-container"]}>
        <div className="image">
          <img src={info3} alt="info3" className={classes["info-image"]} />
        </div>
        <div className="info-text">
          <div className="heading">
            <Typography
              variant="h1"
              sx={{ font: "700 3rem/4.2rem Plus Jakarta Sans" }}
            >
              Manage and Track
              <br /> Your Projects
            </Typography>
          </div>
          <div className="subheading">
            <Typography
              variant="subtitle1"
              sx={{
                font: "500 0.938rem/1.3rem Inter",
                color: "rgba(21, 21, 49, 0.8)",
                marginTop: "12.238px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Suspendisse varius enim in eros elementum tristique.
            </Typography>
          </div>
          <div className="lists">
            <ul>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#845AFF",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Create posts, reels and stories.
              </li>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#845AFF",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Publish your Facebook posts dynamically.
              </li>
              <li className={classes["list-item"]}>
                <span
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#845AFF",
                    textAlign: "center",
                    height: "24px",
                    width: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "12px",
                    padding: "5px",
                  }}
                >
                  <Check sx={{ color: "#FFFAFF", margin: "auto" }} />
                </span>{" "}
                Schedule any Twitter posts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Index;
